import React from 'react';
import './Gallery.scss';
import image1 from 'src/assets/photo-gallery/photo1.jpeg';
import image2 from 'src/assets/photo-gallery/photo2.jpeg';
import image3 from 'src/assets/photo-gallery/photo3.jpeg';
import image4 from 'src/assets/photo-gallery/photo-gallery4.png';
import image5 from 'src/assets/photo-gallery/photo-gallery5.png';
import image6 from 'src/assets/photo-gallery/photo-gallery6.png';
import image7 from 'src/assets/photo-gallery/photo7.jpeg';
import image8 from 'src/assets/photo-gallery/photo-gallery8.png';
import image9 from 'src/assets/photo-gallery/photo-gallery9.png';
import BorderButton from 'src/components/Shared/Button/BorderButton';
import videoPath1 from 'src/assets/images/v.mp4';
import videoPath2 from 'src/assets/images/video2.mp4';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

const Gallery = () => {

    return (

        <section id="gallery" className="portfolio sections-bg gallery ptb-60 bg-white">


            <div className="container" data-aos="fade-up">

                <h2 className="heading-blue text-center pb-5">Gallery</h2>

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                    data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                    <div className="portfolio">
                        <div className="portfolio-flters">
                            <Tabs
                                defaultActiveKey="All"
                                id="justify-tab-example"
                            >


                                <Tab eventKey="All" className="filter-active" title="All">
                                    <div className="row gy-4 portfolio-container">

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image1} className="img-fluid"
                                                        alt="photo-gallery1" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI Schools</a></h4>
                                                    <p>Nurturing well-rounded individuals equipped with 21st century skills</p>
                                                </div>
                                            </div>
                                        </div>

                                      

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image7} className="img-fluid"
                                                        alt="photo-gallery3" />
                                                </a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Quality Assurance</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-md-6 portfolio-item filter-video">
                                            <div className="portfolio-wrap call-to-action">
                                                <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                                    <video width="100%" height="315" src={videoPath1} title="YouTube video player" controls></video>

                                                </div>


                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6 portfolio-item filter-video">
                                            <div className="portfolio-wrap call-to-action">
                                                <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                                    <video width="100%" height="315" src={videoPath2} title="YouTube video player" controls></video>

                                                </div>


                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image2} className="img-fluid img-new"
                                                        alt="photo-gallery5" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Major Pillars</a></h4>
                                                    <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image3} className="img-fluid img-new"
                                                        alt="photo-gallery5" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Three Stage Process</a></h4>
                                                    <p>Selection through Challenge Method with First Stage Three Stage Process </p>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </Tab>
                                <Tab eventKey="Photo-Gallery" className="filter-active" title="Photo Gallery">
                                    <div className="row gy-4 portfolio-container">

                                    <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image1} className="img-fluid"
                                                        alt="photo-gallery1" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI Schools</a></h4>
                                                    <p>Nurturing well-rounded individuals equipped with 21st century skills</p>
                                                </div>
                                            </div>
                                        </div>

                                      

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image7} className="img-fluid img-new"
                                                        alt="photo-gallery3" />
                                                </a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Quality Assurance</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>


                                      

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image2} className="img-fluid"
                                                        alt="photo-gallery5" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Major Pillars</a></h4>
                                                    <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image3} className="img-fluid"
                                                        alt="photo-gallery5" /></a>
                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">Three Stage Process</a></h4>
                                                    <p>Selection through Challenge Method with First Stage Three Stage Process </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div>
                                            <Link className="btn red-bdr-btn" to="/Stategallery">View more</Link>
                                            </div>
                                        </div>

                                        {/* <div className="col-xl-4 col-md-6 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image4} className="img-fluid"
                                                        alt="photo-gallery7" /></a>
                                                <div className="portfolio-info">
                                                <h4><a title="More Details">Major Pillars</a></h4>
                                                    <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 portfolio-item filter-photo">
                                            <div className="portfolio-wrap">
                                                <a data-gallery="portfolio-gallery-app"
                                                    className="glightbox"><img src={image5} className="img-fluid"
                                                        alt="photo-gallery8" /></a>
                                                <div className="portfolio-info">
                                                <h4><a title="More Details">Major Pillars</a></h4>
                                                    <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                                </div>
                                            </div>
                                        </div> */}


                                      
                                    </div>
                                </Tab>
                                <Tab eventKey="Video Gallery" className="filter-active" title="Video Gallery" >
                                    <div className="row gy-4 portfolio-container">

                                      
                                        <div className="col-xl-4 col-md-6 portfolio-item filter-video">
                                            <div className="portfolio-wrap call-to-action">
                                                <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                                <video width="100%" height="240" src={videoPath1} title="YouTube video player" controls></video>

                                                </div>


                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>

                                    

                                        <div className="col-xl-4 col-md-6 portfolio-item filter-video">
                                            <div className="portfolio-wrap call-to-action">
                                                <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                                <video width="100%" height="240" src={videoPath2} title="YouTube video player" controls></video>

                                                </div>


                                                <div className="portfolio-info">
                                                    <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                                    <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-md-12">
                                        <div className="mt-5">
                                            <div>
                                            <Link className="btn red-bdr-btn" to="/Videogallery">View more</Link>
                                            </div>
                                        </div>
                                        </div>
                                       
                                      

                                       
                                    </div>
                                </Tab>
                            </Tabs>
                            {/* <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-photo">Photo Gallery</li>
                            <li data-filter=".filter-video">Video Gallery</li> */}

                        </div>
                    </div>



                </div>

            </div>
        </section>

    )
}

export default Gallery;