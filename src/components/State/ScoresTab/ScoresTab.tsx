import { ScoresTabDataModel, ScoresTabModel } from 'src/models/dpgi';
import React, { useEffect } from 'react';
import './ScoresTab.scss';

const ScoresTab = (props: ScoresTabModel) => {
    const { data, state } = props
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className="scorestab-wrap">
            <h2 className="heading-sm">
                Categories Wise Score of All {state.split(' ').map((element: string) => {
                    return element.charAt(0).toUpperCase() + element.slice(1) + ' '
                })} Districts
            </h2>
            <ul className="nav scores-tabs" id="scoresTab" role="tablist">
                {Object.keys(data).map((category: any, index: number) => {
                    if (index === 0) {
                        return <li key={index} className="nav-item" role="presentation">
                            <button className="nav-link active" id={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', '')) + "-tab"} data-bs-toggle="tab" data-bs-target={"#nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} type="button" role="tab" aria-controls={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} aria-selected="true">{data[category].short_name}</button>
                        </li>
                    }
                    else {
                        return <li key={index} className="nav-item" role="presentation">
                            <button className="nav-link" id={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', '')) + "-tab"} data-bs-toggle="tab" data-bs-target={"#nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} type="button" role="tab" aria-controls={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} aria-selected="false">{data[category].short_name}</button>
                        </li>
                    }
                })}

                {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-outcome-tab" data-bs-toggle="tab" data-bs-target="#nav-outcome" type="button" role="tab" aria-controls="nav-outcome" aria-selected="false">Outcome (10)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-ect-tab" data-bs-toggle="tab" data-bs-target="#nav-ect" type="button" role="tab" aria-controls="nav-ect" aria-selected="false">ECT (4)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-ifse-tab" data-bs-toggle="tab" data-bs-target="#nav-ifse" type="button" role="tab" aria-controls="nav-ifse" aria-selected="false">IF & SE (8)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-sscp-tab" data-bs-toggle="tab" data-bs-target="#nav-sscp" type="button" role="tab" aria-controls="nav-sscp" aria-selected="false">SS & CP (3)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-dl-tab" data-bs-toggle="tab" data-bs-target="#nav-dl" type="button" role="tab" aria-controls="nav-dl" aria-selected="false">DL (5)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nav-gp-tab" data-bs-toggle="tab" data-bs-target="#nav-gp" type="button" role="tab" aria-controls="nav-gp" aria-selected="false">GP (3)</button>
                </li> */}
            </ul>

            <div className="tab-content" id="scoresTabContent">
                {
                    Object.keys(data).map((category: any, index: number) => {
                        if (index === 0) {
                            return <div key={index} className="tab-pane fade show active" id={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} role="tabpanel" aria-labelledby={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', '')) + "-tab"}>
                                <div className="scoretab-list">
                                    <div className="scoretab-listName">
                                        <h2>{data[category].name}</h2>
                                    </div>
                                    {Object.keys(data[category].district).map((grade: string) => {
                                        if (data[category]['district'][grade].length) {
                                            return <div className='color-striped'>
                                                <ul key={grade} className={"row card-" + grade.toLowerCase()}>
                                                    <h3>{grade}</h3>
                                                    {data[category]['district'][grade].map((district: any) => {
                                                        return <li key={district.district_cd} className="col-md-6">
                                                            <div key={district.district_cd} className="scoretab-content">
                                                                <p>{district.district_name}</p>
                                                                <span>{district.score}/{data[category].total_score}</span>
                                                            </div>
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        }
                                    })}
                                </div>
                            </div>
                        }
                        else {
                            return <div key={index} className="tab-pane fade" id={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', ''))} role="tabpanel" aria-labelledby={"nav-" + (data[category].short_name.replace(/\s+/g, '').replace('&', '')) + "-tab"}>
                                <div className="scoretab-list">
                                    <div className="scoretab-listName">
                                        <h2>{data[category].name}</h2>
                                    </div>
                                    {Object.keys(data[category].district).map((grade: string) => {
                                        if (data[category]['district'][grade].length) {
                                            return <div className='color-striped'>
                                                <ul key={grade} className={"row card-" + grade.toLowerCase()}>
                                                    <h3>{grade}</h3>
                                                    {data[category]['district'][grade].map((district: any) => {
                                                        return <li key={district.district_cd} className="col-md-6">
                                                            <div key={district.district_cd} className="scoretab-content">
                                                                <p>{district.district_name}</p>
                                                                <span>{district.score}/{data[category].total_score}</span>
                                                            </div>
                                                        </li>
                                                    })}
                                                </ul></div>
                                        }
                                    })}
                                </div>
                            </div>
                        }
                    })
                }
                {/* <div className="tab-pane fade show active" id="nav-overall" role="tabpanel" aria-labelledby="nav-overall-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: any) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.gtotal}/600</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-outcome" role="tabpanel" aria-labelledby="nav-outcome-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: any) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat1}/290</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-ect" role="tabpanel" aria-labelledby="nav-ect-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: ScoresTabDataModel) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat2}/90</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-ifse" role="tabpanel" aria-labelledby="nav-ifse-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: ScoresTabDataModel) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat3}/51</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-sscp" role="tabpanel" aria-labelledby="nav-sscp-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: ScoresTabDataModel) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat4}/35</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-dl" role="tabpanel" aria-labelledby="nav-dl-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: ScoresTabDataModel) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat5}/50</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-gp" role="tabpanel" aria-labelledby="nav-gp-tab">
                    <div className="scoretab-list">
                        <ul className="row">
                            {data.map((district: ScoresTabDataModel) => {
                                return <li key={district.district_cd} className="col-md-6">
                                    <div className="scoretab-content">
                                        <p>{district.district_name}</p>
                                        <span>{district.cat6}/84</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ScoresTab