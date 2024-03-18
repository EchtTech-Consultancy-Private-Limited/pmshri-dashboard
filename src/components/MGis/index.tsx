import GisMap from "./Mgis";
import "./SmallCard.css";

function Index() {
    return (
        <>
            <section className="aboutpgi ptb-30 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card map shadow bg-body rounded">
                                <GisMap />
                                <div style={{ right: '0px', paddingTop: '15%', position: 'absolute', zIndex: '25' }} >
                                    <ul id="myiconmenu" className="iconmenu">
                                        <li id="zoomfullext" data-toggle="tooltip" data-placement="left" title="Full Extent">
                                            <button id="zoomfullextButton">
                                                <img src="basemap-images/fullextent.png" alt="FullEXT" />
                                            </button>
                                        </li>
                                        <li id="zoomprev" data-toggle="tooltip" data-placement="left" title="ZoomOut">
                                            <button id="zoomprevButton">
                                                <img src="basemap-images/backward.png" alt="ZoomOut" />
                                            </button>
                                        </li>
                                        <li id="zoomnext" data-toggle="tooltip" data-placement="left" title="zoomIn">
                                            <button id="zoomnextButton">
                                                <img src="basemap-images/forward.png" alt="ZoomIn" />
                                            </button>
                                        </li>
                                        <li id="btnPrint" data-toggle="tooltip" data-placement="left" title="Print" className="subiconmenu">
                                            <button id="btnPrintButton">
                                                <img src="basemap-images/print.png" alt="print" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Select State</label>
                                        <select id="statedd" className="form-select" aria-label="Default select example" >
                                            <option>Select State</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Select District</label>
                                        <select id="distdd" className="form-select" aria-label="Default select example" >
                                            <option>Select District</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="small-card">
                                            <span className="icon"><img src="school-flag-1.svg" alt="" /></span>
                                            <div className="card-text">
                                                <h5>Government<br /></h5>
                                                <h6 >(States/UTs/KVS/NVS) <span className="schoolCount" id="govtSch"></span></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="small-card bg-purple">
                                            <span className="icon"><img src="school-flag-1.svg" alt="" /></span>
                                            <div className="card-text">
                                                <h5>KVS<br /></h5>
                                                <h6>Kendriya Vidyalaya Sangathan<span className="schoolCount" id="kvsSch"></span></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="small-card bg-dark-purple">
                                            <span className="icon"><img src="school-flag-1.svg" alt="" /></span>
                                            <div className="card-text">
                                                <h5>NVS<br /></h5>
                                                <h6>Navodaya Vidyalaya Samiti<span className="schoolCount" id="nvsSch"></span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;