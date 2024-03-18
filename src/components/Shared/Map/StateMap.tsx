import { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DISTRICT_MAPS } from 'src/assets/maps/district_map';
import { india } from 'src/assets/maps/all-india';
import { MapOptionsModel, StateMapModel } from 'src/models/dpgi';
import { useDispatch } from 'react-redux';
import { setCurrentDistrict } from 'src/actions/dpgi.action';
import { useNavigate } from "react-router-dom";

const mapDataIE = india
const StateMap = (props: StateMapModel) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const { state, colorCodeData, hoverData } = props;

  const [mapOptions, setmapOptions] = useState<MapOptionsModel>({
    chart: {
      map: mapDataIE,
      height: '375',
      backgroundColor: 'transparent',
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
      useHTML: true,
      borderWidth: 0,
      backgroundColor: "#fff",
      padding: 0,
      style: {
        opacity: 0.8
      },
      valueDecimals: 0,
    }

  })

  useEffect(() => {
    let selectedMapData = {} as any
    if (state === 'delhi') {
      selectedMapData = DISTRICT_MAPS.find(data => data.name.toLowerCase() === 'nct of delhi') || {}
    }
    else {
      selectedMapData = DISTRICT_MAPS.find(data => data.name.toLowerCase() === state.replace(/\s+/g,' ').toLowerCase()) || {}
    }
    selectedMapData?.data?.[0]?.data.forEach((district: any) => {
      if (Object.keys(colorCodeData).length > 0) {
        district.borderColor = "#010202";
        district.grade = hoverData[district.id] !== undefined ? hoverData[district.id][0] : '-';
        district.score = hoverData[district.id] !== undefined ? hoverData[district.id][1] : '-';
        district.color = colorCodeData[district.id] !== undefined ? colorCodeData[district.id] : '#cccccc'
        district.states = {
          hover: {
            color: colorCodeData[district.id] !== undefined ? colorCodeData[district.id] : '#cccccc'
          },
          select: {
            color: colorCodeData[district.id] !== undefined ? colorCodeData[district.id] : '#cccccc'
          }

        }
      }
    })

    setmapOptions((previousState: MapOptionsModel) => {
      return {
        ...previousState,
        series: selectedMapData.data,
        plotOptions: {
          series: {
            cursor: 'pointer',
            name: 'District',
            allowPointSelect: true,
            // color: '#FFB142',
            // states: {
            //   hover: {
            //     color: "#006bb6"
            //   },
            //   select: {
            //     color: '#006bb6',
            //   }
            // },
            events: {
              click: function (e: any) {
                setDistrict(e.point.id, e.point.color)
              }
            },
            tooltip: {
              enabled: true,
              headerFormat: '<div class="statetooltipMainWrapper">',
              pointFormat: '<div class="statetooltipWrapper">'
                +
                '<p class="statetooltipPoint">District Name<br/><span>{point.name}</span></p> <p class="statetooltipPoint">District Grade<br /><span>{point.grade}</span></p> <p class="statetooltipPoint">Total Score<br /> <span>{point.score}/600</span></p>'
                +
                '</div></div>',
            }
          }
        },
      }
    })
  }, [state, colorCodeData, hoverData])

  const setDistrict = (district_id: number, color: string) => {
    if (color !== '#cccccc') {
      dispatch(setCurrentDistrict(district_id))
      localStorage.setItem('activeDistrict', JSON.stringify(district_id))
      window.location.href = '/district'
    }
  }

  return (
    <div className="graph-wrap" id="stateMap">
      <HighchartsReact
        constructorType={'mapChart'}
        highcharts={Highcharts}
        options={mapOptions}
        allowChartUpdate={true}
        immutable={true}
      />
    </div>
  )
}

export default StateMap