
// import image1 from 'src/assets/photo-gallery/photo-gallery1.png';
// import image2 from 'src/assets/photo-gallery/photo-gallery2.png';
// import image3 from 'src/assets/photo-gallery/photo-gallery3.png';
// import image4 from 'src/assets/photo-gallery/photo-gallery4.png';
// import image5 from 'src/assets/photo-gallery/photo-gallery5.png';
// import image6 from 'src/assets/photo-gallery/photo-gallery6.png';
// import image7 from 'src/assets/photo-gallery/photo-gallery7.png';
// import image8 from 'src/assets/photo-gallery/photo-gallery8.png';
// import image9 from 'src/assets/photo-gallery/photo-gallery9.png';
import { EventModel, InitialStateModel, StoreModel } from 'src/models/dpgi';
import { getStateGallery } from "src/actions/dpgi.action";
import '../Home/Gallery/Gallery.scss';
import '../Home/Gallery/Gallery.css';
import '../Home/Gallery/Gallery.css.map';
// import ModalImage from "react-modal-image";
import React, { lazy, useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import stateGallery from "../../../src/json/stateGallery.json"
import { Spinner } from 'react-bootstrap';
import { string } from 'yup';
import CustomPagination from '../../pagination/customPagination';
import ImageModal from './ImageModel';

const LazyLoading = lazy(() => import('./LazyLoading'));
const Stategallery = () => {

    const states = useSelector<StoreModel>(store => store.states.data) as []
    const gallery = useSelector<StoreModel>(store => store.statesGallery.data) as []
    const galleryloading = useSelector<StoreModel>(store => store.statesGallery.loading) as []
    const [StateID, setStateWiseData] = useState(localStorage.getItem('activeStateID') || '0')
    const [isOpen, setOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState("");
    const [stateGalleryData, setStateGalleryData] = useState<any[]>([]);
    const [seletctedState, setSelectedState] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStateGallery(StateID));
        setCurrentPage(1);
    }, [StateID]);

    useEffect(() => {
        // const p= stateGallery.stateGalleryData for direct take the data fro json then pass setStateGalleryData(p)
        setStateGalleryData(gallery);
    }, [gallery]);


    useEffect(() => {
        if (StateID && stateGalleryData.length > 0) {
            const filteredState = stateGalleryData.filter(item => item.StateID == StateID);
            setSelectedState(filteredState);
            setCurrentPage(1);
        }
    }, [StateID, stateGalleryData]);


    const totalPages = Math.ceil(stateGalleryData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = stateGalleryData.slice(indexOfFirstItem, indexOfLastItem);
    console.log("currentItems", currentItems)
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    const closeVideoModal = () => {
        setOpen(false);
    }
    const changeState = (event: EventModel) => {
        const resetColor = document.getElementsByClassName("highcharts-point");
        for (let k = 0; k < resetColor.length; k++) {
            resetColor[k].attributes[0].value = "#ff9933";
        }

        setStateWiseData(event.target.value.split(',')[1])
        if (event.target.value.split(',')[0] !== undefined) {
            localStorage.setItem('activeState', JSON.stringify(event.target.value.split(',')[0]))
        }
        if (event.target.value.split(',')[0] !== undefined) {
            localStorage.setItem('activeDistrictName', event.target.value.split(',')[0])
        }
        if (event.target.value.split(',')[1] !== undefined) {
            localStorage.setItem('activeStateID', event.target.value.split(',')[1])
        }
    }
    const handleImageUrls = (img_url: any, index: any) => {
        const globalIndex = indexOfFirstItem + index;
        setImgUrl(img_url);
        setSelectedImageIndex(globalIndex);
        setOpen(true);
    };
    const goToNextImage = () => {

        setSelectedImageIndex((prevIndex) => {

            const newIndex = prevIndex + 1;
            if (newIndex >= stateGalleryData.length) {
                return 0;
            }
            return newIndex;
        });
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex < 0) {
                return stateGalleryData.length - 1;
            }
            return newIndex;
        });
    };


    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="desc-black text-center text-white pb-0">PM Shree PhotoGallery </p>
                            <h2 className="heading-blue text-center text-white pb-0"> State Gallery</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ptb-60 state-data gallery-2">
                <div className="container">
                    <div className="portfolio">
                        <div className="portfolio-flters">
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <div className="indicator-select mtb-15">
                                        {/* <label>Search State</label>
                                        <input type="search" className='form-control form-select' placeholder="All"/> */}
                                        {/* <label>Search State</label> */}
                                        <select className="form-select" id="map_state_name" name="map_state_name" onChange={changeState}>
                                            <option value="All State,0,0">All State</option>
                                            {states.length && states.map((stateName: any, index: number) => {
                                                return <option selected={StateID == stateName.id ? true : false} key={index} value={stateName.state_name.toUpperCase() + ',' + stateName.id + ',' + stateName.mapreferanceid}>{stateName.state_name}</option>
                                            })}
                                        </select>

                                    </div>
                                </div>
                            </div>

                            <Suspense fallback={<div><Spinner animation="grow" variant="primary" /></div>}>
                                <>
                                    {galleryloading ? <div><LazyLoading /></div> :
                                        <>
                                            {StateID === "0" ? (
                                                <>
                                                    <div className="row gy-4 portfolio-container">
                                                        {currentItems?.map((ele, index) => (
                                                            <div className="col-xl-2 col-md-2 portfolio-item filter-photo" key={ele.id}>
                                                                <div className="portfolio-wrap" style={{ zIndex: 9999 }}>
                                                                    <span
                                                                        data-gallery="portfolio-gallery-app"
                                                                        className="glightbox"

                                                                        onClick={() => handleImageUrls(`http://localhost:3006${ele?.imgUrl}`, index)}
                                                                    >
                                                                        <img src={`http://localhost:3006${ele?.imgUrl}`} className="img-fluid" alt={`photo-gallery${index + 1}`} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <CustomPagination
                                                        currentPage={currentPage}
                                                        totalPages={totalPages}
                                                        onPageChange={handlePageChange}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    {seletctedState.length > 0 ? (
                                                        <div className="row gy-4 portfolio-container">
                                                            {currentItems?.map((ele, index) => (
                                                                <div className="col-xl-2 col-md-2 portfolio-item filter-photo" key={ele.id}>
                                                                    <div className="portfolio-wrap" style={{ zIndex: 9999 }}>
                                                                        <span
                                                                            data-gallery="portfolio-gallery-app"
                                                                            className="glightbox"

                                                                            onClick={() => handleImageUrls(`http://localhost:3006${ele?.imgUrl}`, index)}
                                                                        >
                                                                            <img src={`http://localhost:3006${ele?.imgUrl}`} className="img-fluid" alt={`photo-gallery${index + 1}`} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div>Data is not available for the selected state</div>
                                                    )}
                                                    {seletctedState.length > 0 && (
                                                        <CustomPagination
                                                            currentPage={currentPage}
                                                            totalPages={totalPages}
                                                            onPageChange={handlePageChange}
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </>
                                    }
                                </>
                            </Suspense>
                        </div>
                    </div>
                </div>
                <ImageModal
                    isOpen={isOpen}
                    closeModal={closeVideoModal}
                    imageUrl={selectedImageIndex !== -1 && stateGalleryData[selectedImageIndex] ? `http://localhost:3006${stateGalleryData[selectedImageIndex].imgUrl}` : ""}
                    prevImage={goToPreviousImage}
                    nextImage={goToNextImage}
                />
            </section>

        </>

    )

}

export default Stategallery;