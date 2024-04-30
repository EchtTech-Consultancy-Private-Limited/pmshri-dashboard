import React, { useEffect, useState } from 'react';
import './Performance.scss';
import Map from 'src/components/Shared/Map/Map';
import MultiColorGraph from 'src/components/Shared/Graph/MultiColorGraph';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDistrictCategoryData, getMapChartData,
    getstatewisedata, getAllStates, getBlockData, getMapAllStates
} from 'src/actions/dpgi.action';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';
import Comparison from './Comparison';
import PerformanceTable from 'src/components/Shared/PerformanceTable/PerformanceTable';
import DistrictCard from 'src/components/Shared/DistrictCard/DistrictCard';
import StatesCard from 'src/components/Shared/DistrictCard/StatesCard';
import CardsMap from '../CardsMap/CardsMap';
import Spinner from 'src/components/Spinner';
import { Link } from 'react-router-dom';
import { MapOptionsModel } from 'src/models/dpgi';


const gradeColor = {
    "Daksh": "#0000FF",
    "Utkarsh": "#5050FF",
    "Ati-Uttam": "#7D7DFF",
    "Uttam": "#009632",
    "Prachesta-1": "#96FF96",
    "Prachesta-2": "#FFFF00",
    "Prachesta-3": "#FFC800",
    "Akanshi-1": "#FA9696",
    "Akanshi-2": "#FA6464",
    "Akanshi-3": "#FA4B4B",
} as any

const Performance = (props: any) => {
    const { years,mapOptions,setMapOptions, } = props
    const dispatch = useDispatch()
    const data = useSelector<StoreModel>(store => store.mapChartData) as InitialStateModel
    
    const statewisedetails = useSelector<StoreModel>(store => store.stateWiseData) as InitialStateModel
    const states = useSelector<StoreModel>(store => store.states.data) as []
   
    const mapstates = useSelector<StoreModel>(store => store.mapstates) as []
    const districtData = useSelector<StoreModel>(store => store.districtCategoryData) as InitialStateModel
    const [mapData, setMapData] = useState([])
  
    const [chartData, setchartData] = useState([])
    const [activeDistrictData, setActiveDistrictData] = useState({})
    const [colorData, setColorData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [year, setYear] = useState(years[0].yr_code)
    const [state, setState] = useState('India')
    const [district, setDistrict] = useState(0)
    const districtName = localStorage.getItem('activeDistrictName') || ''
    const [activeLink, setActiveLink] = useState(true);

    const [mapMapping, setMapMapping] = useState([
        {id:"highcharts-key-jammu",val:33},
        {id:"highcharts-key-himachal",val:21},
        {id:"highcharts-key-punjab",val:17},
        {id:"highcharts-key-chandigarh",val:16},
        {id:"highcharts-key-uttarakhand",val:36},
        {id:"highcharts-key-haryana",val:18},
        {id:"highcharts-key-uttar",val:1},
        {id:"highcharts-key-bihar",val:4},
        {id:"highcharts-key-sikkim",val:35},
        {id:"highcharts-key-arunanchal",val:28},
        {id:"highcharts-key-nagaland",val:3},
        {id:"highcharts-key-manipur",val:27},
        {id:"highcharts-key-mizoram",val:25},
        {id:"highcharts-key-tripura",val:26},
        {id:"highcharts-key-meghalaya",val:22},
        {id:"highcharts-key-assam",val:7},
        {id:"highcharts-key-west",val:8},
        {id:"highcharts-key-jharkhand",val:29},
        {id:"highcharts-key-odisha",val:32},
        {id:"highcharts-key-chhattisgarh",val:14},
        {id:"highcharts-key-madhya",val:11111},
        {id:"highcharts-key-gujarat",val:11},
        {id:"highcharts-key-maharashtra",val:20},
        {id:"highcharts-key-andhra",val:19},
        {id:"highcharts-key-karnataka",val:2},
        {id:"highcharts-key-goa",val:30},
        {id:"highcharts-key-lakshadweep",val:5},
        {id:"highcharts-key-kerala",val:23},
        {id:"highcharts-key-tamil",val:15},
        {id:"highcharts-key-puducherry",val:9},
        {id:"highcharts-key-telangana",val:24},
        {id:"highcharts-key-ladakh",val:34},
        {id:"highcharts-key-andaman and nicobar islands",val:6},
        {id:"highcharts-key-daman and diu",val:10},
        {id:"highcharts-key-dadra & nagar haveli & daman & diu",val:10},
        {id:"highcharts-key-delhi",val:31},
        {id:"highcharts-key-rajasthan",val:12},
    ]);

   
    const [StateID, setStateWiseData] = useState(localStorage.getItem('activeStateID') || '')
   
    //console.log(StateID)
    useEffect(() => {
        if (!data.loading && data.loaded) {
            setMapData(data.data.mapData)
            setchartData(data.data.chartData)
            setColorData(data.data.distColorCode)
        }
    }, [data])

    useEffect(() => {
        dispatch(getstatewisedata(StateID))
    }, [StateID])

    useEffect(() => {
        setIsLoading(true)
        // console.log(state)
        dispatch(getMapChartData(year, state))
        dispatch(getAllStates(year))
        dispatch(getMapAllStates(year))

    }, [year, state])
    useEffect(() => {
        dispatch(getBlockData(0))
    }, [])

    useEffect(() => {
        if (district !== 0) {
            dispatch(getDistrictCategoryData(year, district))
        }
    }, [year, district])

    useEffect(() => {
        if (districtData.loaded && !districtData.loading) {
            setActiveDistrictData(districtData.data.categoryData)
        }
    }, [districtData])

    useEffect(() => {
        if (mapData.length && chartData.length) {
            setIsLoading(false)
        }
    }, [mapData, chartData])

    const changeYear = (event: EventModel) => {
        setYear(event.target.value)
    }

    const setStateData = (state_name: string, data: any) => {
        let temp_data = [] as any
        if (state_name === 'nct of delhi') {
            setState('delhi')
        }
        else {
            setState(state_name)
        }
        Object.keys(gradeColor).forEach((grade: string) => {
            temp_data.push({
                name: grade,
                color: gradeColor[grade],
                y: data[grade]
            })
        })
        setchartData(temp_data)
    }

    const changeDistrict = (district_id: number) => {
        if (district_id === 0) {
            setActiveDistrictData({})
        }
        setDistrict((previousState) => {
            return district_id
        })
    }

    const readMore = () => {
        if(state === "India") 
        {
            localStorage.setItem('activeState', JSON.stringify("All State"))
        }else{   
        localStorage.setItem('activeState', JSON.stringify(state))
        }
        localStorage.setItem('activeYear', year)
        if (district) {
            localStorage.setItem('activeDistrict', JSON.stringify(district))
            // window.location.href = '/state'
        }
        else {
            // window.location.href = '/state'
        }

    }

    const backToNational = () => {
        setActiveDistrictData({})
        setDistrict(0)
        if (localStorage.getItem('tempDistrict')) {
            localStorage.removeItem('tempDistrict')
        }
        if (localStorage.getItem('activeDistrictName')) {
            localStorage.removeItem('activeDistrictName')
        }
        setState('India')
    }

    const changeActiveLink = (isActive: boolean) => {
        setActiveLink(isActive)
    }

    const changeState = (event: EventModel) => {
        
        const resetColor = document.getElementsByClassName("highcharts-point");
        for(let k=0;k<resetColor.length;k++){
            resetColor[k].attributes[0].value = "#ff9933";
        }
        const selectedStateMapID = event.target.value.split(',')[1];
        if(selectedStateMapID!=='0'){
        const selectedStateMapRefId = event.target.value.split(',')[2];

        const filteredMap = mapMapping.filter((o)=>{
            return +o.val === +selectedStateMapRefId
        });

        const selectedStateClass = filteredMap[0].id;
        if("highcharts-key-daman and diu"===selectedStateClass){
            filteredMap.forEach((item:any,idx:number)=>{
                const mapElem = document.getElementsByClassName(item.id);
                mapElem[0].attributes[0].value = "#A41C73";
            });
            
        }else{
            const mapElem = document.getElementsByClassName(selectedStateClass);
            mapElem[0].attributes[0].value = "#A41C73";
        }

    }
        setStateWiseData(event.target.value.split(',')[1])
        if(event.target.value.split(',')[0] !== undefined) {
            localStorage.setItem('activeState', JSON.stringify(event.target.value.split(',')[0]))
        }
        if(event.target.value.split(',')[0] !== undefined){
            localStorage.setItem('activeDistrictName', event.target.value.split(',')[0])
        }
        if(event.target.value.split(',')[1] !== undefined){
            localStorage.setItem('activeStateID', event.target.value.split(',')[1])
        }
    }

    return (
        <section className="performance  bg-grey" id='main-content'>
            <div className="container">
            <h2 className="heading-blue">Dashaboard</h2>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="">
                            <div className="performance-card-header">
                                {/* <h2 className="heading-sm">
                                    DASHBOARD 
                                </h2> */}
                                <h3 className="heading-red-center">
                                    {/* {state === 'India' ? 'National' : state.split(' ').map((element: string, index: number) => {
                                        return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                                    })} */}
                                    {/* {districtName} */}
                                    {/* {activeLink ? districtName !== '' && '(' + districtName + ')' : ''} */}
                                </h3>
                                <div className="performancetab-wrap">
                                    {/* <ul className="nav performance-tabs" id="performanceTab" role="tablist">
                                        <li className="nav-item" role="presentation" onClick={() => { changeActiveLink(true) }}>
                                            <button className="nav-link active" id="graph-tab" data-bs-toggle="tab" data-bs-target="#graph" type="button" role="tab" aria-controls="graph" aria-selected="true">
                                                <span className="material-icons-outlined">
                                                    bar_chart
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation" onClick={() => { changeActiveLink(false) }}>
                                            <button className="nav-link" id="table-tab" data-bs-toggle="tab" data-bs-target="#table" type="button" role="tab" aria-controls="table" aria-selected="false">
                                                <span className="material-icons-outlined">
                                                    format_list_bulleted
                                                </span>
                                            </button>
                                        </li>
                                    </ul> */}

                                </div>
                            </div>
                            <div className="tab-content" id="performanceTabContent">
                                <div className="tab-pane fade show active" id="graph" role="tabpanel" aria-labelledby="graph-tab">
                                    <div className="performance-graph" data-aos="fade-up">
                                        <div className="row">

                                            <div className="col-md-6  ">
                                                {isLoading ? <Spinner/> :
                                                    <>

                                                        <div className=" d-flex align-items-center justify-content-end pt-3">

                                                            <div onClick={readMore} className="readMorehome">
                                                               {/* <Link to="/state">More <span className="material-icons-round">
                                                                    read_more
                                                                </span>
                                                                </Link> */}
                                                                <Link to="/dashboard">More <span className="material-icons-round">
                                                                    read_more
                                                                </span>
                                                                </Link>
                                                                
                                                            </div>
                                                        </div>


                                                        <Map year={year} data={mapData} onSelectState={setStateData} onChangeDistrict={changeDistrict} colorCodeData={colorData} />
                                                    </>}
                                            </div>
                                            <div className="col-md-6 ">
                                                {/* {isLoading ? <></> : Object.keys(activeDistrictData).length && district ? <DistrictCard data={activeDistrictData} /> : <MultiColorGraph year={year} data={chartData} state={state} />}
                                             */}

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='performance-card mb-3'>
                                                        <div className="indicator-select mtb-15">
                                                            <label>State</label>
                                                            <select className="form-select" id="map_state_name"name="map_state_name"onChange={changeState}>
                                                                <option value="All State,0,0">All State</option>
                                                                {states.length && states.map((stateName: any, index: number) => {
                                                                    return <option selected={StateID==stateName.id?true:false} key={index} value={stateName.state_name.toUpperCase() + ',' + stateName.id+ ','+stateName.mapreferanceid}>{stateName.state_name}</option>
                                                                })}
                                                            </select>
                                                        </div>
                                                        </div>

                                                     
                                                    </div>
                                                </div>
                                                <div className='performance-card mb-3'>
                                                <h3 className="heading-red-center mb-2">{districtName !== '' && districtName.toUpperCase()}</h3>
                                                <CardsMap states={states} data={statewisedetails?.data.data} isLoading={statewisedetails?.loading}/>
                                                </div>
                                              
                                                <a href='/gis' className='btn red-bdr-btn float-end mt-2 red-bg '>GIS Mapping of PM SHRI Schools</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab">
                                    <PerformanceTable year={year} state={state} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-12">
                        <Comparison state={state} years={years} />
                    </div> */}

                    
                </div>
            </div>
        </section>

    )
}

export default Performance