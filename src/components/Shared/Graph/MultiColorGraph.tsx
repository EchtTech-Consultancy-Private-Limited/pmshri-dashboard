import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.scss';
import { chartOptionsModel, MultiColorGraphModel } from 'src/models/dpgi';
import { useDispatch } from 'react-redux';
import { getDistrictListGradeWise } from 'src/actions/dpgi.action';
import { useNavigate } from 'react-router-dom';

// declare interface Math {
//     log10(x: number): number;
// }

var easeOutBounce = function (pos: any) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};
// Math.e
// Math.easeOutBounce = easeOutBounce;

const MultiColorGraph = (props: MultiColorGraphModel) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { year, state, data } = props

    const [chartOptions, setChartOptions] = useState<chartOptionsModel>({
        chart: {
            // height: '600',
            marginTop: 50,
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Daksh',
                'Utkarsh',
                'Ati-Uttam',
                'Uttam',
                'Prachesta-1',
                'Prachesta-2',
                'Prachesta-3',
                'Akanshi-1',
                'Akanshi-2',
                'Akanshi-3',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            allowDecimals: false,
            title: ''
        },
        legend: true,
        tooltip: {
            style: {
                pointerEvents: 'auto'
            },
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            },
            series: {
                cursor: 'pointer',
            }
        },
        series: [
            {
                name: "District",
                colorByPoint: true,
                // data: [
                //     {
                //         name: "Daksh",
                //         color: "#0000FF",
                //         y: 300,
                //     },
                //     {
                //         name: "Utkarsh",
                //         color: "#5050FF",
                //         y: 400,
                //     },
                //     {
                //         name: "Atti-utam",
                //         color: "#7D7DFF",
                //         y: 500,
                //     },
                //     {
                //         name: "Uttam",
                //         color: "#009632",
                //         y: 300,
                //     },
                //     {
                //         name: "Prachesta-1",
                //         color: "#96FF96",
                //         y: 750,
                //     },
                //     {
                //         name: "Prachesta-2",
                //         color: "#FFFF00",
                //         y: 420,
                //     },
                //     {
                //         name: "Prachesta-3",
                //         color: "#FFC800",
                //         y: 300,
                //     },
                //     {
                //         name: "Akanshi-1",
                //         color: "#FA9696",
                //         y: 500,
                //     },
                //     {
                //         name: "Akanshi-2",
                //         color: "#FA6464",
                //         y: 400,
                //     },
                //     {
                //         name: "Akanshi-3",
                //         color: "#FA4B4B",
                //         y: 600,
                //     }
                // ]
            }
        ],

    })

    const displayDistrictList = (grade: string) => {
        localStorage.setItem('activeBar', year + '_' + state + '_' + grade)
        navigate('/gradewisebarlist')
    }

    useEffect(() => {
        setChartOptions((previousState: chartOptionsModel) => {
            return {
                ...previousState,
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function (e: any) {
                                displayDistrictList(e.point.name)
                            }
                        }
                    }
                }
                , series: [{
                    name: "District",
                    colorByPoint: true,
                    data: data,
                    animation: {
                        duration: 3000,
                        // Uses simple function
                        easing: easeOutBounce
                    }
                }],

            }
        })
    }, [data])
    return (
        <div className="graph-wrap" id="multiColorGraph">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                allowChartUpdate={true}
                immutable={true}
            />
        </div>
    )
}

export default MultiColorGraph