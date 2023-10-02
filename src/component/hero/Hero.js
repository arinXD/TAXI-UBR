import "../css/hero.css"
import hero from "../img/marker4.png"
import whatsApp from "../img/whatAppCut.png"
import { useEffect } from "react"
const Hero = ()=>{

    useEffect(()=>{
        document.querySelector('.hero-img').style.opacity='1'
    }, [])
    return(
        <section className="hero">
            <div className="slogan">
                <h1>บริการรถแท็กซี่ เหมารถตู้ เหมารถแท็กซี่ รับส่ง ทั่วประเทศ</h1>
                <p>ให้บริการนำเที่ยวและแนะนำสถานที่ท่องเที่ยวที่น่าสนใจในขอนแก่น</p>
            </div>
            <div className="hero-img">
                <img className="people" src={hero}/>
            </div>
            <div className="mt-5">
                <h2 className="text-center fw-bold mb-4">WhatsApp</h2>
                <img className="people" src={whatsApp}
                style={{
                    maxWidth:"100%",
                    height:'390px',
                    objectFit:"contain",
                    display:'block',
                    margin:'0 auto',
                    backgroundColor:"black",
                    borderRadius:'5px',
                    padding: "0 4px 4px",
                    // border:"1px solid #b3b3b3a1"
                }}
                />
            </div>
            <div className="mt-4" style={{width:'293px', margin:"0 auto"}}>
                <div className='text-start text dark' style={{borderRadius:"8px", borderBottom:"rgba(0, 0, 0, 0.05)"}}>
                    {/* <h2 className='fw-bold' style={{color:"#06C755"}}>@Line</h2> */}
                    <p className='h5 mt-3 lh-base py-3 px-2 rounded' style={{fontSize:"1.5em"}}>
                        <i style={{color:"#06C755",marginRight:"1.8em"}} class="bi bi-line"></i>
                        <a className="text-decoration-none" href="https://line.me/ti/p/2dm3XrAuz3?fbclid=IwAR3K1ezj47AhoW3OfEx-o3QUMUU5YBxCDionC6CC7i-ahmfqAKpzEWekxFQ">@Snook</a>
                    </p>
                </div>
                <div className='text-start text dark' style={{borderRadius:"8px", borderBottom:"rgba(0, 0, 0, 0.05)"}}>
                    {/* <h2 className='fw-bold'>เบอร์โทรศัพท์</h2> */}
                    <p className='h5 lh-base py-3 px-2 rounded' style={{fontSize:"1.5em"}}>
                        <i style={{marginRight:"1.8em"}} class="bi bi-telephone-fill"></i>
                        <a className="text-decoration-none" href="tel:0951795925">095-179-5925</a>
                        </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
