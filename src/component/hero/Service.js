import "../css/service.css"
import CarGallery from "./CarGallery"
import { Link } from "react-router-dom"
const Service = ()=>{
    return(
        <div className="service">
            <div className="hero-wrap">
                <h1>รูปภาพการให้บริการ</h1>
                <p>ดูภาพรีวิวการให้บริการ</p>
            </div>
            <CarGallery/>
            <Link to="/reviews" className="link-reviews">รีวิวเพิ่มเติม</Link>
        </div>
    )
}

export default Service