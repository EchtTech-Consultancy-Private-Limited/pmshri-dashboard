import { getStateColorCodeData } from 'src/actions/dpgi.action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StateBanner.scss'
import StateMap from 'src/components/Shared/Map/StateMap';
import { EventModel, InitialStateModel, StateBannerModel, StoreModel } from 'src/models/dpgi';
import { useNavigate } from 'react-router-dom';

import statep from 'src/assets/images/state.png';
import nvs from 'src/assets/images/nvs.png';
import govadded from 'src/assets/images/govadded.png';
import privates from 'src/assets/images/school.png';
import primaryschool from 'src/assets/images/primaryschool.png';
import upperp from 'src/assets/images/upperp.png';
import secondry from 'src/assets/images/secondary.png';


const StateBanner = (props: StateBannerModel) => {
  const { years, filterWiseCardDetail,isLoadingStateData,onSchoolChange,schoolType,setSchoolType,setCurrentPage } = props

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [year, setYear] = useState(localStorage.getItem('activeYear') || years[0].yr_code)
  const [isLoading, setIsLoading] = useState(true)
  const [colorCodeData, setColorCodeData] = useState({})
  const [hoverData, setHoverData] = useState({}) as any
  const [stateGrade, setStateGrade] = useState('')
  const [grades, setGrade] = useState({
    'Daksh': 0,
    'Utkarsh': 0,
    'Ati-Uttam': 0,
    'Uttam': 0,
    'Prachesta-1': 0,

  }) as any
  // const state = useSelector<StoreModel>(store => store.state.data) as string
  const state = JSON.parse(localStorage.getItem('activeState') || '')
  
  let activeDistrictName = localStorage.getItem('activeDistrictName') || ''
  const stateColorCodes = useSelector<StoreModel>(store => store.stateColorCodes) as InitialStateModel
  
  useEffect(() => {
    setGrade({
      'Daksh': 0,
      'Utkarsh': 0,
      'Ati-Uttam': 0,
      'Uttam': 0,
      'Prachesta-1': 0,

    })
    dispatch(getStateColorCodeData(year, state))
  }, [year, state])

  useEffect(() => {
    if (stateColorCodes.loaded && !stateColorCodes.loading) {
      setGrade({
        'Daksh': 0,
        'Utkarsh': 0,
        'Ati-Uttam': 0,
        'Uttam': 0,
        'Prachesta-1': 0,

      })
      setColorCodeData(stateColorCodes.data.distColorCode)
      setHoverData(stateColorCodes.data.hoverData)
      setStateGrade(stateColorCodes.data.grade)
    }
  }, [stateColorCodes])

  useEffect(() => {
    if (Object.keys(colorCodeData).length && Object.keys(hoverData).length) {
      setIsLoading(false)
    }
  }, [colorCodeData, hoverData])

  useEffect(() => {
    if (Object.keys(hoverData).length) {
      Object.keys(hoverData).map((district: any) => {
        setGrade((previousState: any) => {
          return {
            ...previousState,
            [hoverData[district][0]]: parseInt(previousState[hoverData[district][0]]) + 1
          }
        })
      })
    }
  }, [hoverData])

  const changeYear = (event: EventModel) => {
    localStorage.setItem('activeYear', event.target.value)
    setYear(event.target.value)
    props.onChangeYear(event.target.value)
  }
  const displayDistrictList = (grade: string, score: number) => {
    if (score !== 0) {
      localStorage.setItem('activeBar', year + '_' + state + '_' + grade)
      navigate('/gradewisebarlist')
    }
  }

  const handleSchoolChange = (school_type:string)=>{
    setSchoolType(school_type);
    setCurrentPage(1);
    onSchoolChange(school_type);
  }

  return (
    <section className="banner-wrap banner-bg bg-white pt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content">

              <div className="state-card row">

                <div className="state-card-list districtcard-list mt-2">
                  <div className="row justify-content-center">


                    <div className='col-md-3'>
                      <div className={`state-card-top card-details ${schoolType==="pmshri_school"?'active-school-type':''}`} onClick={()=>handleSchoolChange("pmshri_school")}>
                        <div>
                          <img src= {privates} alt="icon" className="img-fluid" />
                        </div>
                        <div className='ms-3'>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalschool}</h2>
                          <h3 className="state-card-title">All Govt Schools (States/UTs/KVS/NVS)</h3>
                        </div>
                      </div>
                    </div>                 

                    {/* <div className='col'>
                      <div className="state-card-top card-details">
                        <div>
                          <img src= {primaryschool} alt="icon" className="img-fluid" />
                        </div>
                        <div>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalprimaryschool}</h2>
                          <h3 className="state-card-title">Primary</h3>
                        </div>
                      </div>
                    </div>

                    <div className='col'>
                      <div className="state-card-top card-details">
                        <div>
                          <img src= {nvs} alt="icon" className="img-fluid" />
                        </div>
                        <div>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalupperprimaryschool}</h2>
                          <h3 className="state-card-title">Upper Primary</h3>
                        </div>
                      </div>
                    </div>

                    <div className='col'>
                      <div className="state-card-top card-details">
                        <div>
                          <img src= {upperp} alt="icon" className="img-fluid" />
                        </div>
                        <div>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalsecondaryschool}</h2>
                          <h3 className="state-card-title">Secondary</h3>
                        </div>
                      </div>
                    </div>                  

                    <div className='col'>
                      <div className="state-card-top card-details">
                        <div>
                          <img src= {secondry} alt="icon" className="img-fluid" />
                        </div>
                        <div>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalhighsecondaryschool}</h2>
                          <h3 className="state-card-title">Hr. Secondary</h3>
                        </div>
                      </div>
                    </div> */}


                    <div className='col-md-3'>
                      <div className={`state-card-top card-details ${schoolType==="kvs"?'active-school-type':''}`} onClick={()=>handleSchoolChange("kvs")}>
                        <div>
                          <img src="/static/media/team.7c368de39d4aa722d19c.svg" alt="icon" className="img-fluid" />
                        </div>
                        <div className='ms-3'>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalKVSschool}</h2>
                          <h3 className="state-card-title">KVS<br/><br/></h3>
                        </div>
                      </div>
                    </div>


                    <div className='col-md-3'>
                      <div className={`state-card-top card-details ${schoolType==="nvs"?'active-school-type':''}`} onClick={()=>handleSchoolChange("nvs")}>
                        <div>
                          <img src= {statep} alt="icon" className="img-fluid" />
                        </div>
                        <div className='ms-3'>
                          <h2 className="state-card-name">{filterWiseCardDetail?.totalnvsschool}</h2>
                          <h3 className="state-card-title">NVS<br/><br/></h3>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default StateBanner