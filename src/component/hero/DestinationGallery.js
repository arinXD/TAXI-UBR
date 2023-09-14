import React, { useState } from 'react';
import ImageModal from "./ImageModal";
export default ()=>{
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openNewTab = (url) => {
        window.location.href = url;
        // setSelectedImage(imageUrl);
        // setModalShow(true);
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
                    {/* <span class="badge rounded-pill bg-primary">Primary</span> */}
                    <h2 className='destination-desc'>สระมรกต</h2>
                    <img src={require('../img/Blue_Lagoon1.jpg')} onClick={() => openNewTab("/bluelagoon")}/>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>เขาค้อ</h2>
                    <img src={require('../img/Khao_Kho1.jpg')} onClick={() => openNewTab("/phamanfun")}/>
                </div>
            </div>
            <div class="car-gallery-row">
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ช้างอารีนา</h2>
                    <img src={require('../img/Chang_Arena_Buriram1.jpg')} onClick={() => openNewTab("/changarena")}/>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ผาม่านฝัน</h2>
                    <img src={require('../img/Phamanfun2.jpg')} onClick={() => openNewTab("/khaokho")}/>
                </div>
            </div>
            <ImageModal show={modalShow} onHide={closeModal} imageUrl={selectedImage} />
        </div>
    </>
    )
}