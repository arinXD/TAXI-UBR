import { Link } from "react-router-dom"
import "./css/servicelist.css"
export default ()=>{
    return(
        <div className="service-list">
            <div className="hero-wrap">
                <h1>บริการแท็กซี่</h1>
                <hr/>
                <p className="describe">พูดคุยตกลงราคาได้ค่ะ ขอบคุณที่ใช้บริการ <i class="bi bi-emoji-smile-fill"></i> </p>
            </div>
            <ul className="detail-list">
                <li><i class="bi bi-check-lg"></i> <span>ตัวเมืองขอนแก่น</span></li>
                <li><i class="bi bi-check-lg"></i> <span>บขส 3 ขอนแก่น</span></li>
                <li><i class="bi bi-check-lg"></i> <span>สนามบินขอนแก่น</span></li>
                <li><i class="bi bi-check-lg"></i> <span>ส่วนตัว</span></li>
                <li><i class="bi bi-check-lg"></i> <span>รับส่งต่างจังหวัด</span></li>
                <li><i class="bi bi-check-lg"></i> <span>รับส่งต่างอำเภอ</span></li>
                <li><i class="bi bi-check-lg"></i> <span>รับส่งทุกทิศทั่วไทย</span></li>
                <li><i class="bi bi-check-lg"></i> <span>เหมาแท็กซี่ขอนแก่น</span></li>
                <li><i class="bi bi-check-lg"></i> <span>เหมาแท็กซี่ไปต่างจังหวัด</span></li>
                <li><i class="bi bi-check-lg"></i> <span>เหมาแท็กซี่ไปต่างอำเภอ</span></li>
                <li><i class="bi bi-check-lg"></i> <span>เหมารถ เหมารถตู้ เช่ารถตู้ พร้อมคนขับ</span></li>
                <li><i class="bi bi-check-lg"></i> <span>แท็กซี่ขนาดใหญ่ 7 ที่นั่ง</span></li>
            </ul>
            {/* <div className="hero-wrap">
                <Link to="/reviews" className="link-reviews">บิรการเพิ่มเติม <i class="bi bi-arrow-right-circle"></i></Link>
            </div> */}
        </div>
    )
}