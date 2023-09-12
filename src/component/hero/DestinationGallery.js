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
                <div className="car-gallery-item">
                    <img src={require('../img/Blue_Lagoon1.jpg')} onClick={() => openModal(require('../img/Blue_Lagoon1.jpg'))}/>
                </div>
                <div className="car-gallery-item">
                    <img src={require('../img/Khao_Kho1.jpg')} onClick={() => openModal(require('../img/Khao_Kho1.jpg'))}/>
                </div>
            </div>
            <div class="car-gallery-row">
                <div className="car-gallery-item">
                    <img src={require('../img/Chang_Arena_Buriram1.jpg')} onClick={() => openModal(require('../img/Chang_Arena_Buriram1.jpg'))}/>
                </div>
                <div className="car-gallery-item">
                    <img src={require('../img/Phamanfun2.jpg')} onClick={() => openModal(require('../img/Phamanfun2.jpg'))}/>
                </div>
            </div>
            <ImageModal show={modalShow} onHide={closeModal} imageUrl={selectedImage} />
        </div>
    </>
    )
}