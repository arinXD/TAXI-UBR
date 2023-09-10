import { Link } from "react-router-dom";
import "../css/herodestination.css"
export default ()=>{
    const banner = require('../img/ubk.jpg')
    return(
        <div className="hero-destination">
            <div className="hero-wrap">
                <h1>สถานที่ท่องเที่ยว</h1>
                <p>พักผ่อนเพื่อหาประสบการณ์ที่สนุกสนานในเมืองขอนแก่นกับเรา !</p>
            </div>
            <div className="destinate">
                <img src={banner}/>
            </div>
            <div className="hero-wrap">
                <Link to="tour">รายละเอียดเพิ่มเติม</Link>
            </div>
        </div>
    )
}