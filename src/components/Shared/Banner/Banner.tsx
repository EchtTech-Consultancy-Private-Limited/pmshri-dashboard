import React from 'react';
import './Banner.scss';
import ellipse from 'src/assets/images/ellipse.svg';

const Banner = (props: any) => {
    return (
        <section className="common-banner banner-bg ptb-30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-3">
                        <div className="common-banner-content" data-aos="fade-right">
                            <div className="ellipse-img-wrap">
                                <img src={ellipse} alt="img" className="img-fluid" />
                                <div className="ellipse-content">
                                    <img src={require('src/assets/images/' + (props.icon) + '.svg')} alt="img" className="img-fluid" />
                                    <h2 className="common-banner-heading">
                                        {props.heading}
                                    </h2>
                                    <p className="common-banner-desc">
                                        {props.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xl-9">
                        <div className="common-banner-img text-center" data-aos="fade-left">
                            <img src={require('src/assets/images/' + (props.img) + '.svg')} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner