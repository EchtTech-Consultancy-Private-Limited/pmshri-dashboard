import { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { DISTRICT_MAPS } from 'src/assets/maps/district_map';
import { india } from 'src/assets/maps/all-india';
import { MapModel, MapOptionsModel } from 'src/models/dpgi';

highchartsMap(Highcharts);

const Map = (props: MapModel) => {
    const { data, year, colorCodeData } = props
    // let navigate = useNavigate()
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

        }

    })

    useEffect(() => {
        if (data.length === 1) {
            setState(data[0][0])
        } else {
            setmapOptions((previousState: MapOptionsModel) => {
                return {
                    ...previousState,
                    chart: {
                        map: india,
                        // height:"600",
                        marginTop: 70,
                    },
                    plotOptions: {
                        series: {
                            events: {
                                click: function (e: any) {
                                    setState(e.point['hc-key'])
                                },
                            }
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        borderWidth: 0,
                        backgroundColor: "#fff",
                        padding: 0,
                        style: {
                            opacity: 0.8
                        },
                        valueDecimals: 0,
                    },
                    series: [{
                        // name: 'State',
                        // allowPointSelect: true,
                        // cursor: 'pointer',
                        borderColor: "#1e938d",
                        color: '#42fff6',
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
                            format: "{point.name}"
                        },
                        allAreas: true,
                        data: data,
                        // tooltip: {
                        //     headerFormat: '<div class="tooltipMainWrapper"><span class="tooltipHeader">{point.key} ',
                        //     pointFormat: ' {point.value.grade}</span><div class="tooltipPointWrapper row">'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon darkblue"></b>Daksh</span> <span class="tooltipno"><b>{point.value.Daksh}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon blue"></b>Utkarsh</span> <span class="tooltipno"><b>{point.value.Utkarsh}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon lightblue"></b>Ati-Uttam</span> <span class="tooltipno"><b>{point.value.Ati-Uttam}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon darkgreen"></b>Uttam</span> <span class="tooltipno"><b>{point.value.Uttam}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon lightgreen"></b>Prachesta-1</span> <span class="tooltipno"><b>{point.value.Prachesta-1}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon yellow"></b>Prachesta-2</span> <span class="tooltipno"><b>{point.value.Prachesta-2}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon orange"></b>Prachesta-3</span> <span class="tooltipno"><b>{point.value.Prachesta-3}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon lightpink"></b>Akanshi-1</span> <span class="tooltipno"><b>{point.value.Akanshi-1}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon pink"></b>Akanshi-2</span> <span class="tooltipno"><b>{point.value.Akanshi-2}</b> Districts</span></div>'
                        //         // +
                        //         // '<span class="tooltipLine"></span>'
                        //         +
                        //         '<div class="col-md-6 tooltipPointContent"><span class="tooltipPoint"><b class="tooltipPointIcon red"></b>Akanshi-3</span> <span class="tooltipno"><b>{point.value.Akanshi-3}</b> Districts</span></div>'
                        //         +
                        //         '</div></div>',

                        // }
                    }]
                }
            })
        }
    }, [data])

    const setState = (state_name: string) => {
        const selectedMapData: any = DISTRICT_MAPS.find(data => data.name.toLowerCase() === state_name.toLowerCase())

        data.forEach((state: any) => {
            if (state[0].toLowerCase() === state_name.toLowerCase()) {
                props.onSelectState(state[0], state[1])
                return
            }
        })

        selectedMapData.data[0].data.forEach((district: any) => {
            if (Object.keys(colorCodeData).length > 0) {
                district.borderColor = "#fff";
                if (!localStorage.getItem('activeDistrictName')) {
                    district.selected = false
                }
                district.color = colorCodeData[district.id] !== undefined ? colorCodeData[district.id] : '#cccccc'
                district.states = {
                    hover: {
                        color: colorCodeData[district.id] !== undefined ? colorCodeData[district.id] : '#cccccc'
                    },
                    select: {
                        color: colorCodeData[district.id] !== undefined ? '#A41C73' : '#cccccc'
                    }
                }
            }
        })

        setmapOptions((previousState: MapOptionsModel) => {
            return {
                ...previousState,
                // series: selectedMapData.data,
                // chart: {
                //     height: "480",
                //     marginTop: 70
                // },
                // tooltip: {

                // },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        name: 'District',
                        allowPointSelect: true,
                        events: {
                            click: function (e: any) {
                                changeDistrict(e.point.id, e.point.color, e.point.name)
                            }
                        },
                        tooltip: {
                            enabled: true,
                            pointFormat: '<div class="districttooltipWrapper"><span>{point.name}</span></div>',
                        }
                    }
                },
            }
        })
    }

    const changeDistrict = (district_id: string, color: string, name: string) => {
        if (color !== '#cccccc') {
            if (localStorage.getItem('tempDistrict') !== district_id) {
                localStorage.setItem('tempDistrict', district_id)
                props.onChangeDistrict(district_id)
                localStorage.setItem('activeDistrictName', name)
            }
            else {
                localStorage.setItem('tempDistrict', '0')
                props.onChangeDistrict(0)
                localStorage.removeItem('activeDistrictName')
            }
        }
        else {
            localStorage.setItem('tempDistrict', '0')
            localStorage.removeItem('activeDistrictName')
            props.onChangeDistrict(0)
        }
    }

    return (
        <div className="graph-wrap" id="india-map">
            <HighchartsReact
                constructorType={'mapChart'}
                highcharts={Highcharts}
                options={mapOptions}
                // allowChartUpdate={true}
                immutable={true}
            />
        </div>
    )
}

export default Map