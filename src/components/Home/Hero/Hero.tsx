import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.scss';

// import bannerImg1 from 'src/assets/images/banner1.jpg';
//import bannerImg2 from 'src/assets/images/banner2.jpg';
// import bannerImg3 from 'src/assets/images/banner3.jpg';
// import bannerImg4 from 'src/assets/images/banner4.png';

import bannerImg1 from "src/assets/banners/banner1.jpg";
import bannerImg2 from "src/assets/banners/banner2.jpg";
import bannerImg3 from "src/assets/banners/banner3.jpg";


const Hero = () => {

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
        <section className="hero-banner banner-bg ptb-0">
            <Swiper modules={[Autoplay, Navigation]} spaceBetween={50} slidesPerView={1} navigation autoplay={{delay: 4000,disableOnInteraction: false,}} >
                <SwiperSlide>
                    <div className="banner">
                        <div className="hero-banner-img" data-aos="fade-left">
                            <img src={bannerImg3} alt="hero-banner" className="img-fluid" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner">
                        <div className="hero-banner-img">
                            <img src={bannerImg2} alt="hero-banner" className="img-fluid"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner">
                        <div className="hero-banner-img">
                            <img src={bannerImg1} alt="hero-banner" className="img-fluid" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className="banner">                      
                                <div className="hero-banner-img">
                                    <img src={bannerImg4} alt="hero-banner" className="img-fluid" />
                                </div>
                            </div>
                        
                </SwiperSlide> */}
            </Swiper>
        </section>
    )
}

export default Hero;