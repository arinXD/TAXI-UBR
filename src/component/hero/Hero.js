import "../css/hero.css"
import hero from "../img/marker8.png"
import whatsApp from "../img/whatAppCut.png"
import bgVideo1 from "./video/hero_com.mp4";

import { useEffect, useState } from "react"

const Hero = () => {

    const [isVisible, setIsVisible] = useState(false);

    let backgroundImageStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("hero_2.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: "16px",
    };
    backgroundImageStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85))',
        borderRadius: "16px",
        position: "relative"
    };

    useEffect(() => {
        document.querySelector('.hero-img').style.opacity = '1'
    }, [])

    useEffect(() => {
        const delay = 130;
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className={`hero ${isVisible ? "slide-up active" : "slide-up"}`}>
            <div style={backgroundImageStyle}
                className="row gap-5 mb-5 p-5 justify-content-center align-items-center">
                <div className="hero-img-marker col-12 col-md-5 col-xl-5">
                    <img className="people" src={hero} alt="taxi ubr" />
                </div>
                <div className="slogan col-12 col-md-5 col-xl-5 text-white">
                    <h1 className="text-start text-white mb-5 text-center" style={{ fontWeight: "bold", fontSize: "2em", letterSpacing: ".065em" }}>&#8220; บริการรถเช่าพร้อมคนขับ &#8221;</h1>
                    <h2 className="text-white mb-5 text-start" style={{ width: "fit-content", margin: "auto" }}>
                        <span className="d-block mb-3 text-center" style={{ fontSize: ".8em" }}>ศูนย์แท็กซี่</span>
                        <span className="me-3 mb-2 d-inline-block">
                            <svg style={{ color: "#22c55e" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        บริการรถแท็กซี่ <br />
                        <span className="me-3 mb-2 d-inline-block">
                            <svg style={{ color: "#22c55e" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        แท็กซี่มิเตอร์ <br />
                        <span className="me-3 mb-2 d-inline-block">
                            <svg style={{ color: "#22c55e" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        เหมารถแท็กซี่ <br />
                        <span className="me-3 mb-2 d-inline-block">
                            <svg style={{ color: "#22c55e" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        เหมารถตู้ <br />
                        <span className="me-3 mb-2 d-inline-block">
                            <svg style={{ color: "#22c55e" }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        รับส่งทั่วประเทศ
                    </h2>
                    <p className="text-start" style={{ textIndent: "1em", textAlign: "justify" }}>ให้บริการรับส่งสนามบินจองล่วงหน้า ให้บริการนำเที่ยว แนะนำสถานที่ท่องเที่ยวที่น่าสนใจในขอนแก่น และทั่วประเทศ มีรถให้บริการ รถแท็กซี่รถส่วนบุคคล <br /><br /><i>เดินทางไปกับเราสะอาดปลอดภัย มั่นใจทุกเส้นทาง</i></p>
                </div>
                <div className="hero-img" alt="taxi ubr">
                    <video
                        id="hero-video"
                        loop
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            borderRadius: "16px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: 0,
                            left: 0,
                            opacity: 1,
                        }}
                    >
                        <source src={bgVideo1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="text-center fw-bold mb-4">WhatsApp</h2>
                    <img className="people" src={whatsApp} alt="taxi ubr whats app"
                        style={{
                            maxWidth: "100%",
                            height: '390px',
                            objectFit: "cover",
                            display: 'block',
                            margin: '0 auto',
                            backgroundColor: "black",
                            borderRadius: '5px',
                            padding: "0 4px 4px",
                        }}
                    />
                </div>
                <div className="col-lg-6" style={{ width: '293px', margin: "40px auto 0" }}>
                    <div className="row align-items-center justify-content-center h-100">
                        <div>
                            <div className='text-start mb-3'>
                                {/* <a className="text-decoration-none text-white" href="https://line.me/ti/p/2dm3XrAuz3?fbclid=IwAR3K1ezj47AhoW3OfEx-o3QUMUU5YBxCDionC6CC7i-ahmfqAKpzEWekxFQ">
                                    <div className='d-flex gap-3 align-items-center h5 mb-0 lh-base p-3' style={{ borderRadius: "8px", fontSize: "1.5em", backgroundColor: "#06C755" }}>
                                        <UilLine size="40" color="white" />
                                        <span className="fw-bold">@Snook</span>

                                    </div>
                                </a> */}
                                <a href="https://lin.ee/LgJ5lkh">
                                    <img className="w-100 h-auto" src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" border="0" />
                                </a>
                            </div>
                            <div className='text-center'>
                                <a className="text-decoration-none text-white" href="tel:+66952215764">
                                    <div className='d-flex gap-3 align-items-center justify-content-center h5 mb-0 lh-base p-3' style={{ borderRadius: "8px", height:"98.38px", fontSize: "1.5em", backgroundColor: "#00B900" }}>
                                        <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", }}>
                                            <div className="d-flex align-items-center justify-content-center" style={{ width: "55px",height:"45px", backgroundColor: "white", borderRadius: "8px" }}>
                                                <i className="bi bi-telephone-fill" style={{ color: "#06C755" }}></i>
                                            </div>
                                            {/* <UilPhone UilLine size="40" color="#06C755" /> */}
                                        </div>
                                        <span className="fw-bold h2 mb-0">095-221-5764</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
