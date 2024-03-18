import React, { useEffect, useState } from 'react'
import BarListBanner from 'src/components/Gradewisebarlist/BarlistBanner/BarlistBanner'
import Barlist from 'src/components/Gradewisebarlist/Barlist/Barlist'
import { useDispatch } from 'react-redux'
import { getDistrictListGradeWise } from 'src/actions/dpgi.action'


const GradewiseBarlist = () => {
  const dispatch = useDispatch()
  const activeBar = localStorage.getItem('activeBar') || ''
  const [isLoading, setIsLoading] = useState(true)
  let activeElm = [] as Array<string>
  useEffect(() => {
    if (activeBar !== '') {
      if (localStorage.getItem('activeState')) {
        localStorage.removeItem('activeState')
      }
      if (localStorage.getItem('activeDistrict')) {
        localStorage.removeItem('activeDistrict')
      }
      activeElm = activeBar.split('_')
      dispatch(getDistrictListGradeWise(activeElm[0], activeElm[1], activeElm[2].toLowerCase()))
      setIsLoading(false)
    }
    else {
      window.location.href = '/'
    }
  }, [activeBar])
  return (
    <>
      <BarListBanner />
      {!isLoading && <Barlist />}
    </>
  )
}

export default GradewiseBarlist