import React from 'react';
import './privacy.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Privacypolicy() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center text-white pb-0"> Privacy Policy</h2>
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
                                    <li>
                                        <Link to="/terms-condition" className='list-item-privacy'>
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
                                As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information.
                            </p>
                            <h4 className='privacy-heading'>
                                Site Visit Data:
                            </h4>
                            <p className="desc-black">
                                This website records your visit and logs the following information for statistical purposes your server's address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and the documents downloaded and the previous Internet address from which you linked directly to the site.
                            </p>
                            <p className="desc-black">
                                We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider's logs.
                            </p>
                            <h4 className='privacy-heading'>
                                Cookies:
                            </h4>
                            <p className="desc-black">
                                A cookie is a piece of software code that an internet web site sends to your browser when you access information at that site. This site does not use cookies.
                            </p>
                            <h4 className='privacy-heading'>
                                Email Management:
                            </h4>
                            <p className="desc-black">
                                Your email address will only be recorded if you choose to send a message. It will only be used for the purpose for which you have provided it and will not be added to a mailing list. Your email address will not be used for any other purpose, and will not be disclosed, without your consent.
                            </p>
                            <h4 className='privacy-heading'>
                                Collection of Personal Information:
                            </h4>
                            <p className="desc-black">
                                If you are asked for any other Personal Information you will be informed how it will be used if you choose to give it. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the webmaster through the contact us page.
                            </p>
                            <h4 className='privacy-heading'>
                                Note:
                            </h4>
                            <p className="desc-black">
                                The use of the term "Personal Information" in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.
                            </p>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Privacypolicy;