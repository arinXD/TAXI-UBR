import "../css/hero.css"
import hero from "../img/marker5.jpg"
import whatsApp from "../img/whatAppCut.png"
import bgVideo1 from "./video/hero.mp4";
import bgVideo2 from "./video/hero2.mp4";
import bgVideo3 from "./video/hero3.mp4";
import { useEffect, useState } from "react"
const videoSources = [bgVideo1, bgVideo2, bgVideo3];
const Hero = ()=>{

    const [isVisible, setIsVisible] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    let backgroundImageStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url("hero_2.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: "16px",
    };
    backgroundImageStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45))',
        borderRadius: "16px",
        position:"relative"
    };

    useEffect(()=>{
        document.querySelector('.hero-img').style.opacity='1'
    }, [])
    
    useEffect(() => {
        const delay = 130;
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);
    const handleVideoEnded = () => {
        console.log(currentVideoIndex);
    
        // Calculate the next video index
        const nextVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    
        console.log(nextVideoIndex);
    
        // Get the video element
        const videoElement = document.getElementById('hero-video');
    
        if (videoElement) {
            // Update the video source to the next video
            videoElement.src = videoSources[nextVideoIndex];
    
            // Listen for the 'canplaythrough' event to start playing the new video
            videoElement.addEventListener('canplaythrough', () => {
                videoElement.play().catch(error => {
                    console.error('Error playing video:', error);
                });
            }, { once: true });  // Listen only once
        }
    
        // Update the current video index
        setCurrentVideoIndex(nextVideoIndex);
    };
    
    // const handleVideoEnded = () => {
    //     console.log(currentVideoIndex);
    //     let id=0;
    //     if(currentVideoIndex===0){
    //         id++;
    //     }
    //     else if(currentVideoIndex === videoSources.length - 1){
    //         id = 0;
    //     }else{
    //         id = currentVideoIndex+1;
    //     }
    //     console.log(id);
    //     setCurrentVideoIndex(id)
    //     const videoElement = document.getElementById('hero-video');

    //     if (videoElement) {
    //         videoElement.src = videoSources[currentVideoIndex]
    //         videoElement.play().catch(error => {
    //             console.error('Error playing video:', error);
    //         });
    //     }
    // };

    return(
        <section className="hero">
            <div className="slogan">
                <h1>บริการแท็กซี่ เหมารถตู้ เหมารถแท็กซี่ รับส่ง ทั่วประเทศ</h1>
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
                    objectFit:"cover",
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
                {/* <div className="hero-img-marker col-12 col-xl-5 ">
                    <img className="people" src={hero}/>
                </div> */}
                <div className="hero-img">
                <video
                    id="hero-video"
                    autoPlay
                    muted
                    onEnded={handleVideoEnded}
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
                    <source src={videoSources[currentVideoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="text-center fw-bold mb-4">WhatsApp</h2>
                    <img className="people" src={whatsApp}
                    style={{
                        maxWidth:"100%",
                        height:'390px',
                        objectFit:"cover",
                        display:'block',
                        margin:'0 auto',
                        backgroundColor:"black",
                        borderRadius:'5px',
                        padding: "0 4px 4px",
                    }}
                    />
                </div>
                <div className="col-lg-6" style={{width:'293px', margin:"0 auto"}}>
                    <div className='text-start text dark' style={{borderRadius:"8px", borderBottom:"rgba(0, 0, 0, 0.05)"}}>
                        <p className='h5 mt-3 lh-base py-3 px-2 rounded' style={{fontSize:"1.5em"}}>
                            <i style={{color:"#06C755",marginRight:"1.8em"}} className="bi bi-line"></i>
                            <a className="text-decoration-none" href="https://line.me/ti/p/2dm3XrAuz3?fbclid=IwAR3K1ezj47AhoW3OfEx-o3QUMUU5YBxCDionC6CC7i-ahmfqAKpzEWekxFQ">@Snook</a>
                        </p>
                    </div>
                    <div className='text-start text dark' style={{borderRadius:"8px", borderBottom:"rgba(0, 0, 0, 0.05)"}}>
                        <p className='h5 lh-base py-3 px-2 rounded' style={{fontSize:"1.5em"}}>
                            <i style={{marginRight:"1.8em"}} className="bi bi-telephone-fill"></i>
                            <a className="text-decoration-none" href="tel:0951795925">095-179-5925</a>
                            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
