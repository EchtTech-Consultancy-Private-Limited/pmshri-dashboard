import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Client.scss';
import clientLogo1 from 'src/assets/images/client-logo1.png';
import clientLogo2 from 'src/assets/images/client-logo2.png';
import clientLogo3 from 'src/assets/images/client-logo3.png';
import clientLogo4 from 'src/assets/images/client-logo4.png';

const Client = () => {
  return (
    <section className="client ptb-60 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
            >
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo1} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo2} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo3} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo4} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo1} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo2} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo3} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <img src={clientLogo4} alt="client-logo" className="img-fluid" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client