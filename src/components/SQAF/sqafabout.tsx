import { Link } from 'react-router-dom';
// import aboutImg1 from 'src/assets/images/aboutsqaf.png';
import aboutImg1 from 'src/assets/images/Education.png';

const sqafabout = () => {
    return (
        <section className="aboutpgi ptb-60 sqaf-bg" id="aboutPmshri">
            <div className="container">
                <div className="row align-items-center">
                    <div className='col-md-12'>
                        <div className="btn-wrap mb-3 float-end">
                            <a className="btn red-bdr-btn bg-danger text-white" href="/sqaf/school/login" target='_blank'>Login for School User</a>
                        </div>
                        <div className="btn-wrap mb-3 float-end">
                            <a className="btn red-bdr-btn bg-danger text-white me-2" href="/sqaf/user/login" target='_blank'>Login for National, State and District User</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="aboutpgiimg text-center about-sec" data-aos="fade-right">
                            <img src={aboutImg1} alt="hero-banner" className="img-fluid about-image-size" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="aboutpgi-content" data-aos="fade-left">
                            <div className="common-content">
                                <h2 className="heading-blue">
                                    About SQAF
                                </h2>
                                <p className="desc-black">
                                    The School Quality Assessment Framework is a tool designed to evaluate and monitor the qualitative and quantitative aspects of the school ecosystem. The dimensions and standards of this framework are identified and grouped into six domains in accordance with the guidelines of the NEP 2020. The SQAF stands as an integral pillar in the efforts to enhance the quality of education in the PM SHRI schools by obtaining as well as providing important data to all the stakeholders involved in education.
                                </p>
                                <p className="desc-black">
                                    <div className='pb-2'>
                                        <b>
                                            Why is SQAF designed?
                                        </b>
                                    </div>
                                    The School Quality Assessment Framework (SQAF) is designed to create a common vocabulary for communication within and across schools, ensuring uniform assessment and transparent engagement of all stakeholders. The SQAF will streamline assessment of school environment and produce comprehensive district and state-level reports. Its primary aim is to aid in improvement of educational standards in the PM SHRI schools and create a responsive, supportive and student-centred educational system.
                                </p>
                                {/* <div className="btn-wrap mt-3">
                                    <Link className="btn red-bdr-btn" to = "/about-details">Know more</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default sqafabout;