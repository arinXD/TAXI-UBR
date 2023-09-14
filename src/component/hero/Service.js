import taxis from "../img/marker3.png"
import "../css/service.css"
import CarGallery from "./CarGallery"
import { Link } from "react-router-dom"
const Service = ()=>{
    return(
        <div className="service">
            <div className="hero-wrap">
                <h1>รูปภาพการให้บริการ</h1>
                <p>ดูภาพรีวิวการให้บริการ ไม่ว่าท่านจะไปที่ ท่านจะไปกับใคร ไปไหน ไปกันเพื่อนจ๋า</p>
            </div>
            <CarGallery/>
            <Link to="/reviews" className="link-reviews">รีวิวเพิ่มเติม</Link>
        </div>
    )
}

export default Service