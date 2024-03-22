import { useEffect, useState } from "react";
import ScoresTab from "src/components/State/ScoresTab/ScoresTab";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateWiseCategoryData,
  getSchoolListFilterWise,
  getCardDataFilterWise,
  getAllStates,
  getAllDistrict,
  getBlockData,
  softRemoveBlockData,
} from "src/actions/dpgi.action";
import {
  EventModel,
  InitialStateModel,
  StateScoresModel,
  StoreModel,
} from "src/models/dpgi";
import StateComparison from "./StateComaprison";
import StateBanner from "src/components/State/StateBanner/StateBanner";

const StateScores = (props: StateScoresModel) => {
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
  const filterWiseCardDetail = useSelector<StoreModel>(
    (store) => store.filterWiseCardDatas.data
  ) as InitialStateModel;
  const isLoadingStateData = useSelector<StoreModel>(
    (store) => store.filterWiseCardDatas.loading
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
  let state = "0"; //JSON.parse(localStorage.getItem('activeState') || '{}')
  let activeStateID = JSON.parse(localStorage.getItem("activeStateID") || "0");
  const [scoreTabData, setScoreTabData] = useState({});
  const [stateID, setStateID] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [sid1, setSid] = useState(activeStateID); //22
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
    /*         const subElem = document.getElementsByClassName("know-more")[0];
        if(typeof activeStateID === 'number'){
            console.log("ac",activeStateID);
            var event = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window
            });
            subElem.dispatchEvent(event);
            
        }else{
            localStorage.setItem('activeStateID','0');
            localStorage.setItem('Active_State_ID','0');
            localStorage.setItem('activeDistrictName','All State');
            
            setTimeout(() => {
                var event = new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                subElem.dispatchEvent(event);                
            }, 500);
        } */
    const checkDefaultState = localStorage.getItem("activeState");

    if (checkDefaultState === '"All State"') {
    }

    setIsLoading(true);
    dispatch(getAllStates(year));
    // dispatch(getAllDistrict(stateID))
    // dispatch(getBlockData(stateID))
  }, [year]);

  useEffect(() => {
    setSid1(+activeStateID);
    setStateID(+activeStateID);
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
    dispatch(getCardDataFilterWise(+activeStateID || sid, did, bid, page));
    dispatch(
      getSchoolListFilterWise(
        +activeStateID || sid,
        did,
        bid,
        page,
        search,
        perPage,
        school_type
      )
    );
    // dispatch(getAllDistrict(activeStateID))
  };

  useEffect(() => {
    setSid1(+activeStateID);
    setStateID(+activeStateID);
    localStorage.setItem("activeState", JSON.stringify(state));
  }, []);

  // useEffect(() => {
  //   dispatch(getStateWiseCategoryData(year, state));
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
    if (activeStateID) {
      getDistrict(activeStateID);
    }
  }, [year]);

  const handleChange = (event: any) => {
    var index = event.nativeEvent.target.selectedIndex;
    setStateID(event.target.value);
    setSid(event.target.value);
    setDid(0);
    setBid(0);
    setDistrictName("");
    setBlockName("");
    setCurrentStateName(event.nativeEvent.target[index].text);
    //    localStorage.setItem('activeState', JSON.stringify(event.nativeEvent.target[index].text));
    //    localStorage.setItem('activeDistrictName', event.nativeEvent.target[index].text);
    getDistrict(event.target.value);
    dispatch(softRemoveBlockData());
  };

  const handleChange2 = (event: any) => {
    const id = event.target.value.split(",")[0];
    const name = event.target.value.split(",")[1];
    setDid(id);
    setDistrictName(name);
    var index = event.nativeEvent.target.selectedIndex;
    // localStorage.setItem('activeDistrictName', event.nativeEvent.target[index].text);
    getBlocks(id);
  };
  const getDistrict = (state_id: any) => {
    dispatch(getAllDistrict(state_id));
  };
  const getBlocks = (district_id: any) => {
    dispatch(getBlockData(district_id));
  };
  const handleChange3 = (event: any) => {
    const id = event.target.value.split(",")[0];
    const name = event.target.value.split(",")[1];
    setBid(id);
    setBlockName(name);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    /* const checkDefaultState = localStorage.getItem("activeState"); */
    setSid1(+sid1);
    setDid2(+did2);
    setBid3(bid3);
    setCurrentPage(1);
    localStorage.setItem("activeStateID", sid1.toString());
    localStorage.setItem("Active_State_ID", sid1.toString());
    localStorage.setItem("Active_District_ID", did2.toString());
    localStorage.setItem("Active_Block_ID", bid3.toString());
    localStorage.setItem("activeState", sid1.toString());
    localStorage.setItem("activeDistrictName", currentStateName || "");
  };

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
  const handleReset = () => {
    let sl = document.querySelector("#state") as HTMLSelectElement;
    sl.selectedIndex = 1;
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    sl.dispatchEvent(changeEvent);
    localStorage.setItem("activeStateID", "0");
    setSid1(0);
    setsearch("");
    setPerPage(5);
    setCurrentPage(1);
    let k = document.querySelector('.pagination-count') as HTMLSelectElement;
    k.selectedIndex = 0;
  };
  return (
    <>
      {/* Advance Search Section */}
      <section className="banner-wrap banner-bg banner-state ptb-30">
        <div className="container p-0">
          <div className="performance-card mtb-20">
            <div className="advance-search-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="advance-search ">
                    <h2 className="heading-sm">PM SHRI Schools Search</h2>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="advance-search-input">
                    <select name="state" id="state" onChange={handleChange}>
                      <option value="Select State" disabled>
                        Select State
                      </option>
                      <option value="0" selected={true}>
                        ALL STATES
                      </option>
                      {states?.length &&
                        states.map((stateName: any, index: number) => {
                          return (
                            <option
                              selected={
                                activeStateID == stateName.id ? true : false
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
                <div className="col-md-3">
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

                <div className="col-md-3">
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
                <div className="col-md-3">
                  <div className="advance-search-button">
                    <a
                      className="btn blue-solid-btn s-btn know-more"
                      onClick={handleClick}
                    >
                      Search
                    </a>
                  </div>
                  <div className="advance-search-button reset ms-3">
                    <a  id="school_search_btn" onClick={handleReset}>
                      <div className="btn-wrap">
                        <div className="btn red-bdr-btn">Reset</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Card Section */}
      {/* {isLoading ? <Spinner/>:
} */}
      <StateBanner
        isLoadingStateData={isLoadingStateData}
        onChangeYear={changeYear}
        years={allYears.data}
        filterWiseCardDetail={filterWiseCardDetail?.data}
        onSchoolChange={handleSchoolType}
        schoolType={schoolType}
        setSchoolType={setSchoolType}
        setCurrentPage={setCurrentPage}
      />
      <section className="scores bg-grey pt-2 pb-2">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12">
             <h2 className="heading-sm">
                 District Scores of Telangana
             </h2>
         </div> */}
            {/* <div className="col-md-2">
             <div className="scores-card-wrap card-orange ptb-30">
                 <ScoresCard
                     heading="Outcomes"
                     icon={learning}
                     score="168"
                     description="Out of 290"
                 />
             </div>
         </div>
         <div className="col-md-2">
             <div className="scores-card-wrap card-green ptb-30">
                 <ScoresCard
                     heading="Effective Classroom Transaction"
                     icon={teaching}
                     score="50"
                     description="Out of 90"
                 />
             </div>
         </div>
         <div className="col-md-2">
             <div className="scores-card-wrap card-red ptb-30">
                 <ScoresCard
                     heading="Infrastructure, Facilities, Student Entitlements"
                     icon={infrastructure}
                     score="40"
                     description="Out of 51"
                 />
             </div>
         </div>
         <div className="col-md-2">
             <div className="scores-card-wrap card-purple ptb-30">
                 <ScoresCard
                     heading="School Safety and Child Protection"
                     icon={team}
                     score="20"
                     description="Out of 35"
                 />
             </div>
         </div>
         <div className="col-md-2">
             <div className="scores-card-wrap card-pink ptb-30">
                 <ScoresCard
                     heading="Digital Learning"
                     icon={videoCall}
                     score="20"
                     description="Out of 50"
                 />
             </div>
         </div>
         <div className="col-md-2">
             <div className="scores-card-wrap card-blue ptb-30">
                 <ScoresCard
                     heading="Governance Processes"
                     icon={growth}
                     score="38"
                     description="Out of 84"
                 />
             </div>
         </div> */}
            {allYears.data.length && (
              <StateComparison
                blockName={blockName}
                parentSearch={parentSearch}
                distrcitName={distrcitName}
                years={allYears.data}
                schoolData={filterWiseSchoolList}
                isLoadingSchoolList={isLoadingSchoolList}
                search={search}
                setsearch={setsearch}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                perPage={perPage}
                setPerPage={setPerPage}
                schoolType={schoolType}
                setSchoolType={setSchoolType}
                currentStateName={currentStateName}
                setCurrentStateName={setCurrentStateName}
              />
            )}
            {/* <div className="col-md-12">
             {isLoading ? <></> : <ScoresTab data={scoreTabData} state={state} />}
         </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default StateScores;
