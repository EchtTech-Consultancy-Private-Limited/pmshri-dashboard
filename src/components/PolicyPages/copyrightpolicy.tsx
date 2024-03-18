import React from 'react';
import './privacy.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Copyrightpolicy() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center text-white pb-0"> Copyright Policy</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutpgi ptb-30 pt-4">
                <div className="container">

                    <div className="row">
                    <div className="col-md-3">
                            <div className='privacy-sidebar-box'>
                                <ul className="list-card-m">
                                    <li><Link to="/terms-condition" className='list-item-privacy'>
                                        <span className="material-icons-round">
                                            chevron_right
                                        </span>
                                        Terms & Conditions
                                    </Link>
                                    </li>

                                    <li>
                                        <Link to="/privacy-policy" className="list-item-privacy">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/copyright_policy" className="list-item-privacy">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Copyright Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/hyperlink-policy" className="list-item-privacy">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Hyperlink Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/disclaimer" className="list-item-privacy">
                                            <span className="material-icons-round">
                                                chevron_right
                                            </span>
                                            Disclaimer
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p className="desc-black">
                                Material featured on this site may be reproduced free of charge in any format or media without requiring specific permission. This is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context. Where the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material does not extend to any material on this site, which is explicitly identified as being the copyright of a third party. Authorisation to reproduce such material must be obtained from the copyright holders concerned.
                            </p>


                        </div>
                       
                    </div>
                </div>

            </section>
        </>
    )
}

export default Copyrightpolicy;