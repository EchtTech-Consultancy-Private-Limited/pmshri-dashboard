import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons'; // Added icons for zoom in and zoom out

interface ImageModalProps {
    isOpen: boolean;
    closeModal: () => void;
    imageUrl: any;
    prevImage: () => void;
    nextImage: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, closeModal, imageUrl, prevImage, nextImage }) => {
    
    const [zoomLevel, setZoomLevel] = React.useState<number>(100);

    const zoomIn = () => {
        setZoomLevel(zoomLevel + 10); 
    };
    const zoomOut = () => {
        setZoomLevel(zoomLevel - 10); 
    };

   
    const resetZoom = () => {
        setZoomLevel(100);
    };

    
    React.useEffect(() => {
        if (!isOpen) {
            resetZoom();
        }
    }, [isOpen]);

    return (
        <>
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Selected Image"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 9999
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            <div style={{ position: 'absolute', right: '0px', zIndex: 1000, display:"flex", flexDirection:"column", gap:"5px" }}>
                <FontAwesomeIcon icon={faSearchPlus} size="lg" style={{ cursor: 'pointer' }} onClick={zoomIn} />
                <FontAwesomeIcon icon={faSearchMinus} size="lg" style={{ cursor: 'pointer' }} onClick={zoomOut} />
            </div>
            
            <div style={{ position: 'absolute', top: '0px', right: '5px', cursor: 'pointer', zIndex: 1000 }} onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>

            {imageUrl && (
                <>
                    <div style={{ position: 'relative', overflow:"hidden" }}>
                        <div
                            onClick={prevImage}
                            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'white', zIndex: 1000, cursor: 'pointer' }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                        </div>
                        <img
                            src={imageUrl}
                            className="img-fluid"
                            alt={`Selected Image`}
                            style={{ width: `${zoomLevel}vh`, maxHeight: '80vh', objectFit: "cover" }}
                        />
                        <div
                            onClick={nextImage}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'white', zIndex: 1000, cursor: 'pointer' }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} size="2x" />
                        </div>
                    </div>
                </>
            )}
        </ReactModal>
        </>
    );
};

export default ImageModal;