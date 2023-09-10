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
            <div class="car-gallery-row">
                <div className="car-gallery-item full-width">
                    <img src={require('../img/review/car1.jpg')} onClick={() => openModal(require('../img/review/car1.jpg'))}/>
                </div>
            </div>
            <div class="car-gallery-row">
                <div className="car-gallery-item">
                    <img src={require('../img/review/car2.jpg')} onClick={() => openModal(require('../img/review/car2.jpg'))}/>
                </div>
                <div className="car-gallery-item">
                    <img src={require('../img/review/car3.jpg')} onClick={() => openModal(require('../img/review/car3.jpg'))}/>
                </div>
            </div>
            <ImageModal show={modalShow} onHide={closeModal} imageUrl={selectedImage} />
        </div>
    </>
    )
}