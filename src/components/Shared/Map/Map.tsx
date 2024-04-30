import { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import totalSchoolDistrict from "../../../assets/pmshri.json";


import { DISTRICT_MAPS } from 'src/assets/maps/district_map';
import { india } from 'src/assets/maps/all-india';
import { InitialStateModel, MapModel, MapOptionsModel, StoreModel } from 'src/models/dpgi';
import { useDispatch, useSelector } from 'react-redux';
import { getallstatedata } from 'src/actions/dpgi.action';


highchartsMap(Highcharts);

const Map = (props: MapModel) => {
    const dispatach=useDispatch()
    const [apiData, setApiData] = useState<InitialStateModel | null>(null);
    useEffect(() => {
        dispatach(getallstatedata());
    }, [dispatach])
    const { data,year, colorCodeData } = props    
    
    const allstatedetails = useSelector<StoreModel>(store => store.allStateData) as InitialStateModel
   
    useEffect(() => {
        
        if (allstatedetails && Object.keys(allstatedetails).length > 0) {
            setApiData(allstatedetails);
        }
    }, [allstatedetails]);
        
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
        {id:"highcharts-key-andaman",val:6},
        {id:"highcharts-key-daman and diu",val:10},
        {id:"highcharts-key-dadra & nagar haveli & daman & diu",val:10},
        {id:"highcharts-key-delhi",val:31},
        {id:"highcharts-key-rajasthan",val:12},
        ]);
       
    // let navigate = useNavigate()
    const mapHKeyToID = (e:any) => {
        if(e !== null){
            const mm = mapMapping.filter(i => {
                return i.id === e.target.classList[2];
            })
            if(["highcharts-key-daman","highcharts-key-dadra"].includes(e.target.classList[2])){
                updateStateListDropdown(10);
                return;
            }
            if(mm.length > 0){
                updateStateListDropdown(mm[0].val);
            }
        }
    }
    
    const [mapOptions, setmapOptions] = useState<MapOptionsModel>({
        chart: {
            // height:"600",
            // marginTop: 70,
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },

        subtitle: {
            text: ''
        },
        legend: {
            enabled: false
        },
        mapNavigation: {
            enabled: false,
        },
        tooltip: {
            
        },
    });
    
    useEffect(() => {
        // if (data.length === 1) {
        //     setState(data[0][0])
        // } else {       
            setmapOptions((previousState: MapOptionsModel) => {
                return {
                    ...previousState,
                    chart: {
                        map: india,
                        width:"600",
                        marginTop: 0,
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    plotOptions: {
                        allowPointSelect: true,
                        series: {
                            events: {
                                click: function (e: any) {
                                    mapHKeyToID(e);
                                    // setState(e.point['hc-key'])
                                },
                            }
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        backgroundColor: "#fff",
                        borderWidth: 0,
                        formatter: function (this:any) {
                         
                            let total_district_count= 0;
                            let total_pmshri_school= 0;
                            let total_primary_school= 0;
                            let total_blocks= 0;
                            let total_upper_primary_school= 0;
                            let total_secondary_school= 0;
                            let total_high_secondary_school= 0;
                            let total_kvs= 0;
                            let total_nvs= 0
                    if (Array.isArray(apiData?.data)) {

                         apiData?.data?.map((item:any)=>{
                 
                            if(item.s_name.toLowerCase() == this.point.name.toLowerCase()){
                                
                                total_district_count= item.total_district_count;
                                total_pmshri_school= item.total_pmshri_school;
                                total_primary_school= item.total_primary_school;
                                total_blocks= item.total_blocks;
                                total_upper_primary_school= item.total_upper_primary_school;
                                total_secondary_school= item.total_secondary_school;
                                total_high_secondary_school=item.total_high_secondary_school;
                                total_kvs=item.total_kvs;
                                total_nvs= item.total_nvs
                        }
                         })
                        }
                            if(this !== null){
                               
                                return `<b>${this.point.name}</b><br/>
                                <table><thead><tr style='background:#33bbff'><th>Indicator</th><th>Value</th></tr></thead><tbody>
                                <tr>
                                <td>PM SHRI Schools:</td>
                                <td>${total_pmshri_school}</td>
                                </tr>
                                <tr>
                                <td>Primary Schools:</td>
                                <td>${total_primary_school}</td>
                                </tr>
                                <tr>
                                <td>Upper Primary Schools:</td>
                                <td>${total_upper_primary_school}</td>
                                </tr>
                                <tr>
                                <td>Secondary Schools:</td>
                                <td>${total_secondary_school}</td>
                                </tr>
                                <tr>
                                <td>Hr. Sec. Schools:</td>
                                <td>${total_high_secondary_school}</td>
                                </tr>
                                <tr>
                                <td>KVS:</td>
                                <td>${total_kvs}</td>
                                </tr>
                                <tr>
                                <td>NVS:</td>
                                <td>${total_nvs}</td>
                                </tr>
                                </tbody></table>`;
                            }else{
                                return `<b>State Name No Found</b>`;
                            }
                          },
                    },
                    series: [{
                        // name: 'State',
                        allowPointSelect: true,
                        cursor: 'pointer',
                        borderColor: "#fff",
                        color: '#ff9933',
                        type: "map",
                        states: {
                            hover: {
                                color: "#A41C73",
                            },
                            select: {
                                color: '#A41C73',
                            }
                        },
                        dataLabels: {
                            enabled: false,
                            format: "{point.name}",
                           
                        },
                        allAreas: true,
                        data: data,
                        name: 'State Name:',
                    }]
                }
            })
        // }
    }, [allstatedetails])


    const updateStateListDropdown = (refId: number) => {
        const selectElement = document.getElementsByName("map_state_name");
        let sl = document.querySelector('#map_state_name') as HTMLSelectElement;
        const selectOptions = selectElement[0].children;
        for (let i = 0; i < selectOptions.length; i++) {
            const option = selectOptions[i];
            const optionValue = option.attributes[0].value;
            const values = optionValue.split(",");
            if (values.length >= 3) {
              const thirdParam = +values[2].trim();
              if (thirdParam === refId) {
                sl.selectedIndex  = i;
                const changeEvent = new Event("change", {
                  bubbles: true,
                  cancelable: true,
                });
                sl.dispatchEvent(changeEvent);
              }
            }
          }
    }

    const setState = (state_name: string) => {
        const selectedMapData: any = DISTRICT_MAPS.find(data => data.name.toLowerCase() === state_name.toLowerCase())
        data.forEach((state: any) => {
            
            if (state[0].toLowerCase() === state_name.toLowerCase()) {
                
                localStorage.setItem('activeStateID', state[2])
                props.onSelectState(state[0], state[1], state[2])
                return
            }
        })
   
        setmapOptions((previousState: MapOptionsModel) => {
            return {
                ...previousState,
             
                plotOptions: {
                    series: {
                        name: 'District',
                        events: {
                            click: function (e: any) {
                                updateStateListDropdown(e.point._i)
                                changeDistrict(e.point.id, e.point.color, e.point.name)
                            }
                        },
                        tooltip: {
                            enabled: true,
                        }
                    }
                },
            }
        })
    }

    const changeDistrict = (district_id: string, color: string, name: string) => {
        //if (color !== '#cccccc') {
            if (localStorage.getItem('tempDistrict') !== district_id) {
                localStorage.setItem('tempDistrict', district_id)
                props.onChangeDistrict(district_id)
                localStorage.setItem('activeDistrictName', name)
            }
            else {
                localStorage.setItem('tempDistrict', '0')
                props.onChangeDistrict(0)
                localStorage.removeItem('activeDistrictName')
                localStorage.removeItem('activeStateID')
            }
        
    }

    return (
        <div className="graph-wrap" id="india-map">
            <HighchartsReact
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
                immutable={true}
            />
        </div>
    )
}

export default Map