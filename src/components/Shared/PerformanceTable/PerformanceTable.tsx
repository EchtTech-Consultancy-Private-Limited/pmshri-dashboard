import { getAllCategories, setCategoriesWiseData } from 'src/actions/dpgi.action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';
import './PerformanceTable.scss';

const PerformanceTable = (props: any) => {
    const { year, state } = props
    const dispatch = useDispatch()
    const data = useSelector<StoreModel>(store => store.stateCategoryWiseData) as InitialStateModel
    const allCategory = useSelector<StoreModel>(store => store.allCategory) as InitialStateModel
    const [catId, setCatId] = useState('0');
    const [options, setOption] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [finalData, setFinalData] = useState({}) as any;
    useEffect(() => {
        if (year !== undefined) {
            dispatch(getAllCategories(year))
            dispatch(setCategoriesWiseData(year, state, catId))
        }
    }, [year, catId, state])

    useEffect(() => {
        if (!data.loading && data.loaded) {
            setIsLoading(false);
            setFinalData(data.data.categoryWiseData)
        }
    }, [data])

    useEffect(() => {
        if (!allCategory.loading && allCategory.loaded) {
            setOption(allCategory.data)
        }
    }, [allCategory])

    const changeCategory = (event: EventModel) => {
        setCatId(event.target.value)
    }

    return (
        <div className="performance-table-wrap">
            <div className="row">
                <div className="col-md-3">
                    <div className="indicator-select mtb-15">
                        <label>Categories</label>
                        <select className="form-select" onChange={changeCategory}>
                            <option value='0'>Overall</option>
                            {
                                options.map((option: any) => {
                                    return <option key={option.cat_id} value={option.cat_id}>{option.cat_desc}</option>
                                })}
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="peformance-table">
                        <table className="table table-striped color-striped">
                            <thead>
                                <tr>
                                    <th scope="col">{state === 'India' ? 'States' : 'Districts'}</th>
                                    <th scope="col" className="dark-blue">
                                        <div className="text-rotate">
                                            Daksh
                                        </div>
                                    </th>
                                    <th scope="col" className="blue">
                                        <div className="text-rotate">
                                            Utkarsh
                                        </div>
                                    </th>
                                    <th scope="col" className="light-blue">
                                        <div className="text-rotate">
                                            Atti-utam
                                        </div>
                                    </th>
                                    <th scope="col" className="dark-green">
                                        <div className="text-rotate">
                                            Uttam
                                        </div>
                                    </th>
                                    <th scope="col" className="light-green">
                                        <div className="text-rotate">
                                            Prachesta-1
                                        </div>
                                    </th>
                                    <th scope="col" className="yellow">
                                        <div className="text-rotate">
                                            Prachesta-2
                                        </div>
                                    </th>
                                    <th scope="col" className="orange">
                                        <div className="text-rotate">
                                            Prachesta-3
                                        </div>
                                    </th>
                                    <th scope="col" className="light-pink">
                                        <div className="text-rotate">
                                            Akanshi-1
                                        </div>
                                    </th>
                                    <th scope="col" className="pink">
                                        <div className="text-rotate">
                                            Akanshi-2
                                        </div>
                                    </th>
                                    <th scope="col" className="red">
                                        <div className="text-rotate">
                                            Akanshi-3
                                        </div>
                                    </th>
                                    {/* <th scope="col">Total</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {state === 'India' ? isLoading ? <></> : Object.keys(finalData).map((state: any) => {
                                    return <tr key={state}>
                                        <td>{finalData[state].state_name}</td>
                                        <td>{finalData[state]['grades']['Daksh']}</td>
                                        <td>{finalData[state]['grades']['Utkarsh']}</td>
                                        <td>{finalData[state]['grades']['Ati-Uttam']}</td>
                                        <td>{finalData[state]['grades']['Uttam']}</td>
                                        <td>{finalData[state]['grades']['Prachesta-1']}</td>
                                        <td>{finalData[state]['grades']['Prachesta-2']}</td>
                                        <td>{finalData[state]['grades']['Prachesta-3']}</td>
                                        <td>{finalData[state]['grades']['Akanshi-1']}</td>
                                        <td>{finalData[state]['grades']['Akanshi-2']}</td>
                                        <td>{finalData[state]['grades']['Akanshi-3']}</td>
                                        {/* <td className="total-score">{finalData[state]['grades']['Total']}</td> */}
                                    </tr>
                                }) : isLoading ? <></> : Object.keys(finalData).map((district: any) => {
                                    return <tr key={district}>
                                        <td>{finalData[district].district_name}</td>
                                        <td>{finalData[district]['grades']['Daksh'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Utkarsh'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Ati-Uttam'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Uttam'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Prachesta-1'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Prachesta-2'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Prachesta-3'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Akanshi-1'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Akanshi-2'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        <td>{finalData[district]['grades']['Akanshi-3'] ? <span className="material-icons-round check-icon">
                                            done
                                        </span> : ''}</td>
                                        {/* <td className="total-score">{finalData[state]['grades']['Total']}</td> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PerformanceTable