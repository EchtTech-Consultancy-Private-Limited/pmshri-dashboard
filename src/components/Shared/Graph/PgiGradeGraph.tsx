import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.scss'
import { chartOptionsModel, PgiGradeGraphModel } from 'src/models/dpgi';

const PgiGradeGraph = (props: PgiGradeGraphModel) => {
    const { withComparedData, toComparedData, withComparedYear, toComparedYear } = props
    const [chartOptions, setChartOptions] = useState<chartOptionsModel>({
        chart: {
            height: '400',
            marginTop: 70,
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
                'Atti-utam',
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
        legend: {
            align: 'top',
            verticalAlign: 'top',
            x: 0,
            y: 0
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name} : </td>' +
                '<td style="padding:0"><b>{point.y} District</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: [{
            name: '2018-19',
            color: '#383876',
            // data: [300, 600, 100, 500, 300, 600, 250, 650, 360, 300]

        }, {
            name: '2019-20',
            color: '#D94148',
            // data: [375, 250, 750, 450, 375, 50, 500, 450, 200, 600]

        }]
    })

    useEffect(() => {
        if (withComparedData.length && toComparedData.length) {
            setChartOptions((previousState: chartOptionsModel) => {
                return {
                    ...previousState, series: [{
                        name: withComparedYear,
                        color: '#383876',
                        data: withComparedData

                    }, {
                        name: toComparedYear,
                        color: '#D94148',
                        data: toComparedData

                    }]
                }
            })
        }

    }, [withComparedData, toComparedData])
    return (
        <div className="graph-wrap" id="PgiGradeGraph">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    )
}

export default PgiGradeGraph