
import image1 from 'src/assets/photo-gallery/photo-gallery1.png';
import image2 from 'src/assets/photo-gallery/photo-gallery2.png';
import image3 from 'src/assets/photo-gallery/photo-gallery3.png';
import image4 from 'src/assets/photo-gallery/photo-gallery4.png';
import image5 from 'src/assets/photo-gallery/photo-gallery5.png';
import image6 from 'src/assets/photo-gallery/photo-gallery6.png';
import image7 from 'src/assets/photo-gallery/photo-gallery7.png';
import image8 from 'src/assets/photo-gallery/photo-gallery8.png';
import image9 from 'src/assets/photo-gallery/photo-gallery9.png';
import '../Home/Gallery/Gallery.scss';
import '../Home/Gallery/Gallery.css';
import '../Home/Gallery/Gallery.css.map';
// import ModalImage from "react-modal-image";
import React, { useState } from 'react';





const Photogallery = () => {
    const [isOpen, setOpen] = useState(false);  
    const [imgUrl, setImgUrl] = useState("");
    const handleImageUrl = (img_url: string) => {
        setImgUrl(img_url);
        setOpen(true);
    }
    const closeVideoModal = () => {
        setOpen(false);
    }
    return (
        <>

            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="desc-black text-center text-white pb-0">PM Shree PhotoGallery </p>
                            <h2 className="heading-blue text-center text-white pb-0"> Our Pictures</h2>
                        </div>
                    </div>
                </div>
            </section>



            <section className="ptb-60">
                <div className="container">
                    <div className="portfolio">
                        <div className="portfolio-flters">
                            <div className="row gy-4 portfolio-container">

                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                               
                                                 <img src={image1} className="img-fluid"
                                                alt="photo-gallery1" onClick={() => handleImageUrl(image1)} /> 
                                                {/* <ModalImage
                                                    small={image1}
                                                    large={image1}
                                                    /> */}
                                                
                                            </a>    
                                                
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">1.PM SHRI Schools</a></h4>
                                            <p>Nurturing well-rounded individuals equipped with 21st century skills</p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                               

                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                              
                                                <img src={image3} className="img-fluid"
                                                alt="photo-gallery3" onClick={() => handleImageUrl(image3)}/>
                                                {/* <ModalImage
                                                    small={image3}
                                                    large={image3}
                                                    /> */}
                                        </a>
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">4.Quality Assurance</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                                
                                                <img src={image2} className="img-fluid"
                                                alt="photo-gallery5" onClick={() => handleImageUrl(image2)}/>

                                                    {/* <ModalImage
                                                    small={image2}
                                                    large={image2}
                                                    /> */}
                                                
                                                </a>
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">2.Major Pillars</a></h4>
                                            <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                                 
                                                <img src={image3} className="img-fluid"
                                                alt="photo-gallery5" onClick={() => handleImageUrl(image3)}/>
                                                {/* <ModalImage
                                                    small={image3}
                                                    large={image3}
                                                    /> */}
                                                
                                        </a>
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">Three Stage Process</a></h4>
                                            <p>Selection through Challenge Method with First Stage Three Stage Process </p>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                                
                                              
                                                <img src={image4} className="img-fluid"
                                                alt="photo-gallery7" onClick={() => handleImageUrl(image4)}/>
                                                {/* <ModalImage
                                                    small={image4}
                                                    large={image4}
                                                    /> */}
                                        
                                        
                                        </a>
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">Major Pillars</a></h4>
                                            <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-3 portfolio-item filter-photo">
                                    <div className="portfolio-wrap">
                                        <a data-gallery="portfolio-gallery-app"
                                            className="glightbox">
                                                
                                                <img src={image8} className="img-fluid"
                                                alt="photo-gallery8" onClick={() => handleImageUrl(image8)}/>

                                                {/* <ModalImage
                                                    small={image4}
                                                    large={image4}
                                                    
                                                /> */}
                                                
                                        </a>
                                        <div className="portfolio-info">
                                            <h4><a title="More Details">Major Pillars</a></h4>
                                            <p>PM ScHools for Rising India Transforming education with a commitment to Quality Assurance Major Pillars</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                isOpen ? <>
                    <div className="popup-media" onClick={closeVideoModal}>
                        <span>&times;</span>
                        <img width="500" height="500" src={imgUrl} className='modal-image-view'/>
                    </div>

                </> : ""
            }



                </div>
            </section>

        </>

    )

}

export default Photogallery