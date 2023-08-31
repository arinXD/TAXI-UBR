import "./css/map.css"
const Map = ()=>{
    return(
        <section className="map">
            <h1>สถานที่ติดต่อ</h1>
            <p>นายศุภณัฐ ดวงสมร ตัวตึงชุติพาแกรนด์เฮ้าส์ <br/> ตำบลศิลา อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
            <div className="embed-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.917678860823!2d102.8160750251601!3d16.48387235332741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a9a09d66deb%3A0xbb594621b16480ff!2z4LiK4Li44LiV4Li04Lie4Liy4LmB4LiB4Lij4LiZ4LiU4LmM4LmA4Liu4LmJ4Liy4Liq4LmM!5e0!3m2!1sth!2sth!4v1692083521344!5m2!1sth!2sth"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
export default Map