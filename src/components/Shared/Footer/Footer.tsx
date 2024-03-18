import './Footer.scss';
import nicLogo from 'src/assets/images/nic-logo.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateModel, StoreModel } from 'src/models/dpgi';
import axios from 'axios';
import { getVisitorCounter } from 'src/actions/dpgi.action';
import { Link } from 'react-router-dom';
import {useLocation } from "react-router-dom";

const Footer = () => {
    const dispatch = useDispatch()
    const lastActiveIp = localStorage.getItem('activeIp') || ''
    const [count, setCount] = useState(localStorage.getItem('count') || 0)
    const [ip, setIP] = useState(localStorage.getItem('activeIp') || '');
    const visitorCounter = useSelector<StoreModel>(store => store.visitorCounter) as InitialStateModel
    const scrollLocation = useLocation();
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        if (lastActiveIp === '' || !count) {
            // const res = await axios.get('https://api.ipify.org?format=json')
            // setIP(res.data.ip)
        }
    }

    useEffect(() => {
        if (ip !== '') {
            dispatch(getVisitorCounter(ip))
        }
    }, [ip])

    useEffect(() => {
        if (visitorCounter.loaded && !visitorCounter.loading) {
            localStorage.setItem('activeIp', ip)
            localStorage.setItem('count', JSON.stringify(visitorCounter.data))
            setCount(visitorCounter.data)
        }
    }, [visitorCounter])

    const goToCategory = (catId: string) => {
        localStorage.setItem('activeCategory', catId)
        if (localStorage.getItem('activeYear')) {
            localStorage.removeItem('activeYear')
        }
        if (localStorage.getItem('activeState')) {
            localStorage.removeItem('activeState')
        }
        if (localStorage.getItem('activeDistrict')) {
            localStorage.removeItem('activeDistrict')
        }
        window.location.href = '/category'
    }

    useEffect(() => {
        handleScroll(scrollLocation.hash);
      }, [scrollLocation]);

    const handleScroll = (id:string) => {
        if(id){
          const currentElement = document.querySelector(id);
          if (currentElement) {
            const elementTop = currentElement.getBoundingClientRect().top;
            window.scrollTo({
              top: window.scrollY + elementTop-100,
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
      
    
      };

    return (
        <footer className="site-footer">
            <div className="site-footer-top ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-links">
                                <h2 className="footer-links-heading">
                                    Links
                                </h2>
                                <ul>
                                    <li>
                                        <Link to="/#aboutPmshri" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            About PM SHRI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#main-content" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>                                       
                                        <Link to="/#gallery" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Gallery
                                        </Link>                                        
                                    </li>
                                    <li>
                                        <Link to="/Methodology" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Methodology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Documents
                                        </Link>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-links">
                                <h2 className="footer-links-heading">
                                    Features
                                </h2>
                                <ul>
                                    <li>                                       
                                        <Link to="/#PM_Features" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Selection through Challenge Method with Three Stage Process
                                        </Link>
                                    </li>
                                    <li>                                       
                                        <Link to="/#PM_Features" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Empowering students to become nation-builders Monitoring Mechanism
                                        </Link>
                                    </li>

                                    <li>                                       
                                        <Link to="/#PM_Features" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Preparing future-ready citizens
                                        </Link>
                                    </li>
                                    <li>
                                       
                                        <a href="/sqaf" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            SQAF
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-links">
                                <h2 className="footer-links-heading">
                                    Policy
                                </h2>
                                <ul>
                                    <li>
                                        <Link to="/terms-condition" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>                                       
                                        <Link to="/copyright_policy" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Copyright Policy
                                        </Link>                                        
                                    </li>
                                    <li>
                                        <Link to="/hyperlink-policy" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Hyperlink Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/disclaimer" className="footer-links-icon">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Disclaimer
                                        </Link>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-logo">
                                <img src={nicLogo} alt="nic-logo" className="img-fluid" />
                            </div>
                            <div className="footer-desc">
                                <p>
                                    This site is designed, developed, maintained and hosted by National Informatics Centre (NIC), Ministry of Electronics & Information Technology.
                                </p>
                                <p>
                                    Content owned & provided by Department of School Education & Literacy, Ministry of Education, Government of India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="copyright-text">
                                <p>
                                    © Copyright {new Date().getFullYear()} PM SHRI. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="visitor">
                                {/* <h2 className="visitor-heading">
                                    Visitor Counter :
                                </h2> */}
                                <div className="visitor-no">
                                    {/* <span>{visitorCounter?.data}</span> */}
                                    {/* <span>0</span>
                                    <span>0</span>
                                    <span>0</span>
                                    <span>6</span>
                                    <span>8</span>
                                    <span>2</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;