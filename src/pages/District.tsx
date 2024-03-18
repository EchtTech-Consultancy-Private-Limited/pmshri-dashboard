import { useEffect, useState } from 'react'
import DistrictBanner from 'src/components/District/DistrictBanner/DistrictBanner'
import DistrictScores from 'src/components/District/DistrictScores/DistrictScores'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialStateModel, StoreModel } from 'src/models/dpgi'

const District = () => {
  const navigate = useNavigate()
  const allYears = useSelector<StoreModel>(store => store.allYears) as InitialStateModel
  const [year, setYear] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const district = JSON.parse(localStorage.getItem('activeDistrict') || '{}')
  let state = JSON.parse(localStorage.getItem('activeState') || '{}')

  useEffect(() => {
    if (!localStorage.getItem('activeDistrict')) {
      navigate('/home')
    }
  }, [])

  useEffect(() => {
    if (Object.keys(data).length && year !== '') {
      setIsLoading(false)
    }
  }, [data, year])

  const changeData = (data: any) => {
    setIsLoading(true)
    setData(data)
  }

  const changeYear = (year: string) => {
    setYear(year)
  }

  return (
    <>
      {allYears.data.length && <DistrictBanner onChangeData={changeData} state={state} onChangeYear={changeYear} district={district} years={allYears.data} />}
      {isLoading ? <></> :
        <>
          <DistrictScores data={data} state={state} district={parseInt(district)} year={year} />
        </>
      }
    </>
  )
}

export default District