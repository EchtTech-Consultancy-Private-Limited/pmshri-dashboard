import { useState, useEffect, useRef } from "react";
import "./Header.scss";
import Logo from "src/assets/images/pm-shri.png";
import ministryLogo from "src/assets/images/mhrd-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { EventModel, StoreModel } from "src/models/dpgi";
import { getAllStates, getAllYears } from "src/actions/dpgi.action";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const currentLanguage = localStorage.getItem("activeLang") || "en";
  const toggle_ref = useRef<HTMLButtonElement | null>(null);
  const MOBILE_VIEW_WIDTH_THRESHOLD = 991;
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < MOBILE_VIEW_WIDTH_THRESHOLD);
  const [lang, setLang] = useState<string>(currentLanguage);
  let location = window.location.href.split("/");
  let activeLoaction = location[location.length - 1];
  const scrollLocation = useLocation();
  useNavigate();
  useSearchParams();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  const dispatch = useDispatch();
  const states = useSelector<StoreModel>((store) => store.states.data) as [];
  const changeAppLanguage = (event: EventModel) => {
    localStorage.setItem("activeLang", event.target.value);
    setLang(event.target.value);
  };
  useEffect(() => {
    if (lang !== "") {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    dispatch(getAllStates("4"));
    dispatch(getAllYears());
  }, []);

  const changeSizeByBtn = (size: any) => {
    if (size === "normal") {
      document.body.style.fontSize = "16px";
    } else if (size === "average") {
      document.body.style.fontSize = "17px";
    } else if (size === "max") {
      document.body.style.fontSize = "18px";
    }
  };

  useEffect(() => {
    handleScroll(scrollLocation.hash);
  }, [scrollLocation]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (id: string) => {
    if (id) {
      const currentElement = document.querySelector(id);
      if (currentElement) {
        const elementTop = currentElement.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + elementTop - 100,
          behavior: "smooth",
        });
      }
    }
    else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

      document.getElementById('main-dropdown-content')?.classList.remove('show-1')
    document.getElementById('main-child-dropdown')?.classList.remove('show')

  };

  const handleDropdownChange = () => {
    if (toggle_ref.current) {
      if (isMobileView) {
        toggle_ref.current.click();
      }
    }
    // document.getElementById('main-dropdown-content')?.classList.remove('show-1')
    // document.getElementById('main-child-dropdown')?.classList.remove('show')
  }
  const elements = document.querySelectorAll('.site-header, .hero-banner');

  elements.forEach(function(element) {
      element.addEventListener('click', function() {
        
    document.getElementById('main-dropdown-content')?.classList.remove('show-1')
    document.getElementById('main-child-dropdown')?.classList.remove('show')
      });
  });
  let flag = 0;
  const showHide = () => {

    if (!flag) {
      flag = 1;
      document.getElementById('main-child-dropdown')?.classList.add('show')
      document.getElementById('main-dropdown-content')?.classList.add('show-1')
      // document.getElementById('navbarDropdownMenuLink')?.classList.add('show-2')
    } else {
      flag = 0;
      document.getElementById('main-dropdown-content')?.classList.remove('show-1')
      document.getElementById('main-child-dropdown')?.classList.remove('show')
    }
  }
  const handleResize = () => {
    setIsMobileView(window.innerWidth < MOBILE_VIEW_WIDTH_THRESHOLD);
  };



  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-top-content">
                <div className="header-top-skipwrap">
                  <ul>
                    <li>
                      <a href="https://www.india.gov.in/" target="_blank">
                        Government of India
                      </a>
                    </li>

                    <li>
                      <a href="https://www.education.gov.in/en" target="_blank">
                        Ministry of Education
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-skipwrap">
                  <ul>
                    <li>
                      <a href="#aboutPmshri">{t("skip_to_main_content")}</a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          window.location.href = "/screenreader";
                        }}
                      >
                        {t("screen_reader_access")}
                      </a>
                    </li>
                    <li>
                      <div className="d-flex">
                        <button
                          className="text-increment-btn"
                          onClick={() => changeSizeByBtn("normal")}
                        >
                          A
                        </button>
                        <button
                          className="text-increment-btn"
                          onClick={() => changeSizeByBtn("average")}
                        >
                          A+
                        </button>
                        <button
                          className="text-increment-btn"
                          onClick={() => changeSizeByBtn("max")}
                        >
                          A++
                        </button>
                      </div>
                    </li>
                    {/* <li>
                                            <div className="d-flex">
                                                <a href="#" className="whitebox">A</a>
                                                <a href="#" className="blackbox">A</a>
                                            </div>
                                        </li> */}
                    <li>
                      <a>
                        <div className="select-wrap">
                          <select
                            defaultValue={lang}
                            className="form-select Langchange"
                            onChange={changeAppLanguage}
                          >
                            <option value="en">English</option>
                            <option value="hi">हिन्दी</option>
                          </select>
                          <span className="material-icons">
                            arrow_drop_down
                          </span>
                        </div>
                      </a>
                    </li>
                    {/* <li>
                                            <a onClick={logout}>{t("logout")}</a>
                                        </li> */}
                  </ul>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  id="header-menu-toggle-btn"
                  ref={toggle_ref}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={scroll ? "site-header scrolled" : "site-header"}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
             
                <div className="logo-wrap">
                  <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="logo" className="img-fluid" />
                  </Link>
                  <a href="https://www.education.gov.in/" target="_blank">
                    <img src={ministryLogo} alt="logo" className="img-fluid" />
                  </a>
                </div>
  
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
                <div className="collapse navbar-collapse " id="navbarContent">
                  <ul className="navbar-nav w-100 ">
                    <li
                      className={
                        activeLoaction === "" ? "nav-item active" : "nav-item"
                      }
                      onClick={handleDropdownChange}
                    // onClick={(e) => handleScroll(e,"home")}
                    >
                      <Link to="/">{t("home")}</Link>
                    </li>
                    <li
                      className={
                        activeLoaction === "#aboutPmshri"
                          ? "nav-item active"
                          : "nav-item"
                      }
                      onClick={handleDropdownChange}
                    // onClick={(e) => handleScroll(e,"aboutPmshri")}
                    >
                      <Link to="/#aboutPmshri">
                        {t("about pm shri")}
                      </Link>
                    </li>

                    <li
                      className={
                        activeLoaction === "#main-content"
                          ? "nav-item active"
                          : "nav-item"
                      }
                      onClick={handleDropdownChange}
                    // onClick={(e) => handleScroll(e,"main-content")}
                    >
                      <Link to="/#main-content">{t("dashboard")}</Link>
                    </li>

                    <li
                      className={
                        activeLoaction === "#gallery"
                          ? "nav-item active"
                          : "nav-item"
                      }
                      onClick={handleDropdownChange}
                    // onClick={(e) => handleScroll(e,"gallery")}
                    >
                      <Link to="/#gallery">{t("gallery")}</Link>
                    </li>

                    <li
                      className={
                        activeLoaction === "Methodology"
                          ? "nav-item active"
                          : "nav-item"
                      }
                      onClick={handleDropdownChange}
                    // onClick={(e) => handleScroll(e,"methodology")}
                    >
                      <Link to="Methodology">{t("methodology")}</Link>
                    </li>

                    <li className="nav-item dropdown category-dropdown">
                      <a className={
                        "nav-link dropdown-toggle " +
                        (activeLoaction === "category" ? "active" : "")
                      }
                      
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {t("Document")}
                        <div className="dropdown-icon">
                          <span className="material-icons-round">
                            expand_more
                          </span>
                        </div>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                        id="main-dropdown-content">
                        <li onClick={handleDropdownChange}>
                          <div className="dropdown-content">
                            <a
                              className="dropdown-item"
                              href="/part1_pmshri.pdf"
                              target="_blank">
                              Vision, Mission, Pillars and Selection Methodology
                            </a>
                          </div>
                        </li>
                        <li onClick={showHide}>
                          <div className="dropdown-content">
                            <a
                              className="dropdown-item"
                              href="#">
                              Implementation and Programmatic Guidelines <span className="material-icons-round">chevron_right</span>
                            </a>

                            {/* show */}
                            <ul
                              className="dropdown-menu"
                              id="main-child-dropdown"
                              aria-labelledby="navbarDropdownMenuLink">
                              <li onClick={handleDropdownChange}>
                                <div className="dropdown-content">
                                  <a
                                    className="dropdown-item"
                                    href="/part1_pmshri.pdf"
                                    target="_blank">
                                    Part 1
                                  </a>
                                </div>
                              </li>
                              <li onClick={handleDropdownChange}>
                                <div className="dropdown-content">
                                  <a
                                    className="dropdown-item"
                                    href="/part2_pmshri.pdf"
                                    target="_blank">
                                    Part 2
                                  </a>
                                </div>

                              </li>                              
                            </ul>
                          </div>

                        </li>
                        <li onClick={handleDropdownChange}>
                          <div className="dropdown-content">
                            <a
                              className="dropdown-item"
                              href="/part3_pmshri.pdf"
                              target="_blank"
                            >
                              School Quality Assessment Framework
                            </a>
                          </div>
                        </li>
                        <li onClick={handleDropdownChange}>
                          <div className="dropdown-content">
                            <a
                              className="dropdown-item"
                              href="/PM_Shri_Workshop_Report_Final.pdf"
                              target="_blank"
                            >
                              Training and Capacity Building
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>


                    <li className={ activeLoaction === "faqs" ? "nav-item active" : "nav-item" } >
                      <Link to="/faqs">{t("faqs")}</Link>
                    </li>
                    <li className={ activeLoaction === "sqaf-home" ? "nav-item active" : "nav-item" } onClick={handleDropdownChange} >
                      <Link to="/sqaf-home">{t("sqaf")}</Link>
                    </li>

                    {/* <li className={ activeLoaction === "sqaf" ? "nav-item active" : "nav-item" } onClick={handleDropdownChange} >
                      <Link to="/sqaf">{t("sqaf")}</Link>
                    </li> */}

                    <li className="nav-item">
                      <a
                        className={"nav-link "}
                        href="https://pmshrischools.education.gov.in"
                        target="_blank"
                      >
                        {t("PM SHRI Login")}
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
              </nav>

      </header>
    </>
  );
};

export default Header;
