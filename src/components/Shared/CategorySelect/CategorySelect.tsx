import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTopDistrictsCategoryWise, getAllStates } from 'src/actions/dpgi.action';
import { StoreModel, InitialStateModel, EventModel } from 'src/models/dpgi';

const CategorySelect = (props: any) => {
    const { years } = props
    const dispatch = useDispatch()
    const topDistricts = useSelector<StoreModel>(store => store.topDistricts) as InitialStateModel
    const states = useSelector<StoreModel>(store => store.states.data) as []
    const [year, setYear] = useState(localStorage.getItem('activeYear') || years[0].yr_code)
    const [state, setState] = useState(JSON.parse(localStorage.getItem('activeState') || JSON.stringify("India")))
    const [data, setData] = useState({})
    useEffect(() => {
        const catId = localStorage.getItem('activeCategory') || '1'
        dispatch(getTopDistrictsCategoryWise(year, state, catId))
        dispatch(getAllStates(year))
    }, [year, state])

    useEffect(() => {
        if (!topDistricts.loading && topDistricts.loaded) {
            setData(topDistricts.data)
        }
    }, [topDistricts])

    useEffect(() => {
        if (Object.keys(data).length) {
            props.onChangeData(data, state)
        }
    }, [data])

    const changeState = (event: EventModel) => {
        setState(event.target.value)
    }

    const changeYear = (event: EventModel) => {
        setYear(event.target.value)
    }

    return (
        <div className="category-select" id='main-content'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="indicator-select mtb-30">
                            <label>Select State</label>
                            <select value={state} className="form-select" onChange={changeState}>
                                <option value='India'>India</option>
                                {states.length && states.map((stateName: any, index: number) => {
                                    return <option key={index} value={stateName.state_name.toLowerCase()}>{stateName.state_name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="indicator-select mtb-30">
                            <label>Select Year</label>
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
            </div>
        </div>
    )
}

export default CategorySelect