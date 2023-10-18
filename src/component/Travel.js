import "./css/travel.css"
import { useEffect, useState} from "react"; // Import useState hook
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const travelData = require('./travelData')

const Travel = () => {
    const [travel, setTravel] = useState("")
    useEffect(() => {
        const currentURL = window.location.href;
        const url = currentURL.replace(`${window.location.protocol}//${window.location.host}/`, '');
        var foundValue = travelData.filter(obj=>obj.url===url)[0]
        setTravel(foundValue)
        console.log(currentURL);
    }, []);
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header />
            <div className='maintravel'>
                <div className='contain'>
                    <div className={'imgBox '+travel.url}></div>
                </div>


                <div className='container margin-top mt-1'>
                    {/* breadcrumb */}
                    <nav aria-label="breadcrumb mt-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/tour" className="text-decoration-none">สถานที่ท่องเที่ยว</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{travel.title}</li>
                        </ol>
                    </nav>
                    
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1 className='display-1 fontTA my-5 '>{travel.title}</h1>
                            <p className='padding-right lh-lg text-just'>
                                {travel.content}
                            </p>
                            <p className='lh-lg font-bold'>ข้อมูลติดต่อ :</p>
                            <p className='lh-lg'>FB : {travel.fb}</p>
                            <p className='lh-lg'>🧭 {travel.time}</p>
                            <p className='lh-lg'>☎️ โทร : {travel.tel}</p>
                            <p className='lh-lg mb-5'>📍 {travel.location}</p>
                            <div className="embed-map">
                                <iframe className="w-100" style={{height:"20rem"}} src={travel.mapSrc}
                                    title="Google Maps"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="padding-top col-lg-4 ">
                            <h2 className=' mb-5'>{travel.storyTitle}</h2>
                            <div className="card mb-3 border-0">
                                <img
                                // src={require(travel.overAllImg)}
                                src={`${travel.storyImg}`}
                                className="card-img-top border-img bg-shadow"
                                alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{travel.overAllTitle}</h5>
                                    <p className="card-text mb-3">{travel.overAllContent}</p>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Place Reviews #1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className="card bg-dark text-white border-img">
                                                        <img src={travel.review1Img} className="card-img border-img bg-shadow" alt="..."></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Place Reviews #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className="card bg-dark text-white border-img">
                                                        <img src={travel.review2Img} className="card-img border-img bg-shadow" alt="..."></img>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Place Reviews #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <div className="card bg-dark text-white border-img">
                                                        <img src={travel.review3Img} className="card-img border-img bg-shadow" alt="..."></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-5 text-white'></hr>
                    

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Travel 