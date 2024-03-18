import React from 'react';

import videocall from 'src/assets/images/video-call.svg';
import learning from 'src/assets/images/learning.svg';
import growth from 'src/assets/images/growth.svg';


const PmsgriCategories = () => {
    return (
        <section className="pgicategory PmsgriCategories ptb-60 bg-grey" id="PM_Features">
        <div className="container">
           <div className="row">
              <div className="col-md-12">
                 <div className="common-content text-start">
                    <h2 className="heading-blue">PM SHRI Features</h2>
                    <p className="desc-black col-md-12 col-lg-8">The PGI-D scores are the aggregate score of 6 categories of educational attainment of districts viz., Outcomes, Effective classNameroom Interactions, Infrastructure Facilities &amp; Student’s Entitlements, School Safety &amp; Child Protection, Digital Learning and Governance Process.  The category-wise analysis brings out areas of good practices and weak links among districts providing insights into future action plan.</p>
                 </div>
              </div>
              <div className="col-md-4 mt-plus-8">
                 <div className="pgicategory-card aos-init" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src= {videocall} alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">Digital Learning (DL)</h3>
                       <p className="pgicategory-card-desc">The domains and indicators in this category primarily deal with key areas that effect learning of
                          children in digital mode. It includes internet facility for pedagogical purposes, computer-assisted
                          teaching learning facility and Student-to-Computer Ratio.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="pgicategory-card aos-init aos-animate" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src="/static/media/infrastructure.166c94f49c1b85b512dccfb57f538409.svg" alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">Infrastructure, Facilities, Student Entitlements (IF &amp; SE)</h3>
                       <p className="pgicategory-card-desc">The domains and indicators in this domain are mainly related to infrastructure in schools to enable
                          adequate facilities for teaching and learning. These include availability of study material, school
                          uniform, CWSN aid &amp; appliances, scholarships and incentives to girls Science and Computer
                          laboratories at secondary and senior secondary level, libraries, library books, kitchen garden, sports
                          equipments etc.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 mt-minus-11">
                 <div className="pgicategory-card aos-init aos-animate" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src= {learning} alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">Outcomes</h3>
                       <p className="pgicategory-card-desc">Domains covered under this category are mainly Learning Outcomes &amp; Quality (LOQ), Access
                          Outcomes (AO) and Teacher Availability &amp; Professional Development Outcome (TAPDO).
                          The indicators in these domains mainly deal with the net enrolment ratio, Retention rate, Transition
                          rate, trained teachers availability, pupil teacher ratio and performance of students in Language and
                          Mathematics in standard 3, 5, 8 and 10 of Govt. and aided schools.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 mt-minus-02">
                 <div className="pgicategory-card aos-init" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src= {growth} alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">Governance Processes (GP)</h3>
                       <p className="pgicategory-card-desc">This category deals with indicators relating to management and administration of school education.
                          This includes Samagra Siksha Funds utilisation, Performance and training of cluster resource
                          coordinators, Attendance monitoring and training and availability of head teachers and principals.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 mt-minus-6">
                 <div className="pgicategory-card aos-init" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src="/static/media/team.7c368de39d4aa722d19cbab0a6e53e91.svg" alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">School Safety and Child Protection (SS &amp; CP)</h3>
                       <p className="pgicategory-card-desc">School Safety and Child Protection category primarily defines domains and indicators that cater the
                          protection and safety of children in schools. This category pinpoints availability of qualified Child
                          Counsellor/ Psychologist, conduction of sensitization programme for teachers, staff, parents and
                          students, readiness for School Disaster Management Plan and conducting regular health check-up
                          and maintaining health-card.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
              <div className="col-md-4 mt-minus-19">
                 <div className="pgicategory-card aos-init" data-aos="fade-up">
                    <div className="pgicategory-card-content">
                       <img src="/static/media/teaching.07aa4e9208215f5c909fbf5b70cf1468.svg" alt="icon" className="img-fluid"/>
                       <h3 className="pgicategory-card-heading">Effective classNameroom Transaction (ECT)</h3>
                       <p className="pgicategory-card-desc">This category majorly deals with Learning Management (LM) and Learning Enrichment Activities
                          (LEA). Key indicators for measurement are conduction of regular formative assessments, utilization
                          of learning material in classNameroom transactions and participation in national flagship programmes like
                          Swachh Bharat and Jal Suraksha, FIT India , Ek Bharat Shresth Bharat and Nagrik Kartavya Palan
                          Abhiyan/ Constitution Day.
                       </p>
                       <div className="pgicategory-card-link"><a>More Insights<span className="material-icons-round">chevron_right</span></a></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default PmsgriCategories