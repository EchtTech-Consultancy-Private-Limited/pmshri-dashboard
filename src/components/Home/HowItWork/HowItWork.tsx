import React from 'react';
import './HowItWork.scss';
import image1 from 'src/assets/photo-gallery/photo-gallery1.png';
import image2 from 'src/assets/photo-gallery/photo-gallery2.png';
import image3 from 'src/assets/photo-gallery/photo-gallery3.png';
import image4 from 'src/assets/photo-gallery/photo-gallery4.png';
import image5 from 'src/assets/photo-gallery/photo-gallery5.png';
import image6 from 'src/assets/photo-gallery/photo-gallery6.png';
import image7 from 'src/assets/photo-gallery/photo-gallery7.png';

import BorderButton from 'src/components/Shared/Button/BorderButton';
import { Link } from 'react-router-dom';

const HowItWork = () => {
    return (
        
  

<section id="methodology" className="portfolio sections-bg gallery ptb-60 bg-grey">


<div className="container" data-aos="fade-up">

    <h2 className="heading-blue text-center pb-5">Methodology</h2>

    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
        data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
        <div className="portfolio">
            <div className="portfolio-flters">
            
                  
                    <div className="filter-active" title="Photo Gallery">
                        <div className="row gy-4 portfolio-container">

                            <div className="col-xl-4 col-md-6 portfolio-item filter-photo">
                                <div className="portfolio-wrap">
                                    <a href={image1} data-gallery="portfolio-gallery-app"
                                        className="glightbox"><img src={image1} className="img-fluid"
                                            alt="photo-gallery1" /></a>
                                    <div className="portfolio-info">
                                        <h4><a title="More Details">Stage 1</a></h4>
                                        <p>The PM SHRI scores are the aggregate score of 6 categories of educational attainment of districts viz., Outcomes, Effective Classroom Interactions, Infrastructure Facilities & Student’s Entitlements </p>

                                        <div className="howitwork-btn mt-4">
                                <Link to="/methodology">
                                    <BorderButton />
                                </Link>
                            </div>

                                    </div>
                                </div>
                            </div>

                          

                            <div className="col-xl-4 col-md-6 portfolio-item filter-photo">
                                <div className="portfolio-wrap">
                                    <a href={image7} data-gallery="portfolio-gallery-app"
                                        className="glightbox"><img src={image7} className="img-fluid"
                                            alt="photo-gallery3" />
                                    </a>
                                    <div className="portfolio-info">
                                        <h4><a title="More Details">Stage 2</a></h4>
                                        <p>The PM SHRI scores are the aggregate score of 6 categories of educational attainment of districts viz., Outcomes, Effective Classroom Interactions, Infrastructure Facilities & Student’s Entitlements </p>

                                        <div className="howitwork-btn mt-4">
                                <Link to="/methodology">
                                    <BorderButton />
                                </Link>
                            </div>
                                    </div>
                                </div>
                            </div>


                          

                            <div className="col-xl-4 col-md-6 portfolio-item filter-photo">
                                <div className="portfolio-wrap">
                                    <a href={image2} data-gallery="portfolio-gallery-app"
                                        className="glightbox"><img src={image5} className="img-fluid"
                                            alt="photo-gallery5" /></a>
                                    <div className="portfolio-info">
                                        <h4><a title="More Details">Stage 3</a></h4>
                                        <p>The PM SHRI scores are the aggregate score of 6 categories of educational attainment of districts viz., Outcomes, Effective Classroom Interactions, Infrastructure Facilities & Student’s Entitlements </p>

                                        <div className="howitwork-btn mt-4">
                                <Link to="/methodology">
                                    <BorderButton />
                                </Link>
                            </div>
                                    </div>
                                </div>
                            </div>
                                                     
                        </div>
                    </div>
                   
               
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

export default HowItWork;