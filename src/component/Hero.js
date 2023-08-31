import "./css/hero.css"
import place1 from "./img/place1.jpg"
import place2 from "./img/place2.jpg"
const Hero = ()=>{
    return(
        <section className="hero">
            <div className="slogan">
                <h1>Start your journey <br/> by one click, explore <br/> realm of Khon Kaen!</h1>
                <p>ให้บริการนำเที่ยวและแนะนำสถานที่ท่องเที่ยวที่น่าสนใจในขอนแก่น</p>
            </div>
            <div className="hero-img">
                <p className="hero icon1">
                    <i class="bi bi-train-front-fill"></i>
                </p>
                <p className="hero icon2">
                    <i class="bi bi-airplane-fill"></i>
                    <span>Khon Kaen</span>
                </p>
                <div className="place banner1">
                    <img src={place1}/>
                    <p className="title">
                        โฮมสเตย์ตากะยาย ภูผาม่าน
                    </p>
                    <p className="location">
                        <i class="bi bi-geo-alt-fill" style={{color:"#42a7c3"}}></i>
                        <span>อำเภอภูผาม่าน ขอนแก่น</span>
                    </p>
                </div>
                <div className="place banner2">
                    <img src={place2}/>
                    <p className="title">
                        คัม ชาบู ปิ้งย่าง โคขุนโพนยางคำ
                    </p>
                    <p className="location">
                        <i class="bi bi-geo-alt-fill" style={{color:"#42a7c3"}}></i>
                        <span>อำเภอเมืองขอนแก่น ขอนแก่น</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
