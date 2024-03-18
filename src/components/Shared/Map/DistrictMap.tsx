import { useEffect, useState } from 'react'
import Highcharts, { PlotLineOrBand } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DISTRICT_MAPS } from 'src/assets/maps/district_map';
import { india } from 'src/assets/maps/all-india';
import { MapOptionsModel, DistrictMapModel } from 'src/models/dpgi';
import { useNavigate } from 'react-router-dom';
const mapDataIE = india

const DistrictMap = (props: DistrictMapModel) => {
  const { state, district_id, activeColor } = props
  const navigate = useNavigate()
  const [mapOptions, setmapOptions] = useState<MapOptionsModel>({
    chart: {
      map: mapDataIE,
      height: '300',
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
      enabled: true,
      borderWidth: 0,
      backgroundColor: "#fff",
      style: {
        opacity: 1
      }
    }
  })

  useEffect(() => {
    let selectedMapData = {} as any
    if (state === 'delhi') {
      selectedMapData = DISTRICT_MAPS.find(data => data.name.toLowerCase() === 'nct of delhi')
    }
    else {
      selectedMapData = DISTRICT_MAPS.find(data => data.name.toLowerCase() === state.replace(/\s+/g,' ').toLowerCase())
    }
    selectedMapData?.data?.[0]?.data.forEach((district: any) => {
      district.borderColor = "#010202";
      if (district.id == district_id) {
        district.color = activeColor
        district.states = {
          hover: {
            color: activeColor
          },
          select: {
            color: activeColor
          }

        }
      }
      else {
        district.color = '#42fff6'
        district.states = {
          hover: {
            color: '#A41C73'
          },
          select: {
            color: '#A41C73'
          }

        }
      }

    }, [district_id, activeColor])

    setmapOptions((previousState: MapOptionsModel) => {
      return {
        ...previousState,
        series: selectedMapData?.data,
        plotOptions: {
          series: {
            cursor: 'pointer',
            name: 'District',
            allowPointSelect: true,
            tooltip: {
              enabled: true,
              pointFormat: '{point.name}'
            },
            events: {
              click: function (e: any) {
                if (!isNaN(parseInt(e.point.id))) {
                  changeDistrict(e.point.id)
                }
                else {
                  alert('No Data Found')
                  window.location.href = '/state'
                }
              }
            }
          }
        },
      }
    })
  }, [district_id])

  const changeDistrict = (district_id: number) => {
    localStorage.setItem('activeDistrict', JSON.stringify(district_id))
    navigate('/district')
  }
  return (
    <div className="graph-wrap" id="districtMap">
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

export default DistrictMap