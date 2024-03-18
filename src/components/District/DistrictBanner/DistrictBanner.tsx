import React, { useEffect, useState } from 'react';
import './DistrictBanner.scss';
import DistrictMap from 'src/components/Shared/Map/DistrictMap';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';
import { useDispatch, useSelector } from 'react-redux';
import { getDistrictCategoryData } from 'src/actions/dpgi.action';

const DistrictBanner = (props: any) => {
  const { state, district, years } = props
  const dispatch = useDispatch()
  const [year, setYear] = useState(localStorage.getItem('activeYear') || years[0].yr_code)
  const scoresTabData = useSelector<StoreModel>(store => store.districtCategoryData) as InitialStateModel
  const [data, setData] = useState({}) as any
  const [isLoading, setIsLoading] = useState(true)
  const [activeColor, setActiveColor] = useState('')

  useEffect(() => {
    setIsLoading(true)
    dispatch(getDistrictCategoryData(year, parseInt(district)))
  }, [year, district, state])

  useEffect(() => {
    if (scoresTabData.error) {
      alert('No Data Found')
      window.location.href = '/state'
    }
    if (!scoresTabData.loading && scoresTabData.loaded) {
      setData(scoresTabData.data.categoryData)
    }
  }, [scoresTabData])

  useEffect(() => {
    if (Object.keys(data).length) {
      setActiveColor(data.color)
      setIsLoading(false)
      props.onChangeData(data)
      props.onChangeYear(year)
    }
  }, [data])

  const changeYear = (event: EventModel) => {
    setYear(event.target.value)
    props.onChangeYear(event.target.value)
  }

  return (
    <section className="banner-wrap banner-bg ptb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {isLoading ? <></> : <DistrictMap state={state} district_id={district} activeColor={activeColor} />}
          </div>
          <div className="col-md-6">
            <div className="banner-content">
              <div className="d-flex justify-content-end mb-3">
                <div className="select-wrap mx-3  ">
                  <div className="form-row">
                    <div className="form-col">
                      <select value={year} className="form-select" onChange={changeYear}>
                        {years.map((year: any) => {
                          return <option value={year.yr_code}>{year.year}</option>
                        })}
                        {/* <option value="3">2020-21</option>
                        <option value="4">2021-22</option> */}
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="download-btn">
                  <a href="#">
                    <span className="material-icons-round">
                      system_update_alt
                    </span>
                    Download Report
                  </a>
                </div> */}
              </div>

              <div className="district-card-wrap color-striped">
                <div className={"district-card card-" + (isLoading ? 'daksh' : data.grade.toLowerCase())}>
                  <div className="district-card-left col-md-6">
                    <h3 className="title-white-sm">
                      {isLoading ? '' : state.split(' ').map((element: string) => {
                        return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                      })}
                    </h3>
                    <h2 className="heading-white">
                      {isLoading ? '' : data.district_name}
                    </h2>
                  </div>
                  <div className="district-card-right col-md-6">
                    <ul>
                      <li>
                        <h3 className="title-white-sm">
                          District Grade
                        </h3>
                        <p className="desc-white">
                          {isLoading ? '' : data.grade}
                        </p>
                      </li>
                      <li>
                        <h3 className="title-white-sm">
                          Total Score
                        </h3>
                        <p className="desc-white">
                          {isLoading ? '' : data.total_score}/600
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DistrictBanner