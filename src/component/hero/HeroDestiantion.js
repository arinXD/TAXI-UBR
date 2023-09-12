import { Link } from "react-router-dom";
import "../css/herodestination.css"
import DestinationGallery from "./DestinationGallery";
export default ()=>{
    const banner = require('../img/ubk.jpg')
    return(
        <div className="hero-destination">
            <h1>สถานที่ท่องเที่ยวน่าสนใจ</h1>
            {/* <hr/> */}
            {/* <img src={require("../img/ubk2.jpg")}/> */}
            <p>พักผ่อนเพื่อหาประสบการณ์ที่สนุกสนานในเมืองขอนแก่นกับเรา</p>
            <DestinationGallery/>
            {/* <Link to="tour">รายละเอียดเพิ่มเติม</Link> */}
            <div className="hero-wrap">
                <Link to="/reviews" className="link-reviews">รีวิวเพิ่มเติม <i class="bi bi-arrow-right-circle"></i></Link>
            </div>
            {/* <div className="hero-wrap">
            </div> */}
            {/* <div className="destinate">
                <img src={banner}/>
            </div> */}
            {/* <div className="hero-wrap">
                <Link to="tour">รายละเอียดเพิ่มเติม</Link>
            </div> */}
        </div>
    )
}