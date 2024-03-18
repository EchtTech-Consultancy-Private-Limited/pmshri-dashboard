import { useEffect, useState } from 'react';
import './IndicatorAccordion.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getdpgiScoreData } from 'src/actions/dpgi.action';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';

const IndicatorAccordion = (props: any) => {
    const { district, year } = props
    const dispatch = useDispatch()
    const [data, setData] = useState({}) as any
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState('')
    const [activeDomain, setActiveDomain] = useState('')
    const [options, setOptions] = useState({}) as any
    const [indicatorCount, setIndicatorCount] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const [indicatorRows, setIndicatorRows] = useState([])
    const scoreData = useSelector<StoreModel>(store => store.dpgiScore) as InitialStateModel
    useEffect(() => {
        dispatch(getdpgiScoreData(year, district))
    }, [year, district])

    useEffect(() => {
        if (scoreData.loaded && !scoreData.loading) {
            setData(scoreData.data)
        }
    }, [scoreData])

    useEffect(() => {
        if (Object.keys(data).length) {
            setActiveCategory(Object.keys(data)[0])
        }
    }, [data])

    useEffect(() => {
        if (activeCategory !== '') {
            setActiveDomain(Object.keys(data[activeCategory])[1])
        }
    }, [activeCategory])

    useEffect(() => {
        if (activeDomain !== '') {
            setOptions(data[activeCategory])
            setIndicatorCount(data[activeCategory][activeDomain]['data'].length)
            setTotalScore(data[activeCategory][activeDomain]['score'])
            setIndicatorRows(data[activeCategory][activeDomain]['data'])
            setIsLoading(false)
        }
    }, [activeDomain])

    const changeAccordian = (category: string) => {
        if (category !== activeCategory) {
            setActiveCategory(category)
        }
    }

    const changeDomain = (event: EventModel) => {
        setActiveDomain(event.target.value)
    }
    return (
        <div className="accordion" id="indicator-accordionExample">
            {isLoading ? <></> : Object.keys(data).map((category: any, index: any) => {
                if (index === 0) {
                    return <div className="accordion-item" key={category}>
                        <h2 className="accordion-header" id={"indicator" + (category)} onClick={() => changeAccordian(category)}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + (category)} aria-expanded="true" aria-controls={"collapse" + (category)}>
                                <img src={require('src/assets/images/' + (data[category]['category_details']['image']) + '.svg')} alt="icon" className="img-fluid" />
                                Category 1 - {data[category]['category_details']['name']}
                            </button>
                            <span className="txt-black">Weight - {data[category]['category_details']['weight']}</span>
                        </h2>
                        <div id={"collapse" + (category)} className="accordion-collapse collapse show" aria-labelledby={"indicator" + (category)} data-bs-parent="#indicator-accordionExample">
                            <div className="accordion-body">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <div className="indicator-select mtb-15">
                                            <label>Domain</label>
                                            <select className="form-select" onChange={changeDomain}>
                                                {Object.keys(options).map((domain: any, index: number) => {
                                                    if (domain !== 'category_details') {
                                                        return <option key={index} value={domain}>{domain} - {options[domain]['name']}</option>
                                                    }
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <div className="indicator-score">
                                            <h3>
                                                Total Indicators
                                            </h3>
                                            <p>
                                                {indicatorCount}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <div className="indicator-score">
                                            <h3>
                                                Total Score
                                            </h3>
                                            <p>
                                                {totalScore.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="indicator-table table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sl.No.</th>
                                                <th scope="col">Indicators</th>
                                                <th scope="col">Data Source</th>
                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {indicatorRows.map((indicator: any, index: number) => {
                                                return <tr key={index}>
                                                    <td>{indicator['indicator_id']}</td>
                                                    <td>{indicator['description']}</td>
                                                    <td>{indicator['source']}</td>
                                                    <td>{indicator['score'].toFixed(2)}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                } else {
                    return <div className="accordion-item" key={category}>
                        <h2 className="accordion-header" id={"indicator" + (category)} onClick={() => changeAccordian(category)}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + (category)} aria-expanded="false" aria-controls={"collapse" + (category)}>
                                <img src={require('src/assets/images/' + (data[category]['category_details']['image']) + '.svg')} alt="icon" className="img-fluid" />
                                Category {index + 1} - {data[category]['category_details']['name']}
                            </button>
                            <span className="txt-black">Weight - {data[category]['category_details']['weight']}</span>
                        </h2>
                        <div id={"collapse" + (category)} className="accordion-collapse collapse" aria-labelledby={"indicator" + (category)} data-bs-parent="#indicator-accordionExample">
                            <div className="accordion-body">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <div className="indicator-select mtb-15">
                                            <label>Domain</label>
                                            <select className="form-select" onChange={changeDomain}>
                                                {Object.keys(options).map((domain: any, index: number) => {
                                                    if (domain !== 'category_details') {
                                                        return <option key={index} value={domain}>{domain} - {options[domain]['name']}</option>
                                                    }
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="indicator-score">
                                            <h3>
                                                Total Indicators
                                            </h3>
                                            <p>
                                                {indicatorCount}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="indicator-score">
                                            <h3>
                                                Total Score
                                            </h3>
                                            <p>
                                                {totalScore.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="indicator-table">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sl.No.</th>
                                                <th scope="col">Indicators</th>
                                                <th scope="col">Data Source</th>
                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {indicatorRows.map((indicator: any, index: number) => {
                                                return <tr key={index}>
                                                    <td>{indicator['indicator_id']}</td>
                                                    <td>{indicator['description']}</td>
                                                    <td>{indicator['source']}</td>
                                                    <td>{indicator['score'].toFixed(2)}</td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            })}
        </div>
    )
}

export default IndicatorAccordion