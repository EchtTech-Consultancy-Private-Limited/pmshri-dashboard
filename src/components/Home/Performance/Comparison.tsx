import { getComparisonData } from 'src/actions/dpgi.action';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PgiGradeGraph from 'src/components/Shared/Graph/PgiGradeGraph';
import LineGraph from 'src/components/Shared/Graph/LineGraph';

const Comparison = (props: any) => {
    const { state, years } = props
    const dispatch = useDispatch()
    const data = useSelector<StoreModel>(store => store.comparisonData) as InitialStateModel
    const [year, setYear] = useState(years[1].yr_code)
    const withComparedYear = years[0].yr_code
    const withComparedYearName = years[0].year as string
    const [toComparedYearName, setToComparedYearName] = useState(years[1].year)
    const [withComparedData, setwithComparedData] = useState([])
    const [toComparedData, settoComparedData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!data.loading && data.loaded) {
            setwithComparedData(data.data.withComparedData)
            settoComparedData(data.data.toComparedData)
        }
    }, [data])

    useEffect(() => {
        if (withComparedData.length && toComparedData.length) {
            setIsLoading(false)
        }
    }, [withComparedData, toComparedData])

    useEffect(() => {
        dispatch(getComparisonData(withComparedYear, year, state))
    }, [year, state])

    const changeYear = (event: EventModel) => {
        setYear(event.target.value)
        setToComparedYearName(event.target.options[event.target.value].text)
    }
    return (
        <div className="performance-card">
            <div className="performance-card-header">
                <h2 className="heading-sm">
                    Number of Districts in Different Grades of PGI-District ({state === 'India' ? 'National' : state.split(' ').map((element: string, index: number) => {
                        return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                    })})
                </h2>
                <div className="performancetab-wrap">
                    <ul className="nav performance-tabs" id="comparisionTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="com-graph-tab" data-bs-toggle="tab" data-bs-target="#com-graph" type="button" role="tab" aria-controls="com-graph" aria-selected="true">
                                <span className="material-icons-outlined">
                                    bar_chart
                                </span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="com-table-tab" data-bs-toggle="tab" data-bs-target="#com-table" type="button" role="tab" aria-controls="com-table" aria-selected="false">
                                <span className="material-icons-outlined">
                                    format_list_bulleted
                                </span>
                            </button>
                        </li>
                    </ul>
                    {years.length > 2 && <div className="select-wrap">
                        <div className="form-row">
                            <div className="form-col">
                                <select className="form-select" onChange={changeYear}>
                                    {years.map((year: any) => {
                                        if (year.yr_code !== withComparedYear) {
                                            return <option value={year.yr_code}>{year.year}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
            <div className="tab-content" id="comparisionTabContent">
                <div className="tab-pane fade show active" id="com-graph" role="tabpanel" aria-labelledby="com-graph-tab">
                    <div className="performance-graph" data-aos="fade-up">
                        <PgiGradeGraph withComparedData={withComparedData} toComparedData={toComparedData} withComparedYear={withComparedYearName} toComparedYear={toComparedYearName} />
                    </div>
                </div>
                <div className="tab-pane fade" id="com-table" role="tabpanel" aria-labelledby="com-table-tab">
                    <LineGraph withComparedData={withComparedData} toComparedData={toComparedData} withComparedYear={withComparedYearName} toComparedYear={toComparedYearName} />
                </div>
            </div>
        </div>
    )
}

export default Comparison