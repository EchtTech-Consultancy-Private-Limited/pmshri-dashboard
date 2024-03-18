import React from 'react'

const IndicatorAccordionItem = (props: any) => {
  return (
    <>
        <div className="accordion-item">
            <h2 className="accordion-header" id={props.indicatorId}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#'+(props.collapseId)} aria-expanded="true" aria-controls={props.collapseId}>
                <img src={props.img} alt="icon" className="img-fluid" />
                Category 1 - Outcomes
            </button>
            <span className="txt-black">Weight - 290</span>
            </h2>
            <div id={props.collapseId} className="accordion-collapse collapse show" aria-labelledby={props.indicatorId} data-bs-parent="#indicator-accordionExample">
            <div className="accordion-body">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="indicator-select mtb-15">
                            <label>Domain</label>
                            <select className="form-select">
                                <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                                <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                                <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                                <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="indicator-score">
                            <h3>
                                Total Indicators
                            </h3>
                            <p>
                                12
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="indicator-score">
                            <h3>
                                Total Score
                            </h3>
                            <p>
                                180
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
                        <tr>
                            <td>1.1.1</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.2</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.3</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.4</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        {/* <div className="accordion-item">
            <h2 className="accordion-header" id="indicatorTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <img src={props.img} alt="icon" className="img-fluid" />
                Category 2 - Effective Classroom Transaction (ECT)
            </button>
            <span className="txt-black">Weight - 90</span>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="indicatorTwo" data-bs-parent="#indicator-accordionExample">
            <div className="accordion-body">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="indicator-select mtb-15">
                        <label>Domain</label>
                        <select className="form-select">
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="indicator-score">
                        <h3>
                            Total Indicators
                        </h3>
                        <p>
                            12
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="indicator-score">
                        <h3>
                            Total Score
                        </h3>
                        <p>
                            180
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
                        <tr>
                            <td>1.1.1</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.2</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.3</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.4</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="indicatorThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <img src={props.img} alt="icon" className="img-fluid" />
                Category 3 - Infrastructure, Facilities, Student Entitlements (IF & SE)
            </button>
            <span className="txt-black">Weight - 51</span>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="indicatorThree" data-bs-parent="#indicator-accordionExample">
            <div className="accordion-body">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="indicator-select mtb-15">
                        <label>Domain</label>
                        <select className="form-select">
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        <option>1.1 - Learning Outcomes & Quality (LOQ)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="indicator-score">
                        <h3>
                            Total Indicators
                        </h3>
                        <p>
                            12
                        </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="indicator-score">
                        <h3>
                            Total Score
                        </h3>
                        <p>
                            180
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
                        <tr>
                            <td>1.1.1</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.2</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.3</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>1.1.4</td>
                            <td>% of children in Grade 3 who have achieved minimum proficiency in literacy – Govt. and aided schools</td>
                            <td>NAS</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div> */}
    </>
  )
}

export default IndicatorAccordionItem