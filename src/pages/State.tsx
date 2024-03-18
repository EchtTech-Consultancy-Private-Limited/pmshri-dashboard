import { useEffect, useState } from 'react';
import StateBanner from 'src/components/State/StateBanner/StateBanner';
import StateScores from 'src/components/State/StateScores/StateScores';
import { getDistrictCategoryData } from 'src/actions/dpgi.action';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateModel, StoreModel } from 'src/models/dpgi';
import AdvanceSearch from 'src/components/State/StateScores/AdvanceSearch';

const State = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allYears = useSelector<StoreModel>(store => store.allYears) as InitialStateModel
  const [year, setYear] = useState(localStorage.getItem('activeYear') || '-1')
  // const blocklist = useSelector<StoreModel>(store => store.blockData) as InitialStateModel
  // const states = useSelector<StoreModel>(store => store.states.data) as []
  // const districtlist = useSelector<StoreModel>(store => store.districtList) as InitialStateModel
  //const filterWiseSchoolList = useSelector<StoreModel>(store => store.filterWiseSchool) as InitialStateModel
  //const filterWiseCardDetail = useSelector<StoreModel>(store => store.filterWiseCardDatas.data) as InitialStateModel
  const [isLoading, setIsLoading] = useState(true)

  const changeYear = (year: string) => {
    setYear(year)
  }

  // useEffect(() => {
  //     setIsLoading(true)
  //     dispatch(getSchoolListFilterWise(sid, did, bid ,page))
  //     dispatch(getCardDataFilterWise(sid, did, bid ,page))
  //   }, [sid, did, bid ,page])

  
  useEffect(() => {
    if (!localStorage.getItem('activeState')) {
      navigate('/home')
    }
    if (localStorage.getItem('activeDistrict')) {
      localStorage.removeItem('activeDistrict')
      localStorage.removeItem('activeStateID')
    }
    if (localStorage.getItem('activeBar')) {
      localStorage.removeItem('activeBar')
    }
  }, [])
   
  useEffect(() => {
    if (allYears.loaded && !allYears.loading) {
      if (year === '-1') {
        setYear(allYears.data[0].yr_code)
      }
    }
  }, [allYears])

  useEffect(() => {
    if (year !== '-1') {
      setIsLoading(false)
    }
  }, [year])

  return (
    <>
      {
        isLoading ? <></> : <>
          {/* <AdvanceSearch states={states} blocklist={blocklist?.data.data} districtlist={districtlist?.data.data} />          */}
          {/* <StateBanner onChangeYear={changeYear} years={allYears.data} filterWiseCardDetail={filterWiseCardDetail?.data} /> */}
          <StateScores year={year} />         
        </>
      }
    </>

  )
}

export default State