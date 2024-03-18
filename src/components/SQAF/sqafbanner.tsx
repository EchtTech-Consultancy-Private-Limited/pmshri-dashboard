import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Curriculum from 'src/assets/images/bschool_curriculum.png';
import Access from 'src/assets/images/bAccess_Infrastructure.png';
import leadership from 'src/assets/images/bSchool_leadership.png';
import Gender from 'src/assets/images/bGender_quity.jpg';
import monitoring from 'src/assets/images/bmanagement_monitoring.png';
import Beneficiary from 'src/assets/images/bBeneficiary-satisfaction.png';

const sqafbanner1 = () => {
    const goToCategory = (catId: string) => {
        localStorage.setItem('activeCategory', catId)
        if (localStorage.getItem('activeYear')) {
            localStorage.removeItem('activeYear')
        }
        if (localStorage.getItem('activeState')) {
            localStorage.removeItem('activeState')
        }
        if (localStorage.getItem('activeDistrict')) {
            localStorage.removeItem('activeDistrict')
        }
        window.location.href = '/category'
    }
    return (
        <section className="hero-banner banner-bg banner1-c bg-white sqaf-banner ptb-60">
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}>

                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">


                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Curriculum, Pedagogy & Assessment
                                </h2>
                                <p className="hero-banner-desc">
                                    This domain aims to evaluate the level of school practices in key areas of innovative pedagogical approach; curriculum planning; experiential learning; holistic development; health and social well-being; multidisciplinary, multilingual curriculum; integration of technology, Indian tradition and heritage in curriculum and pedagogy; teacher capacity building; assessment methods and students’ learning outcomes.
                                </p>
                            </div>

                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={Curriculum} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={Access} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Access & Infrastructure
                                </h2>

                                <p className="hero-banner-desc">
                                    This domain evaluates the level of adequacy, functionality, and aesthetic appeal of resources provided by schools. It looks into the facets of infrastructure, considering the diverse category of students in all aspects (SEDGs, CWSN, gifted children, etc.)
                                </p>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Human Resources and School Leadership
                                </h2>
                                <p className="hero-banner-desc">
                                    The domains and indicators in this domain are mainly related to infrastructure in schools to enable adequate facilities for teaching and learning. These include availability of study material, school uniform, CWSN aid & appliances, scholarships and incentives to girls Science and Computer laboratories at secondary and senior secondary level, libraries, library books, kitchen garden, sports equipments etc.
                                </p>
                            </div>

                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={leadership} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={Gender} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Inclusive practice, Gender & Equity
                                </h2>
                                <p className="hero-banner-desc">
                                    The focus of this domain is to assess the inclusive practices in the critical parameters of school ecosystem. It encompasses diverse aspects such as availability of resources and facilities, pedagogical practices, co-curricular activities, student enrolment and retention in terms of gender, socio-economic background and needs of students (particularly in case of CWSN and gifted children)
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Management, Monitoring and Governance
                                </h2>
                                <p className="hero-banner-desc">
                                    This domain looks into the monitoring and management of institutional activities to ensure that the processes and practices are aligned with the vision of schools.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={monitoring} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="hero-banner-img hidden-xs">
                                    <img src={Beneficiary} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-7">
                                <h2 className="common-banner-heading">
                                    Beneficiary Satisfaction
                                </h2>
                                <p className="hero-banner-desc">
                                    This domain will evaluate school’s opportunities and steps towards collaboration with stakeholders for excellence, gauging satisfaction of students, staffs, parents, alumni, and the community.
                                </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default sqafbanner1;