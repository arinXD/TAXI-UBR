import "./css/travel.css"
import { useEffect, useState} from "react"; // Import useState hook
import Header from "./Header";
import Footer from "./Footer";
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

    return (
        <>
            <Header />
            <div class='maintravel'>
                <div className='contain'>
                    <div class={'imgBox '+travel.url}></div>
                </div>

                <div class='container margin-top'>
                    <div class="row">
                        <div class="col-lg-8 ">
                            <h1 class='display-1 fontTA my-5 '>{travel.title}</h1>
                            <p class='padding-right lh-lg text-just'>
                                {travel.content}
                            </p>
                            <p class='lh-lg font-bold'>ข้อมูลติดต่อ :</p>
                            <p class='lh-lg'>FB : {travel.fb}</p>
                            <p class='lh-lg'>🧭 {travel.time}</p>
                            <p class='lh-lg'>☎️ โทร : {travel.tel}</p>
                            <p class='lh-lg mb-5'>📍 {travel.location}</p>
                            <div className="embed-map">
                                <iframe src={travel.mapSrc}
                                    title="Google Maps"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div class="padding-top col-lg-4 ">
                            <h2 class=' mb-5'>{travel.storyTitle}</h2>
                            <div class="card mb-3 border-0">
                                <img
                                // src={require(travel.overAllImg)}
                                src={`${travel.storyImg}`}
                                class="card-img-top border-img bg-shadow"
                                alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{travel.overAllTitle}</h5>
                                    <p class="card-text">{travel.overAllContent}</p>
                                    <div class='d-flex justify-content-between'>
                                        <p class="card-text"><small class="text-muted fw-bold">by {travel.overAllAuthor}</small></p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
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
                                                        <div className="card-img-overlay">
                                                            <h5 className="card-title">{travel.review1Title}</h5>
                                                            <p className="card-text">{travel.review1Content}</p>
                                                            <div className='d-flex justify-content-between'>
                                                                <p className="card-text"><small className="text-white fw-bold">by {travel.review1Author}</small></p>
                                                                <p className="card-text"><small className="text-white">Last updated 3 mins ago</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Place Reviews #2
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <div class="card bg-dark text-white border-img">
                                                        <img src={travel.review2Img} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">{travel.review2Title}</h5>
                                                            <p class="card-text">{travel.review2Content}</p>
                                                            <div class='d-flex justify-content-between '>
                                                                <p class="card-text"><small class="text-white fw-bold ">by {travel.review2Author}</small></p>
                                                                <p class="card-text"><small class="text-white">Last updated 3 mins ago</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Place Reviews #3
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <div class="card bg-dark text-white border-img">
                                                        <img src={travel.review3Img} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">{travel.review3Title}</h5>
                                                            <p class="card-text">{travel.review3Content}</p>
                                                            <div class='d-flex justify-content-between'>
                                                                <p class="card-text"><small class="text-white fw-bold">by {travel.review3Author}</small></p>
                                                                <p class="card-text"><small class="text-white">Last updated 3 mins ago</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class='mt-5 text-white'></hr>
                    

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Travel 