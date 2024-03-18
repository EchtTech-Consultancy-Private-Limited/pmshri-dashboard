import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.scss'

// const options = {
//     chart: {
//         type: 'pie',
//         height: '350'
//     },
//     title: {
//         text: ''
//     },
//     tooltip: {
//         headerFormat: '',
//         pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
//             ''
//     },

//     plotOptions: {
//         pie: {
//             allowPointSelect: false,
//             dataLabels: {
//                 enabled: false,
//             },
//             showInLegend: false
//         }
//     },
//     series: [{
//         minPointSize: 10,
//         innerSize: '40%',
//         zMin: 0,
//         name: 'District',
//         data: [{
//             name: 'Atti-utam',
//             y: 40,
//             z: 100,
//             color: '#7D7DFF'
//         }, {
//             name: 'Not selected',
//             y: 60,
//             z: 100,
//             color: '#D7DBEC'
//         }]
//     }]
// }

const DonutGraph = (props: any) => {
    const { data } = props
    const [options, setOptions] = useState({
        chart: {
            type: 'pie',
            height: '350'
        },
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b>: {point.y}<br/>' +
                ''
        },
        legend: {
            enabled: true
        },

        plotOptions: {
            pie: {
                allowPointSelect: false,
                dataLabels: {
                    enabled: false,
                },
                showInLegend: false
            },
            series: {
                cursor: 'pointer',
                events: {
                    click: function (e: any) {
                        changeGrade(e.point.name)
                    }
                }
            }
        },
        series: [{
            minPointSize: 10,
            innerSize: '40%',
            zMin: 0,
            name: 'District',
            // data: [{
            //     name: 'Atti-utam',
            //     y: 40,
            //     z: 100,
            //     color: '#7D7DFF'
            // }, {
            //     name: 'Not selected',
            //     y: 60,
            //     z: 100,
            //     color: '#D7DBEC'
            // }]
        }]
    })

    useEffect(() => {
        setOptions((previousState: any) => {
            return {
                ...previousState, series: [{
                    minPointSize: 10,
                    innerSize: '40%',
                    zMin: 0,
                    name: 'District',
                    data: data,
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}: ({point.y})"
                    },
                }]
            }
        })
    }, [data])

    const changeGrade = (grade: string) => {
        props.onChangeGrade(grade)
    }
    return (
        <div className="graph-wrap">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default DonutGraph