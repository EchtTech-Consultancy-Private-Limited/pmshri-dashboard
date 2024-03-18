import React from 'react';
import './privacy.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function TermsCondition() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center text-white pb-0"> Terms & Condition</h2>
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
                                This website is designed, updated and maintained by Ministry of Education, Government of India.
                            </p>
                            <p className="desc-black">
                                Though all efforts have been made to ensure the accuracy of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Ministry of Education and/or other source(s), and to obtain appropriate professional advice.
                            </p>
                            <p className="desc-black">
                                Under no circumstances will Ministry of Education be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
                            </p>
                            <p className="desc-black">
                                These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
                            </p>
                            <p className="desc-black">
                                The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government / private organizations. Ministry of Education is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the Ministry of Education website and are subject to the privacy and security policies of the owners/sponsors of the outside website. Ministry of Education, does not guarantee the availability of such linked pages at all times. Ministry of Education cannot authorize the use of copyrighted materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website. Ministry of Education, does not guarantee that linked websites comply with Indian Government Web Guidelines.
                            </p>
                            <h4 className='privacy-heading'>
                                Disclaimer
                            </h4>
                            <p className="desc-black">
                                This website of the Ministry of Education is being maintained for information purposes only. Even though every effort is taken to provide accurate and up to date information, officers making use of the circulars posted on the website are advised to get in touch with the Ministry of Education whenever there is any doubt regarding the correctness of the information contained therein. In the event of any conflict between the contents of the circulars on the website and the hard copy of the circulars issued by Ministry of Education, the information in the hard copy should be relied upon and the matter shall be brought to the notice of the Ministry of Education.
                            </p>

                        </div>
                       
                    </div>
                </div>

            </section>
        </>
    )
}

export default TermsCondition;