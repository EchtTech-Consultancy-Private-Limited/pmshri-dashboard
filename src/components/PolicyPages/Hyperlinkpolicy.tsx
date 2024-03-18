import React from 'react';
import './privacy.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Hyperlinkpolicy() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center text-white pb-0"> Hyperlink Policy</h2>
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
                            <h4 className='privacy-heading'>
                                Links to External Websites/Portals
                            </h4>
                            <p className="desc-black">
                                At many places in this website, you shall find links to other websites/portals. This links have been placed for your convenience. Ministry of Education is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked pages.
                            </p>
                            <h4 className='privacy-heading'>
                                Links to Ministry of Education Website by other Websites/Portals
                            </h4>
                            <p className="desc-black">
                                Prior permission is required before hyperlink are directed from any website/portal to this site. Permission for the same, stating the nature of the content on the pages from where the link has to be given and the exact language of the hyperlink should be obtained by sending a request to stake holder
                            </p>

                        </div>
                       
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hyperlinkpolicy;