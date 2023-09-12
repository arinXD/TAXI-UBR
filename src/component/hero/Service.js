import taxis from "../img/marker3.png"
import "../css/service.css"
import CarGallery from "./CarGallery"
import { Link } from "react-router-dom"
const Service = ()=>{
    return(
        <div className="service">
            <div className="hero-wrap">
                <h1>แท็กซี่ขอนแก่น</h1>
                <p>ดูภาพรีวิวการให้บริการ ไม่ว่าท่านจะไปที่ ท่านจะไปกับใคร ไปไหน ไปกันเพื่อนจ๋า</p>
                {/* <hr/> */}
            </div>
            <CarGallery/>
            <div className="hero-wrap">
                <Link to="/reviews" className="link-reviews">รีวิวเพิ่มเติม <i class="bi bi-arrow-right-circle"></i></Link>
            </div>
            {/* <div className="hero-wrap">
                <p style={{marginBottom:"15px"}}>บริการแท็กซี่</p>
                <ul className="detail-list">
                    <li><i class="bi bi-car-front-fill"></i> <span>ตัวเมืองขอนแก่น</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>บขส 3 ขอนแก่น</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>สนามบินขอนแก่น</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>ส่วนตัว</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>รับส่งต่างจังหวัด</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>รับส่งต่างอำเภอ</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>รับส่งทุกทิศทั่วไทย</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>เหมาแท็กซี่ขอนแก่น</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>เหมาแท็กซี่ไปต่างจังหวัด</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>เหมาแท็กซี่ไปต่างอำเภอ</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>เหมารถ เหมารถตู้ เช่ารถตู้ พร้อมคนขับ</span></li>
                    <li><i class="bi bi-car-front-fill"></i> <span>แท็กซี่ขนาดใหญ่ 7 ที่นั่ง</span></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Service