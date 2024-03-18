import React from 'react';

import school from 'src/assets/images/school.png';
import wave from 'src/assets/images/wave1.png';
import learning from 'src/assets/images/learning.svg';
import growth from 'src/assets/images/growth.svg';


const VisionMissionCard = () => {
    return (
        <section className="pgicategory vision-mission-card ptb-60 pt-0 bg-grey position-relative">
        <div className="container">
        <img src={wave} alt="hero-banner" className='about-img1' />
           <div className="row">
              <div className="col-md-12">
                 <div className="common-content text-start">
                    <h2 className="heading-blue mb-3">PM SHRI Vision & Mission</h2>
                    <p className="desc-black col-md-12">
                      PM SHRI schools are envisioned to provide leadership in their respective regions in providing high-quality education in an equitable, inclusive and joyful school environment that takes care of the diverse background, multilingual needs, and different academic abilities of children and makes them active participants in their learning process.
                    </p>
                </div>
              </div>
            
              <div className="col-md-6">
                 <div className="pgicategory-card aos-init" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                     <span className='icons'><img src= {learning} alt="icon" className="img-fluid"/></span>
                       
                       <h3 className="pgicategory-card-heading">Vision Statement of PM SHRI Schools</h3>
                       <p className="pgicategory-card-desc">
                        PM SHRI schools shall set examples for the best in class in the country. The education in
                        these schools will be such that it will nurture lifelong learners who carry the acumen and desire
                        to learn, unlearn and relearn at all spectrums of life to become engaged, productive, and
                        contributing citizens for building an equitable, inclusive, and plural society as envisaged by the
                        National Education Policy 2020.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="col-md-6">
                 <div className="pgicategory-card pgicategory-card-2 aos-init aos-animate" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                    <span className='icons'><img src= {growth}  alt="icon" className="img-fluid"/> </span>
                       <h3 className="pgicategory-card-heading">Mission Statement of PM SHRI Schools</h3>
                       <p className="pgicategory-card-desc">
                        PM SHRI schools aim to prepare more than 14,500 exemplar schools in which every student
                        feels welcomed and cared for, where a safe and stimulating learning environment exists,
                        where a wide range of learning experiences are offered, and where good physical
                        infrastructure and appropriate resources conducive to learning are available to all students.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 mt-minus-11 d-none">
                 <div className="pgicategory-card aos-init aos-animate" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                    <span className='icons'>  <img src= {school} alt="icon" className="img-fluid"/></span>
                       <h3 className="pgicategory-card-heading">Quality Assurance of PM SHRI Schools</h3>
                       <p className="pgicategory-card-desc">
                       Benchmarks to be manifested in a PM SHRI School: <br/>
                        a) Showcase of NEP 2020 in school practices <br/>
                        b) Student registry– for tracking enrolment and learning progress <br/>
                        c) Exposure to 21st century skills <br/>
                        d) Sports, Arts and ICT facilities for every child <br/>
                        e) Sustainable and Green School <br/>
                        f) Every school linked to the local entrepreneurial ecosystem
                       </p>
                    </div>
                 </div>
              </div>
             
           </div>
        </div>
     </section>
    )
}

export default VisionMissionCard;