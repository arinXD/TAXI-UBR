import { Link } from "react-router-dom";
const DestinationGallery = ()=>{
    return(
    <>
        <div className="car-gallery">
            <div className="car-gallery-row">
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>สระมรกต</h2>
                    <Link className="clearBtn" to={"/bluelagoon"}><img alt="taxi ubr review" src={require('../img/Blue_Lagoon1.jpg')} /></Link>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>เขาค้อ</h2>
                    <Link className="clearBtn" to={"/khaokho"}><img alt="taxi ubr review" src={require('../img/Khao_Kho1.jpg')} /></Link>
                </div>
            </div>
            <div className="car-gallery-row">
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ช้างอารีนา</h2>
                    <Link className="clearBtn" to={"/changarena"}><img alt="taxi ubr review" src={require('../img/Chang_Arena_Buriram1.jpg')} /></Link>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ผาม่านฝัน</h2>
                    <Link className="clearBtn" to={"/phamanfun"}><img alt="taxi ubr review" src={require('../img/Phamanfun2.jpg')} /></Link>
                </div>
            </div>
        </div>
    </>
    )
}
export default DestinationGallery