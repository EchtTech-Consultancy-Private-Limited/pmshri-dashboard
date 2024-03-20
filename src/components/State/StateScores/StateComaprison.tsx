import { getComparisonData } from "src/actions/dpgi.action";
import { EventModel, InitialStateModel, StoreModel } from "src/models/dpgi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./statescore.scss";
import Pagination from "src/components/State/StateScores/Pagination";
import {
  getStateWiseCategoryData,
  getSchoolListFilterWise,
  getCardDataFilterWise,
  getAllStates,
  getAllDistrict,
  getBlockData,
} from "src/actions/dpgi.action";
import { basename } from "path/win32";
import "./statestyle.css";
import { Link } from "react-router-dom";

const StateComparison = (props: any) => {
  const {
    years,
    schoolData,
    parentSearch,
    distrcitName,
    blockName,
    isLoadingSchoolList,
    search,
    setsearch,
    currentPage,
    setCurrentPage,
    perPage,
    setPerPage,
    schoolType,
    currentStateName,
    
  } = props;
  
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const dispatch = useDispatch();
  const data = useSelector<StoreModel>(
    (store) => store.comparisonData
  ) as InitialStateModel;
  //const filterWiseSchoolList = useSelector<StoreModel>(store => store.filterWiseSchool) as InitialStateModel
  localStorage.setItem(
    "Active_State_ID",
    localStorage.getItem("activeStateID") || ""
  );
  const [year, setYear] = useState(years[1].yr_code);
  const withComparedYear = years[0].yr_code;
  const withComparedYearName = years[0].year as string;
  const [toComparedYearName, setToComparedYearName] = useState(years[1].year);
  const [withComparedData, setwithComparedData] = useState([]);
  const [toComparedData, settoComparedData] = useState([]);
  const [SchoolData, setSchoolData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [perPage, setPerPage] = useState<number>(4);
  let state = JSON.parse(localStorage.getItem("activeState") || "");
  let activeDistrictName = localStorage.getItem("activeDistrictName");
 

  useEffect(() => {
    if (!isNaN(schoolData?.data?.totalcount)) {
      setTotalPageCount(schoolData?.data?.totalcount);
    }
    
  }, [schoolData]);

  const handleSearch = (event: any) => {
    setsearch(event.target.value);
  };

  useEffect(() => {
    if (!data.loading && data.loaded) {
      setwithComparedData(data.data.withComparedData);
      settoComparedData(data.data.toComparedData);
    }
  }, [data]);

  useEffect(() => {
    if (withComparedData.length && toComparedData.length) {
      setIsLoading(false);
    }
  }, [withComparedData, toComparedData]);

  // useEffect(() => {
  //   dispatch(getComparisonData(withComparedYear, year, state));
  // }, [year, state]);

  const changeYear = (event: EventModel) => {
    setYear(event.target.value);
    setToComparedYearName(event.target.options[event.target.value].text);
  };

  const gpi = (type: number): number | null => {
    if (type !== null) {
      if (type === 1) {
        const s = localStorage.getItem("Active_State_ID");
        return s ? parseInt(s, 10) : 0;
      }
      if (type === 2) {
        const d = localStorage.getItem("Active_District_ID");
        return d ? parseInt(d, 10) : 0;
      }
      if (type === 3) {
        const b = localStorage.getItem("Active_Block_ID");
        return b ? parseInt(b, 10) : 0;
      }
    }
    return null;
  };

  /* pagination code starts */
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const ss = gpi(1);
      const dd = gpi(2);
      const bb = gpi(3);
      if (ss !== null && dd !== null && bb !== null) {
        dispatch(getSchoolListFilterWise(ss, dd, bb, currentPage - 1, search,perPage,schoolType));
      }
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
      const ss = gpi(1);
      const dd = gpi(2);
      const bb = gpi(3);
      // if (ss !== null && dd !== null && bb !== null) {
      dispatch(
        getSchoolListFilterWise(ss, dd, bb, currentPage + 1, search, perPage,schoolType)
      );
      // }
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let maxButtons = 0;
    if (totalPageCount > 5) {
      maxButtons = 5;
    } else {
      maxButtons = Math.ceil(totalPageCount / perPage);
    }
    const halfMaxButtons = Math.floor(maxButtons / 2);
    const ss = gpi(1);
    const dd = gpi(2);
    const bb = gpi(3);

    let startPage = currentPage - halfMaxButtons;
    if (startPage < 1) {
      startPage = 1;
    }

    let endPage = startPage + maxButtons - 1;
    console.log("endpage:", endPage);
    if (endPage > Math.ceil(totalPageCount / perPage)) {
      endPage = Math.ceil(totalPageCount / perPage);
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`page-number ${i === currentPage ? "active" : ""}`}
          onClick={() => {
            setCurrentPage(i);
            dispatch(getSchoolListFilterWise(ss, dd, bb, i, search, perPage,schoolType));
          }}
        >
          {i}
        </div>
      );
    }
  
    return pageNumbers;
  };

  const handleSchoolSearch = (e: any) => {
    parentSearch(e);
  };
  const handlePagination = (e: any) => {
    const { value } = e.target;
    setPerPage(value);
    setCurrentPage(1);
    const ss = gpi(1);
    const dd = gpi(2);
    const bb = gpi(3);
    dispatch(getSchoolListFilterWise(ss, dd, bb, 1, search, value,schoolType));
  };
  /* pagination code end  */
  return (
    <div className="col-md-12">
      <div className="performance-card-header mt-3 mb-3">
        <h2 className="heading-sm showing-result">
          Showing {schoolData?.data?.totalcount} Results for Search:{" "}
          {currentStateName &&
            ">" +
              (currentStateName === ""
                ? "ALL STATES"
                : currentStateName)}{" "}
          {distrcitName && ">" + distrcitName} {blockName && ">" + blockName}
        </h2>
        <div className="performancetab-wrap">
          <div className="select-wrap">
            <div className="form-row">
              <div className="form-col">
                <input
                  type="search"
                  name="search"
                  id="search"
                  onChange={(e) => handleSchoolSearch(e.target.value)}
                  className="form-control"
                  value={search}
                  placeholder="Search.."
                />
              </div>
              <div className="form-col">
                <select
                  className="form-select pagination-count"
                  onChange={(e) => handlePagination(e)}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        {schoolData?.data?.data?.map((datas: any, index: number) => {
          let schooltype = "";
          let lat_lng_url =
            "https://www.google.com/maps/search/?api=1&query=" +
            datas.lat +
            "," +
            datas.longitude;
          if (datas.sch_type === 1) {
             schooltype = "Boys";
          }  if (datas.sch_type === 2) {
             schooltype = "Girls";
          }  if (datas.sch_type === 3) {
             schooltype = "Co-educational";
          }
          //return <p>{datas.school_name}</p>
          return (
            <div className="blog-slider">
              <div className="blog-slider__wrp ">
                <div className="blog-slider__item school-c">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-left align-items-center">
                        <p className="unicode-udise">
                          {" "}
                          UDISE Code:{" "}
                          <span className="text-danger">
                            {datas.udise_sch_code}
                          </span>
                        </p>
                        {/* <p className="unicode-udise ms-3"><a href="mailto:afschoolracecourse@yahoo.co.in" className="text-black d-flex align-items-center">
                                        <span className="material-icons-round mail">email</span> afschoolracecourse@yahoo.co.in</a></p> */}
                      </div>
                      <h2 className="heading-blue school-name">
                        {datas.school_name}, {datas.block_name},{" "}
                        {datas.district_name}, {datas.state_name}
                        
                      </h2>

                      <div className="row">
                        <div className="col-md-4">
                          <ul>
                            <li className="school-sub-h">
                              School Category :{" "}
                              <span className="highlited-text">
                                {datas.category_name}
                              </span>{" "}
                            </li>
                            <li className="school-sub-h">
                              School Management :{" "}
                              <span className="highlited-text">
                                {" "}
                                {datas.schollmnag||'N/A'}
                              </span>{" "}
                            </li>
                            <li className="school-sub-h d-flex align-items-center">
                              <span className="material-icons-round mail">
                              {datas.hm_email?'email':""} 
                              </span>{" "}
                              {datas.hm_email}{" "}
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3">
                          <ul>
                            <li className="school-sub-h">
                              School Type :{" "}
                              <span className="highlited-text">
                              {schooltype}</span>
                              {" "}
                            </li>
                            <li className="school-sub-h">
                              School Status :{" "}
                              <span className="highlited-text">
                                {datas.status}
                              </span>{" "}
                            </li>
                            <li className="school-sub-h">
                              Class :{" "}
                              <span className="highlited-text">
                                {datas.class_frm} to {datas.class_to}
                              </span>{" "}
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3">
                          <ul>
                            <li className="school-sub-h">
                              State :{" "}
                              <span className="highlited-text">
                                {datas.state_name}
                              </span>{" "}
                            </li>
                            <li className="school-sub-h">
                              District :{" "}
                              <span className="highlited-text">
                                {datas.district_name}
                              </span>{" "}
                            </li>
                            <li className="school-sub-h">
                              Block :{" "}
                              <span className="highlited-text">
                                {datas.block_name}
                              </span>{" "}
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-2">
                          <div className="button-schools mt-2">
                            <div className="advance-search-container school-btn-b">
                              <div className="btn-wrap">
                                {/* <a className="btn red-solid-btn s-btn report-card">Know More</a></div> */}
                                <div className="btn-wrap d-flex align-items-center justify-content-center mb-2">
                                  <Link
                                    to={`/basic-information/${datas.udise_sch_code}`}
                                    className="btn btn-solid s-btn know-more"
                                  >
                                    Know More
                                  </Link>
                                </div>

                                <a
                                  href={lat_lng_url}
                                  target="_blank"
                                  className="btn red-bdr-btn s-btn report-card"
                                >
                                  Get Direction
                                </a>
                              </div>

                              {/* <div className="howitwork-btn mt-2"><a href="#"><div className="btn-wrap"><div className="btn red-bdr-btn">Track Your School</div></div></a></div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {totalPageCount > 0 && (
          <section className="pgicategory Pagination-sec bg-grey">
            <div className="container">
              <div className="row">
                <div className="col-md-12 p-0">
                  <div className="pagination">
                    <button
                      className="arrow"
                      id="prevPage"
                      onClick={handlePrevClick}
                      disabled={currentPage === 1}
                    >
                      ← <span className="nav-text">PREV</span>
                    </button>
                    <div className="pages">{renderPageNumbers()}</div>
                    <button
                      className="arrow"
                      id="nextPage"
                      onClick={handleNextClick}
                      disabled={currentPage === Math.ceil(totalPageCount / perPage)}
                    >
                      <span className="nav-text">NEXT</span> →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default StateComparison;
