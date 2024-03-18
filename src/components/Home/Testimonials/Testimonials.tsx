import React from 'react';
import './Testimonials.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import avtar from 'src/assets/images/avtar.png';
import testi1 from 'src/assets/images/avtar-T.png';

const Testimonials = () => {

    return (

        <section id="testimonials" className="portfolio sections-bg gallery ptb-60 bg-grey">


            <div className="container" data-aos="fade-up">

                <h2 className="heading-blue text-center pb-5">Testimonials</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aboutpgiimg text-center testimonials-sec testimonial-carousel owl-carousel owl-theme" data-aos="fade-left">

                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation
                                    loop
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="banner">
                                            <div className="hero-banner-img testimonials" data-aos="fade-left">
                                                <div className="testimonial-block">
                                                    <div className="inner-box">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="info-box">
                                                                    <div className="thumb"><img src={testi1} alt="" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                                                                <div className="info-box">
                                                                    <h4 className="name">Lorem ipsum dolor</h4>
                                                                    <span className="designation">Lorem ipsum dolor</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Testimonials;