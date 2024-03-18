import React from 'react';
import PriCategoryCard from './PgiCategoryCard/PriCategoryCard';
import equity from 'src/assets/images/equity.png';
import quality from 'src/assets/images/quality.png';
import challenge from 'src/assets/images/challenge.png';
import monitaring from 'src/assets/images/monitaring.png';
import team from 'src/assets/images/team.svg';

const PgiCategory = () => {
    return (
        <section className="pgicategory ptb-60 bg-grey pt-0" id="PM_Features">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="common-content text-start">
                            <h2 className="heading-blue mb-4">
                                PM SHRI Features
                            </h2>
                            {/* <p className="desc-black col-md-12 col-lg-12">
                            The PM SHRI schools’ scheme is based on development of sub-domains of six major pillars derived from 9 chapters of NEP 2020, which are as follows:
                            </p> */}
                           
                        </div>
                    </div>
                    <div className="col-md-3">                        

                           <div className="pgicategory-card bg-white" data-aos="fade-up">
                                <div className="pgicategory-card-content">
                                 <span className='icons'><img src={challenge} alt="icon" className="img-fluid" /></span>   
                                    <h3 className="pgicategory-card-heading">
                                       Selection through Challenge Method with Three Stage Process
                                    </h3>
                                  
                                  <ul className='bullet-points'>
                                    <li>
                                       States / UTs to sign MoU for implementing NEP 2020
                                    </li>
                                    <li>
                                      Pre-selection of a pool of schools based on identified parameters
                                    </li>
                                    <li>
                                       Schools that have crossed 2nd stage will enter 3rd Stage
                                    </li>
                                  </ul>                                   

                                </div>
                            </div>
                                        
                    </div>
                    <div className="col-md-3">                        

                            <div className="pgicategory-card bg-white" data-aos="fade-up">
                                <div className="pgicategory-card-content">
                                <span className='icons'>  <img src={monitaring} alt="icon" className="img-fluid" /></span>
                                    <h3 className="pgicategory-card-heading">
                                      Empowering students to become nation-builders Monitoring Mechanism
                                    </h3>
                                  
                                  <ul className='bullet-points dot'>
                                    <li>
                                       Monitoring at Ministry/State/ District/BRC/CRC level
                                    </li>
                                    <li>
                                       School Quality Assessment Framework (SQAF)
                                    </li>
                                    <li>
                                       Committee under District Collector to monitor
                                    </li>
                                  </ul>                                   

                                </div>
                            </div>

                    </div>
                    <div className="col-md-3">
                         <div className="pgicategory-card bg-white" data-aos="fade-up">
                            <div className="pgicategory-card-content">
                            <span className='icons'>    <img src={team} alt="icon" className="img-fluid" /></span>
                                <h3 className="pgicategory-card-heading">
                                   Preparing future-ready citizens
                                </h3>
                                
                                <ul className='bullet-points dot'>
                                <li>
                                    Schools to showcase all the components of NEP 2020
                                </li>
                                <li>
                                   Each child registered with unique ID
                                </li>
                                <li>
                                  Enrolment and learning progress of every child to be tracked
                                </li>
                                </ul>                                   

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-none">
                        <PriCategoryCard
                            img={equity}
                            id='6'
                            heading="Pillar 4"
                            description="Inclusive Practices and Gender Equity"
                        />
                    </div>        
                    <div className="col-md-3">
                         <div className="pgicategory-card bg-white" data-aos="fade-up">
                            <div className="pgicategory-card-content">
                            <span className='icons'>  <img src={quality} alt="icon" className="img-fluid" /></span>
                                <h3 className="pgicategory-card-heading">
                                   SQAF
                                </h3>
                                
                                <ul className='bullet-points dot'>
                                <li>
                                  Curriculum,Pedagogy & Assessment
                                </li>
                                <li>
                                   Infrastructure - Adequacy, Functionality, Aesthetics and Safety
                                </li>
                                <li>
                                   Human Resources & Inclusive Practices
                                </li>
                                </ul>                                   

                            </div>
                        </div>
                    </div>


                    {/* <div className="col-md-2">
                        <PriCategoryCard
                            img={governance}
                            id='4'
                            heading="Pillar 5"
                            description="Management, Monitoring and Governance "
                        />
                    </div>
                    <div className="col-md-2 padd-card">
                        <PriCategoryCard
                            img={Satisfaction}
                            id='2'
                            heading="Pillar 6"
                            description="Beneficiary Satisfaction"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default PgiCategory