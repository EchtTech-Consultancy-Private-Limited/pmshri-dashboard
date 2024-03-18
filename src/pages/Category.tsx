import CategorySelect from 'src/components/Shared/CategorySelect/CategorySelect'
import { useEffect, useState } from 'react'
import CategoryBanner from 'src/components/Category/CategoryBanner/CategoryBanner'
import CategoryList from 'src/components/Category/CategoryList/CategoryList'
import { useSelector } from 'react-redux'
import { InitialStateModel, StoreModel } from 'src/models/dpgi'

const Category = () => {
  const [data, setData] = useState({}) as any
  const allYears = useSelector<StoreModel>(store => store.allYears) as InitialStateModel
  const [state, setState] = useState('jammu & kashmir')
  const [isLoading, setIsLoading] = useState(true)
  const changeData = (data: any, state: string) => {
    setState(state)
    setData(data)
  }

  useEffect(() => {
    if (Object.keys(data).length) {
      setIsLoading(false)
    }
    if (localStorage.getItem('activeBar')) {
      localStorage.removeItem('activeBar')
    }
  }, [data])

  return (
    <>
      {isLoading ? <></> : <CategoryBanner data={data.categoryData} />}
      {allYears.data.length &&
        <><CategorySelect onChangeData={changeData} years={allYears.data} />
          {isLoading ? <></> : <CategoryList data={data} state={state} years={allYears.data} />}</>}
    </>
  )
}

export default Category