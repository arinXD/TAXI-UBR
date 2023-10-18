import "../css/cargallery.css"
import React, { useState } from 'react';
import ImageModal from "./ImageModal";
export default ()=>{
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalShow(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalShow(false);
    };

    return(
    <>
        <div className="car-gallery">
            <div className="car-gallery-row">
                <div className="car-gallery-item">
                    <img src={'./review/review (43).jpg'} onClick={() => openModal('./review/review (43).jpg')}/>
                </div>
                <div className="car-gallery-item">
                    <img src={'./review/review (38).jpg'} onClick={() => openModal('./review/review (38).jpg')}/>
                </div>
            </div>
            <div className="car-gallery-row">
                <div className="car-gallery-item full-width">
                    <img src={'./review/review (17).jpg'} onClick={() => openModal('./review/review (17).jpg')}/>
                </div>
                <div className="car-gallery-item full-width">
                    <img src={'./review/review (46).jpg'} onClick={() => openModal('./review/review (46).jpg')}/>
                </div>
            </div>
            <ImageModal show={modalShow} onHide={closeModal} imageUrl={selectedImage} />
        </div>
    </>
    )
}