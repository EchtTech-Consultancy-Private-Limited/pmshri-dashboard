import React from 'react';
import './privacy.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Disclaimer() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center text-white pb-0"> Disclaimer</h2>
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
                                This Website is designed & developed by National Informatics Center and maintained by Ministry of Education, Government of India.
                            </p>

                            <p className="desc-black">
                                The contents of this website are for information purposes only, enabling the public at large to have a quick and an easy access to information and do not have any legal sanctity. Though every effort is made to provide accurate and updated information, it is likely that the some details such as telephone numbers, names of the officer holding a post, etc may have changed prior to their update in the website. Hence, we do not assume any legal liability on the completeness, accuracy or usefulness of the contents provided in this website.
                            </p>
                            <p className="desc-black">
                                The links are provided to other external sites in some web pages/documents. We do not take responsibility for the accuracy of the contents in those sites. The hyperlink given to external sites do not constitute an endorsement of information, products or services offered by these sites.
                            </p>
                            <p className="desc-black">
                                Despite our best efforts, we do not guarantee that the documents in this site are free from infection by computer viruses etc.
                            </p>
                            <p className="desc-black">
                                We welcome your suggestions to improve this website and request that error(if any) may kindly be brought to our notice.
                            </p>

                        </div>
                      
                    </div>
                </div>

            </section>
        </>
    )
}

export default Disclaimer;