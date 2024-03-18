import React, { useEffect, useState } from 'react';
import './DistrictScores.scss';
import IndicatorAccordion from 'src/components/Shared/IndicatorAccordion/IndicatorAccordion';
import DonutGraph from 'src/components/Shared/Graph/DonutGraph';
import DistrictScoresCardsTab from './DistrictScoresCardsTab';
import { useDispatch, useSelector } from 'react-redux';
import { getDistrictUnderGrade } from 'src/actions/dpgi.action';
import { InitialStateModel, StoreModel } from "src/models/dpgi";

const DistrictScores = (props: any) => {
    const { data, district, year, state } = props
    const dispatch = useDispatch()
    const [chartData, setChartData] = useState([])
    const [list, setList] = useState({}) as any
    const [isLoading, setIsLoading] = useState(true)
    const gradeWiseDistrict = useSelector<StoreModel>(store => store.gradeWiseDistrict) as InitialStateModel
    const [grade, setGrade] = useState(data.grade)

    useEffect(() => {
        setIsLoading(true)
        dispatch(getDistrictUnderGrade(year, state))
    }, [year, state])

    useEffect(() => {
        if (gradeWiseDistrict.loaded && !gradeWiseDistrict.loading) {
            setChartData(gradeWiseDistrict.data.chartData)
            setList(gradeWiseDistrict.data.displayData)
        }
    }, [gradeWiseDistrict])

    useEffect(() => {
        if (chartData.length && list[grade] !== undefined) {
            setIsLoading(false)
        }
    }, [chartData])
    // const allDistrictGradeData = useSelector<StoreModel>(store => store.categoryData) as InitialStateModel
    const changeGrade = (grade: string) => {
        setGrade(grade)
    }
    return (
        <section className="scores bg-grey ptb-60">
            <div className="container">
                <div className="row">
                    <DistrictScoresCardsTab data={data} year={year} />
                    {/* <div className="col-md-12">
                        <div className="indicator-accordion">
                            <h2 className="heading-sm ptb-30">
                                Categories Wise Score of {data.district_name}
                            </h2>
                            <IndicatorAccordion district={district} year={year} />
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="district-grade mtb-30">
                            <h2 className="heading-sm">
                                Districts Under {grade} Grade ({state.split(' ').map((element: string, index: number) => {
                                    return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                                })})
                            </h2>
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    {isLoading ? <></> : <DonutGraph data={chartData} onChangeGrade={changeGrade} />}
                                </div>
                                <div className="col-md-7">
                                    <div className="district-grade-list">
                                        <ul className="row">
                                            {isLoading ? <></> : list[grade].map((element: string) => {
                                                return <li key={element} className="col-md-6">
                                                    <a className="grade-list">
                                                        <span className={"material-icons-round card-" + (grade.toLowerCase())}>
                                                            check_box_outline_blank
                                                        </span>
                                                        {element}
                                                    </a>
                                                </li>
                                            })}
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

export default DistrictScores