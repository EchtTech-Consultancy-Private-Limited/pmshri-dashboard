import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.scss';
import { chartOptionsModel } from '@/models/dpgi';

const LineGraph = (props: any) => {
    const { withComparedData, toComparedData, withComparedYear, toComparedYear } = props
    const [options, setOptions] = useState<chartOptionsModel>({
        chart: {
            type: 'line',
            marginTop: 50,
        },
        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            },
            allowDecimals: false,
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

        },

        series: [],
    })

    useEffect(() => {
        if (withComparedData.length && toComparedData.length) {
            setOptions((previousState: chartOptionsModel) => {
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
        <div className="graph-wrap" id="lineGraph">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default LineGraph