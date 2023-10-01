import { Link } from "react-router-dom"
import "./css/servicelist.css"

export default ()=>{
    return(
        <div className="service-list px-4">
            <div className="hero-wrap">
                <h1>บริการแท็กซี่</h1>
                <p className="describe">พูดคุยตกลงราคาได้ค่ะ ขอบคุณที่ใช้บริการ <i class="bi bi-emoji-smile-fill"></i> </p>
                {/* <img style={{
                    width:'100%',
                    display:'block',
                    height: '400px',
                    objectFit:'contain'
                }} src={require('./img/marker4.png')} alt="car"/> */}
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
                <ul className="detail-list">
                    <h2>เหมาแท็กซี่</h2>
                    <ul className="grid-2">
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินสุวรรณภูมิ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินภูเกต</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินดอนเมือง</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินอุดรธานี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินขอนแก่น</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สนามบินร้อยเอ็ด</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>พัทยา</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ตราด</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ขอนแก่น</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>กรุงเทพฯ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ระยอง</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ชลบุรี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>มหาสารคาม</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>อุดรธานี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ร้อยเอ็ด</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>โคราช</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>จันทบุรี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ลพบุรี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>อรัญประเทศ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สระแก้ว</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ภูเก็ต</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>มุกดาหาร</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>หนองคาย</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>กาฬสินธุ์</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>บึงกาฬ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>นครพนม</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>พิษณุโลก</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เชียงใหม่</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สุโขทัย</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เพชรบูรณ์</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ตราด</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เมืองเลย</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ชัยภูมิ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>อุบลราชธานี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>หนองบัวลำภู</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ชัยภูมิ</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สุรินทร์</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สุพรรณบุรี</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>ฉะเชิงเทรา</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>เชียงราย</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>สกลนคร</span></li>
                    <li><i class="bi bi-check-lg"></i> <span>อำนาจเจริญ</span></li>
                    </ul>
                </ul>
                <ul className="detail-list">
                    <h2>อัตราค่าบริการเหมาแท็กซี่</h2>
                    <li>เหมาแท็กซี่ไปอำเภอบ้านฝาง<span className="service-price">240 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอพระยืน<span className="service-price">250 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอบ้านแฮด<span className="service-price">320 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอน้ำพอง<span className="service-price">350 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอเชียงยืน<span className="service-price">350 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอซำสูง<span className="service-price">380 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอหนองเรือ<span className="service-price">450 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอบ้านไผ่<span className="service-price">450 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอโกสุมพิสัย<span className="service-price">450 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภออุบลรัตน์<span className="service-price">500 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอกระนวน<span className="service-price">550 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอมัญจาคีรี<span className="service-price">570 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอเขาสวนกวาง<span className="service-price">600 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอโนนศิลา<span className="service-price">620 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอภูเวียง<span className="service-price">650 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอกันทรวิชัย<span className="service-price">650 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอยางตลาด<span className="service-price">650 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอห้วยเม็ก<span className="service-price">650 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอชนบท<span className="service-price">720 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอพล<span className="service-price">780 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอเปือยน้อย<span className="service-price">790 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอชุมแพ<span className="service-price">800 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอโคกโพธิ์ไชย<span className="service-price">800 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอบรบือ<span className="service-price">800 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอโนนสังห์<span className="service-price">800 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอเวียงเก่า<span className="service-price">850 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอแวงใหญ่<span className="service-price">870 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอหนองนาคำ<span className="service-price">920 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอหนองสองห้อง<span className="service-price">960 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอกมลาไสย<span className="service-price">970 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอแวงน้อย<span className="service-price">980 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอสีชมพู<span className="service-price">1,100 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอจังหาร<span className="service-price">1,100 บาท</span></li>
                    <li>เหมาแท็กซี่ไปอำเภอภูผาม่าน<span className="service-price">1,200 บาท</span></li>
                </ul>
                

            </div>
        </div>
    )
}