import { Link } from "react-router-dom";
import "../css/herodestination.css"
import DestinationGallery from "./DestinationGallery";
const herodes = ()=>{
    return(
        <div className="hero-destination">
            <div className="hero-wrap">
                <h1>สถานที่ท่องเที่ยวน่าสนใจ</h1>
                <p>พักผ่อนเพื่อหาประสบการณ์ที่สนุกสนานในเมืองขอนแก่นกับเรา</p>
            </div>
            <DestinationGallery/>
            <Link to="/tour" className="link-reviews">รายละเอียดเพิ่มเติม</Link>
        </div>
    )
}
export default herodes