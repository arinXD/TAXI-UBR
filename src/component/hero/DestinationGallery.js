import { Link } from "react-router-dom";
export default ()=>{
    return(
    <>
        <div className="car-gallery">
            <div className="car-gallery-row">
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>สระมรกต</h2>
                    <Link className="clearBtn" to={"/bluelagoon"}><img src={require('../img/Blue_Lagoon1.jpg')} /></Link>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>เขาค้อ</h2>
                    <Link className="clearBtn" to={"/khaokho"}><img src={require('../img/Khao_Kho1.jpg')} /></Link>
                </div>
            </div>
            <div className="car-gallery-row">
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ช้างอารีนา</h2>
                    <Link className="clearBtn" to={"/changarena"}><img src={require('../img/Chang_Arena_Buriram1.jpg')} /></Link>
                </div>
                <div className="car-gallery-item">
                    <h2 className='destination-desc'>ผาม่านฝัน</h2>
                    <Link className="clearBtn" to={"/phamanfun"}><img src={require('../img/Phamanfun2.jpg')} /></Link>
                </div>
            </div>
        </div>
    </>
    )
}