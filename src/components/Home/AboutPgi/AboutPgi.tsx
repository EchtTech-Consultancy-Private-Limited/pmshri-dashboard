import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './about.css';
// import aboutImg from 'src/assets/images/about-img2.jpg';
import aboutImg1 from 'src/assets/images/about-img01.png';
import aboutImg2 from 'src/assets/images/about-img02.png';
import aboutImg3 from 'src/assets/images/wave.png';
import About_details from './Aboutdetails';
import { Link } from 'react-router-dom';

const AboutPgi = () => {
    const handleScroll = (id:string) => {
        const header_menus = ['home','methodology','sqaf','state','about-details'];
        if(header_menus.includes(id)){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
        }
    
      };
    return (
        <section className="aboutpgi ptb-60" id="aboutPmshri">
            <div className="container">
            <img src={aboutImg3} alt="hero-banner" className='about-img' />
                <div className="row align-items-center">
                    <div className="col-md-7 order-md-1 order-2">
                        <div className="aboutpgi-content" data-aos="fade-right">
                            <div className="common-content">
                                <h2 className="heading-blue">
                                    About PM SHRI 
                                </h2>
                                <p className="desc-black">
                                PM SHRI School is a centrally sponsored scheme by the Government of India. This initiative is intended to develop more than 14500 PM SHRI Schools managed by Central Government/State/UT Government/local bodies including KVS and NVS in which every student feels welcomed and cared for, where a safe and stimulating learning environment exists, where a wide range of learning experiences are offered, and where good physical infrastructure and appropriate resources conducive to learning are available to all students.
                                </p>
                                <p className="desc-black">
                                It will nurture students in a way that they become engaged, productive, and contributing citizens for building an equitable, inclusive, and plural society as envisaged by the National Education Policy 2020.
                                </p>

                                <div className="btn-wrap mt-3">
                                   <Link to="/about-details" onClick={()=>handleScroll("about-details")} className="btn red-bdr-btn">Know more</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-2 order-1">
                        <div className="aboutpgiimg text-center about-sec" data-aos="fade-left">                         

                            <Swiper
                                modules={[Autoplay, Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}>
                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>

                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>

                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>

                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>

                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>

                            <SwiperSlide>
                               <div className="banner">   
                                    <div className="hero-banner-img" data-aos="fade-left">
                                        <img src={aboutImg1} alt="hero-banner" className="img-fluid" />
                                    </div>                          
                                </div>
                            </SwiperSlide>
              
                            <SwiperSlide>
                                <div className="banner">                      
                                            <div className="hero-banner-img">
                                                <img src={aboutImg2} alt="hero-banner" className="img-fluid" />
                                            </div>
                                        </div>
                                    
                            </SwiperSlide>
                         
                        </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPgi