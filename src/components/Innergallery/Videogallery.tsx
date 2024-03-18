import videoPath1 from 'src/assets/images/v.mp4';
import videoPath2 from 'src/assets/images/video2.mp4';
import '../Home/Gallery/Gallery.scss';
import '../Home/Gallery/Gallery.css';
import '../Home/Gallery/Gallery.css.map';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Videogallery = () => {


    const [isOpen, setOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    const customVideoUrl = videoPath1;
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
                            <p className="desc-black text-center text-white pb-0">PM Shree Video Gallery</p>
                            <h2 className="heading-blue text-center text-white pb-0"> Our Videos</h2>
                        </div>
                    </div>
                </div>
            </section>




            <section className='ptb-60' >
                <div className="container">

                    <div className="portfolio">
                        <div className="portfolio-flters">
                            <div className="row gy-4 portfolio-container">


                                <div className="col-xl-4 col-md-6 portfolio-item filter-video"
                                 onClick={() => handleImageUrl(videoPath1)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" 
                                        className="glightbox">
                                            <video onClick={() => setOpen(true)}
                                             width="100%" height="240" src={videoPath1} 
                                             title="YouTube video player"></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>





                                <div className="col-xl-4 col-md-6 portfolio-item filter-video" onClick={() => handleImageUrl(videoPath2)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                            <video width="100%" height="240" src={videoPath2} title="YouTube video player"></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-video" onClick={() => handleImageUrl(videoPath1)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                            <video width="100%" height="240" src={videoPath1} title="YouTube video player"></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-4 col-md-6 portfolio-item filter-video" onClick={() => handleImageUrl(videoPath2)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                            <video width="100%" height="240" src={videoPath2} title="YouTube video player"></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-video" onClick={() => handleImageUrl(videoPath1)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                            <video width="100%" height="240" src={videoPath1} title="YouTube video player"></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-4 col-md-6 portfolio-item filter-video"
                                 onClick={() => handleImageUrl(videoPath2)}>
                                    <div className="portfolio-wrap call-to-action">
                                        <div data-gallery="portfolio-gallery-app position-relative" className="glightbox">
                                            <video width="100%" height="240" src={videoPath2} 
                                            title="YouTube video player" ></video>

                                        </div>


                                        <div className="portfolio-info">
                                            <h4><a title="More Details">PM SHRI School Yojna</a></h4>
                                            <p>Quality Assurance in Human Resources & Inclusive Practices</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {
                isOpen ? <>
                    <div className="popup-media" onClick={closeVideoModal}>
                        <span>&times;</span>
                        <video width="100%" height="240" src={imgUrl}
                            title="YouTube video player" controls
                            muted autoPlay >

                        </video>
                    </div>

                </> : ""
            }

        </>
    )

}

export default Videogallery