import { Link } from "react-router-dom"
import "./css/servicelist.css"

export default ()=>{
    return(
        <div className="service-list">
            <div className="hero-wrap">
                <h1>บริการแท็กซี่</h1>
                <p className="describe">พูดคุยตกลงราคาได้ค่ะ ขอบคุณที่ใช้บริการ <i class="bi bi-emoji-smile-fill"></i> </p>
            </div>
            <div className="service-wrap">
                <ul className="detail-list">
                    <h2>รูปแบบการให้บริการ</h2>
                    <li><i class="bi bi-check-lg"></i> <span>ตัวเมืองขอนแก่น</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>บขส 3 ขอนแก่น</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินขอนแก่น</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ส่วนตัว</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>รับส่งต่างจังหวัด ต่างอำเภอ ทุกทิศทั่วไทย</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เหมาแท็กซี่ไปต่างจังหวัด ต่างอำเภอ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เหมารถ เหมารถตู้ เช่ารถตู้ พร้อมคนขับ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>แท็กซี่ขนาดใหญ่ 7 ที่นั่ง</span></li>
                </ul>
                <ul className="detail-list">
                    <h2>อัตราค่าบริการจากสนามบินขอนแก่น</h2>
                    <li>บ้านไผ่ <span className="service-price">580 บาท</span></li>
                    <li>โรงพยาบาลสิรินธร บ้านโนนสมบูรณ์ <span className="service-price">320 บาท</span></li>
                    <li>บ้านฝาง <span className="service-price">260 บาท</span></li>
                    <li>ขนส่งนอก บ้านสำราญ <span className="service-price">250 บาท</span></li>
                    <li>บ้านสำราญ <span className="service-price">220 บาท</span></li>
                    <li>หลัง มข มหาวิทยาลัยขอนแก่น <span className="service-price">170 บาท</span></li>
                    <li>โลตัสเอ็กตร้า บ้านโนนม่วง <span className="service-price">170 บาท</span></li>
                    <li>ตลาดประตูน้ำ โลตัสเก่า <span className="service-price">170 บาท</span></li>
                    <li>ตลาดอู่ฟู่ <span className="service-price">170 บาท</span></li>
                    <li>เซนทรัลขอนแก่น <span className="service-price">120 บาท</span></li>
                    <li>ใน มข มหาวิทยาลัยขอนแก่น <span className="service-price">120 บาท</span></li>
                    <li>โลตัสประตูน้ำ โลตัสเก่า <span className="service-price">160 บาท</span></li>
                    <li>ตลาดบางลำภู <span className="service-price">140 บาท</span></li>
                    <li>ตลาดจอมพล <span className="service-price">140 บาท</span></li>
                    <li>ตลาดบ้านหนองใหญ่ <span className="service-price">180 บาท</span></li>
                    <li>ตลาดเคหะเมืองเก่า <span className="service-price">160 บาท</span></li>
                    <li>ม.ภาค <span className="service-price">120 บาท</span></li>
                    <li>วิทยาลัย.เทคโนภาค <span className="service-price">120 บาท</span></li>
                    <li>ม.ศรีปทุม <span className="service-price">150 บาท</span></li>
                    <li>ม.ราชมงคล <span className="service-price">160 บาท</span></li>
                    <li>ม.มจร มหาจุฬา บ้านโคกสี <span className="service-price">250 บาท</span></li>
                    <li>โรงเรียนกีฬา <span className="service-price">250 บาท</span></li>
                    <li>โรงเรียนแก่นนคร <span className="service-price">130 บาท</span></li>
                    <li>โรงเรียนขามแก่นนคร <span className="service-price">160 บาท</span></li>
                    <li>โรงเรียนนครขอนแก่น <span className="service-price">140 บาท</span></li>
                    <li>โรงเรียนขอนแก่นวิทยายน <span className="service-price">120 บาท</span></li>
                    <li>วิทยาลัยเทคนิคขอนแก่น<span className="service-price">150 บาท</span></li>
                    <li>วิทยาลัยอาชีวะขอนแก่น<span className="service-price">140 บาท</span></li>
                    <li>วิทยาลัยการอาชีพขอนแก่น ท่าพระ <span className="service-price">200 บาท</span></li>
                    <li>บขส เก่า ขอนแก่น <span className="service-price">120 บาท</span></li>
                    <li>บขส 3 ขอนแก่น (บขสใหม่)<span className="service-price">130 บาท</span></li>
                    <li>ปรับอากาศ เก่า ขอนแก่น <span className="service-price">120 บาท</span></li>
                    <li>ขนส่งใน <span className="service-price">130 บาท</span></li>
                    <li>คิวนอก <span className="service-price">150 บาท</span></li>
                    <li>โรงพยาบาลขอนแก่น รพ.ศูนย์ขอนแก่น <span className="service-price">150 บาท</span></li>
                    <li>โรงพยาบาลศรีนครรินทร์ รพ.ศรี <span className="service-price">130 บาท</span></li>
                    <li>โรงพยาบาลราชพฤกษ์ <span className="service-price">120 บาท</span></li>

                    
                    <li>บ้านทุ่ม <span className="service-price">150 บาท</span></li>

                </ul>
            </div>
        </div>
    )
}