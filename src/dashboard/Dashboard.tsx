import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import "bootstrap/dist/css/bootstrap.css";
import gtoilet from "src/assets/images/toilet_kabod.svg";
import handwash from "src/assets/images/handwash-d.svg";
import library from "src/assets/images/library-d.svg";
import water from "src/assets/images/water-d.svg";
import ramp from "src/assets/images/ramp-d.svg";
import electricity from "src/assets/images/electricity-d.svg";
import playground from "src/assets/images/playground-d.svg";
import computer from "src/assets/images/computer-d.svg";
import internet from "src/assets/images/internet-d.svg";
import { Link } from "react-router-dom";

import ScoresTab from "src/components/State/ScoresTab/ScoresTab";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateWiseCategoryData,
  getSchoolListFilterWise,
  getCardDataFilterWise,
  getDashboardCardDataFilterWise,
  getAllStates,
  getAllDistrict,
  getBlockData,
  softRemoveBlockData,
} from "src/actions/dpgi.action";
import {
  InitialStateModel,
  StateScoresModel,
  StoreModel,
} from "src/models/dpgi";
// import StateComparison from "./StateComaprison";
// import StateBanner from "src/components/State/StateBanner/StateBanner";

export default function Dashboard() {
  const dispatch = useDispatch();

  const categoryData = useSelector<StoreModel>(
      (store) => store.categoryData
  ) as InitialStateModel;
  const filterWiseSchoolList = useSelector<StoreModel>(
      (store) => store.filterWiseSchool.data
  ) as InitialStateModel;
  const isLoadingSchoolList = useSelector<StoreModel>(
      (store) => store.filterWiseSchool.loading
  ) as InitialStateModel;
  const allYears = useSelector<StoreModel>(
      (store) => store.allYears
  ) as InitialStateModel;
    const filterWiseDashboardCardDetail = useSelector<StoreModel>(
      (store) => store?.filterWiseDashboardCardDatas?.data
    ) as InitialStateModel;
const dashboarddata=filterWiseDashboardCardDetail?.data
  
    const isLoadingStateData = useSelector<StoreModel>(
      (store) => store.filterWiseDashboardCardDatas.loading
    ) as InitialStateModel;
  const blocklist = useSelector<StoreModel>(
      (store) => store.blockData.data
  ) as [];
  const states = useSelector<StoreModel>((store) => store.states.data) as [];
  const districtlist = useSelector<StoreModel>(
      (store) => store.districtList.data
  ) as [];
  const [year, setYear] = useState(localStorage.getItem("activeYear") || "-1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [state, setState] = useState('kerala')
  let state = "0"
  ; //JSON.parse(localStorage.getItem('activeState') || '{}')
  let activeStatesID = JSON.parse(localStorage.getItem("activeStateID") || "0");
  const [scoreTabData, setScoreTabData] = useState({});
  const [stateID, setStateID] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [sid1, setSid] = useState(activeStatesID); //22
  const [did2, setDid] = useState(0); //384
  const [bid3, setBid] = useState(0); //3678
  const [page, setPage] = useState(1); //1
  const [search, setsearch] = useState("");
  const [sid, setSid1] = useState(0); //22
  const [did, setDid2] = useState(0); //384
  const [bid, setBid3] = useState(0); //3678
  const [distrcitName, setDistrictName] = useState("");
  const [blockName, setBlockName] = useState("");
  const [perPage, setPerPage] = useState<number>(5);
  const [schoolType, setSchoolType] = useState<string>("pmshri_school");
  let activeDistrictName = localStorage.getItem("activeDistrictName");
  const [currentStateName, setCurrentStateName] = useState(activeDistrictName);
  const changeYear = (year: string) => {
      setYear(year);
  };
  useEffect(() => {
     
      const checkDefaultState = localStorage.getItem("activeState");

      if (checkDefaultState === '"All State"') {
      }

      setIsLoading(true);
      dispatch(getAllStates(year));
      // dispatch(getAllDistrict(stateID))
      // dispatch(getBlockData(stateID))
  }, [year]);

  useEffect(() => {
      setSid1(+activeStatesID);
      setStateID(+activeStatesID);
      localStorage.setItem("activeState", JSON.stringify(state));
      localStorage.setItem("Active_State_ID", state);
      localStorage.setItem("Active_District_ID", state);
      localStorage.setItem("Active_Block_ID", state);
  }, []);
  useEffect(() => {
      setIsLoading(true);
      // dispatch(getBlockData())
  }, []);
  useEffect(() => {
      handleSchoolType(schoolType);
  }, [sid, did, bid, page]);

  useEffect(() => {
      const getDataSchoolList = setTimeout(() => {
          handleSchoolType(schoolType);
      }, 300);
      return () => clearTimeout(getDataSchoolList);
  }, [search]);

  const handleSchoolType = (school_type: string) => {
      dispatch(getDashboardCardDataFilterWise(+activeStatesID || sid, did, bid, page));
      // dispatch(
      //     getSchoolListFilterWise(
      //         +activeStatesID || sid,
      //         did,
      //         bid,
      //         page,
      //         search,
      //         perPage,
      //         school_type
      //     )
      // );
      // dispatch(getAllDistrict(activeStatesID))
  };

  useEffect(() => {
      setSid1(+activeStatesID);
      setStateID(+activeStatesID);
      localStorage.setItem("activeState", JSON.stringify(state));
  }, []);

  // useEffect(() => {
  //     dispatch(getStateWiseCategoryData(year, state));
  // }, [year, state]);

  useEffect(() => {
      if (!categoryData.loading && categoryData.loaded) {
          setScoreTabData(categoryData.data.categoryData);
      }
  }, [categoryData]);

  useEffect(() => {
      if (Object.keys(scoreTabData).length) {
          setIsLoading(false);
      }
  }, [scoreTabData]);
  useEffect(() => {
      if (allYears.loaded && !allYears.loading) {
          if (year === "-1") {
              setYear(allYears.data[0].yr_code);
          }
      }
  }, [allYears]);

  useEffect(() => {
      if (year !== "-1") {
          setIsLoading(false);
      }
      if (activeStatesID) {
          getDistrict(activeStatesID);
      }
  }, [year]);


  const getDistrict = (state_id: any) => {
      dispatch(getAllDistrict(state_id));
  };
  const getBlocks = (district_id: any) => {
      dispatch(getBlockData(district_id));
  };
  const handleChange = (event: any) => {
      var index = event.nativeEvent.target.selectedIndex;
      setStateID(event.target.value);
      setSid(event.target.value);
      setDid(0);
      setBid(0);
      setDistrictName("");
      setBlockName("");
      setCurrentStateName(event.nativeEvent.target[index].text);
      getDistrict(event.target.value);
      dispatch(softRemoveBlockData());
  
      // Update state values directly
      setSid1(+event.target.value);
      setDid2(0);
      setBid3(0);
      setCurrentPage(1);
      localStorage.setItem("activeStatesID", event.target.value);
      localStorage.setItem("Active_State_ID", event.target.value);
      localStorage.setItem("Active_District_ID", "0");
      localStorage.setItem("Active_Block_ID", "0");
      localStorage.setItem("activeState", event.target.value);
      localStorage.setItem("activeDistrictName", event.nativeEvent.target[index].text || "");
  };
  
  const handleChange2 = (event: any) => {
      const id = event.target.value.split(",")[0];
      const name = event.target.value.split(",")[1];
      setDid(id);
      setDistrictName(name);
      getBlocks(id);
  
      // Update state values directly
      setDid2(+id);
      setBid3(0);
      setCurrentPage(1);
      localStorage.setItem("Active_District_ID", id);
      localStorage.setItem("Active_Block_ID", "0");
  };
  
  const handleChange3 = (event: any) => {
      const id = event.target.value.split(",")[0];
      const name = event.target.value.split(",")[1];
      setBid(id);
      setBlockName(name);
  
      // Update state values directly
      setBid3(+id);
      setCurrentPage(1);
      localStorage.setItem("Active_Block_ID", id);
  };
  
  // Remove handleClick function
  
  useEffect(() => {
      handleSchoolType(schoolType);
  }, [sid, did, bid, page]);
  
  useEffect(() => {
      const getDataSchoolList = setTimeout(() => {
          handleSchoolType(schoolType);
      }, 300);
      return () => clearTimeout(getDataSchoolList);
  }, [search]);
  



  const parentSearch = (e: any) => {
      setsearch(e);
  };
  const capitalizedWord = (str: string) => {
      const arr = str.split(" ");
      const data = arr.map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      });
      return data.join(" ");
  };
 
  
 
  return (
    <>
      <section
        className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center"
        style={{ height: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading-blue text-center before-d text-white pb-0">
                Dashboard
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard-activity-page ptb-60 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="readMorehome">
                <Link to="/state" className="btn">
                  School List{" "}
                  <span className="material-icons-round">read_more</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 mx-auto">
              <div className="performance-card mtb-20 p-3">
                <div className="advance-search-container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="advance-search-input">
                        <select name="state" id="state" onChange={handleChange}>
                          <option value="Select State" disabled>
                            Select State
                          </option>
                          <option value="0" selected={true}>
                            ALL STATES
                          </option>
                          {states?.length &&
                            states?.map((stateName: any, index: number) => {
                              return (
                                <option
                                  selected={
                                    activeStatesID == stateName.id ? true : false
                                  }
                                  key={index}
                                  value={stateName.id}
                                >
                                  {capitalizedWord(stateName.state_name)}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="advance-search-input">
                      <select
                      name="district"
                      id="district"
                      onChange={handleChange2}
                    >
                      <option value="0">Select District</option>
                      {districtlist?.length &&
                        districtlist.map((districtName: any, index: number) => {
                          return (
                            <option
                              key={index}
                              value={districtName.id + "," + districtName.name}
                            >
                              {capitalizedWord(districtName.name)}
                            </option>
                          );
                        })}
                    </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="advance-search-input">
                      <select name="district" id="block" onChange={handleChange3}>
                      <option value="0">Select Block</option>
                      {blocklist?.length &&
                        blocklist.map((blockName: any, index: number) => {
                          return (
                            <option
                              key={index}
                              value={blockName.block_id + "," + blockName.name}
                            >
                              {capitalizedWord(blockName.name)}
                            </option>
                          );
                        })}
                    </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
         
                   
              
            <div className="col-md-12">
              <div className="dashboard-box">
                <div className="row">
                  <div className="col-md-4 pr-0">
                    <h1 className="dash-title heading-lg">
                      Welcome to PMShri Dashboard
                    </h1>
                  </div>

                  <div className="col-md-8 p-0">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="content-box">
                          <div className="main-text-c m-big">{dashboarddata?.totalschool}</div>
                          <div className="sub-text-c">Total Schools</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="content-box">
                          <div className="main-text-c m-big">{dashboarddata?.totalTeachers}</div>
                          <div className="sub-text-c">Total Teachers</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="content-box">
                          <div className="main-text-c m-big">{dashboarddata?.totalStudents}</div>
                          <div className="sub-text-c">Total Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="first-card-circle">
                <div className="first-circle-line"></div>
                <div className="card-box1">
                  <div className="padding-box">
                    <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                      <div  className={ `text-card ${dashboarddata?.percentageGirlsFunctionalToilets > 70 ? 'success' : dashboarddata?.percentageGirlsFunctionalToilets >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.percentageGirlsFunctionalToilets}%</div>
                      <div className="icon-circle rotate">
                        <img src={gtoilet} alt="Girls Toilet" />
                      </div>
                    </div>
                    <div className="card-normal-text">
                      Having Funtional Toilets Girls
                    </div>
                  </div>
                </div>

                <div className="card-box1 card-box2">
                  <div className="padding-box">
                    <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                      <div  className={ `text-card ${dashboarddata?.percentageBoysFunctionalToilets > 70 ? 'success' : dashboarddata?.percentageBoysFunctionalToilets >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.percentageBoysFunctionalToilets}%</div>
                      <div className="icon-circle rotate">
                        <img src={gtoilet} alt="Girls Toilet" />
                      </div>
                    </div>
                    <div className="card-normal-text">
                      Having Funtional Toilets for Boys
                    </div>
                  </div>
                </div>

                <div className="card-box1 card-box3">
                  <div className="padding-box">
                    <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                      <div  className={ `text-card ${dashboarddata?.PercentageLibraryFacility > 70 ? 'success' : dashboarddata?.PercentageLibraryFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageLibraryFacility}%</div>
                      <div className="icon-circle rotate">
                        <img src={library} alt="Girls Toilet" />
                      </div>
                    </div>
                    <div className="card-normal-text">
                      Having Library Facility
                    </div>
                  </div>
                </div>

                <div className="card-box1 card-box4">
                  <div className="padding-box">
                    <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                      <div  className={ `text-card ${dashboarddata?.PercentageHandwashFacility > 70 ? 'success' : dashboarddata?.PercentageHandwashFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageHandwashFacility}%</div>
                      <div className="icon-circle rotate">
                        <img src={handwash} alt="Girls Toilet" />
                      </div>
                    </div>
                    <div className="card-normal-text">
                      Having Handwash Facility{" "}
                    </div>
                  </div>
                </div>

                <div className="card-box1 card-box5">
                  <div className="padding-box">
                    <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                      <div  className={ `text-card ${dashboarddata?.PercentagePlaygroundFacility > 70 ? 'success' : dashboarddata?.PercentagePlaygroundFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentagePlaygroundFacility}%</div>
                      <div className="icon-circle rotate">
                        <img src={playground} alt="Girls Toilet" />
                      </div>
                    </div>
                    <div className="card-normal-text">
                      Having Playground Facility
                    </div>
                  </div>
                </div>

                <div className="second-card-circle">
                  <div className="second-circle-line"></div>
                  <div className="card-box1">
                    <div className="padding-box">
                      <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                        <div  className={ `text-card ${dashboarddata?.PercentageRampsFacility > 70 ? 'success' : dashboarddata?.PercentageRampsFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageRampsFacility}%</div>
                        <div className="icon-circle rotate">
                          <img src={ramp} alt="Girls Toilet" />
                        </div>
                      </div>
                      <div className="card-normal-text">
                        Having Ramp Facility
                      </div>
                    </div>
                  </div>

                  <div className="card-box1 card-box6">
                    <div className="padding-box">
                      <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                        <div  className={ `text-card ${dashboarddata?.PercentageLibraryFacility > 70 ? 'success' : dashboarddata?.PercentageLibraryFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageLibraryFacility}%</div>
                        <div className="icon-circle rotate">
                          <img src={library} alt="Girls Toilet" />
                        </div>
                      </div>
                      <div className="card-normal-text">
                        Having Library Facility
                      </div>
                    </div>
                  </div>

                  <div className="card-box1 card-box7">
                    <div className="padding-box">
                      <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                        <div  className={ `text-card ${dashboarddata?.PercentageDrinkWaterFacility > 70 ? 'success' : dashboarddata?.PercentageDrinkWaterFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageDrinkWaterFacility}%</div>
                        <div className="icon-circle rotate">
                          <img src={water} alt="Girls Toilet" />
                        </div>
                      </div>
                      <div className="card-normal-text">
                        Having Drinking Water Facility
                      </div>
                    </div>
                  </div>

                  <div className="card-box1 card-box8">
                    <div className="padding-box">
                      <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                        <div  className={ `text-card ${dashboarddata?.PercentageElectricityFacility > 70 ? 'success' : dashboarddata?.PercentageElectricityFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.PercentageElectricityFacility}%</div>
                        <div className="icon-circle rotate">
                          <img src={electricity} alt="Girls Toilet" />
                        </div>
                      </div>
                      <div className="card-normal-text">
                        Having Electricity Connection{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card-box1 card-box9">
                    <div className="padding-box">
                      <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                        <div  className={ `text-card ${dashboarddata?.percentageInternetFacility > 70 ? 'success' : dashboarddata?.percentageInternetFacility >= 40 && dashboarddata?.percentageInternetFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.percentageInternetFacility}%</div>
                        <div className="icon-circle rotate">
                          <img src={internet} alt="Girls Toilet" />
                        </div>
                      </div>
                      <div className="card-normal-text">
                        Having Internet Facility{" "}
                      </div>
                    </div>
                  </div>

                  <div className="third-card-circle">
                    <div className="third-circle-line"></div>
                    <div className="card-box1">
                      <div className="padding-box">
                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                          <div  className={ `text-card ${dashboarddata?.percentageComputerFacility > 70 ? 'success' : dashboarddata?.percentageComputerFacility >= 40 && dashboarddata?.percentageComputerFacility < 70 ? 'warning' : 'danger'}`}>{dashboarddata?.percentageInternetFacility}%</div>
                          <div className="icon-circle rotate">
                            <img src={computer} alt="Girls Toilet" />
                          </div>
                        </div>
                        <div className="card-normal-text">
                          Having Computer Facility
                        </div>
                      </div>
                    </div>

                    <div className="main-heading-text-circle">
                      <div className="text-b text-center">
                        <h2 className="heading-md mb-0">Facilities</h2>
                        <p className="sub-heading">In Schools</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
