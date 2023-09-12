import "../css/travel.css"
import Nav from '../Nav';
import Header from "../Header";
import Footer from "../Footer";
const BlueLagoon = () => {
    return (
        <>
            <Header />
            <div class='maintravel'>
                <div className='contain'>
                    <div class='imgBox2'></div>
                </div>

                <div class='container margin-top'>
                    <div class="row">
                        <div class="col-lg-8 ">
                            <h1 class='display-1 fontTA my-5 '>Blue lagoon </h1>
                            <p class='padding-right lh-lg text-just'>Blue lagoon ภูผาม่าน จังหวัดขอนแก่น สระสีเขียวมรกตตัดกับริ้วลายหินปูนสีเทาของเหมืองหินเก่าของโรงโม่หิน
                                กลายเป็นภาพเงาสะท้อนน้ำที่งดงามอลังการ บวกกับสีเขียวของต้นไม้ที่อยู่รายล้อม บริเวณสระน้ำมีก้อนหินริมสระ ที่สามารถไปโพสต์ท่าถ่ายรูปเท่ มีเบลคกราวน์ที่มองเห็นภูเขาและสระน้ำสีเขียวได้แบบสุดปัง ให้ภาพบรรยากาศเหมือนอยู่ต่างประเทศ จึงกลายเป็นจุดเช็คอินถ่ายภาพแห่งภูผาม่าน ขอนแก่น ที่นักท่องเที่ยวนิยมมาถ่ายรูป 🍃 </p>
                            <p class='lh-lg font-bold'>ข้อมูลติดต่อ :</p>
                            <p class='lh-lg'>FB :Blue Lagoon ภูผาม่าน</p>
                            <p class='lh-lg'>🧭 เปิดให้บริการทุกวัน 06.00-19.00</p>
                            <p class='lh-lg'>☎️ โทร : 064 460 0705</p>
                            <p class='lh-lg mb-5'>📍 บ้านสองคอน ตำบลนาฝาย อำเภอภูผาม่าน จังหวัดขอนแก่น</p>
                            <div className="embed-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.240221143831!2d101.831856!3d16.664858299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3121939b2086c893%3A0x19bfb9ed22f07891!2zQmx1ZSBMYWdvb24g4Lig4Li54Lic4Liy4Lih4LmI4Liy4LiZ!5e0!3m2!1sth!2sth!4v1694413298303!5m2!1sth!2sth"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div class="padding-top col-lg-4 ">
                            <h2 class=' mb-5'>เรื่องราวล่าสุดจาก Blue lagoon</h2>
                            <div class="card mb-3 border-0">
                                <img src={require('../img/Blue_Lagoon4.jpg')} class="card-img-top border-img bg-shadow" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">สระมรกต unseenที่ภูผาม่าน</h5>
                                    <p class="card-text">หนึ่งในสถานที่ท่องเที่ยวคือที่นี่ “สระมรกต”เกิดจากการระเบิดหิน ของโรงโม่หินพอระเบิดหินไปเรื่อยๆ จนกลายเป็นแอ่งน้ำขนาดใหญ่ และกลายเป็นแหล่งท่องเที่ยวครั้งนี้มาตั้งแต่เช้า มาถึงประมาณ 07.00น. เพื่อจะได้เห็นภาพภูเขาสะท้อนอยู่ในวิวน้ำ พระอาทิตย์กำลังขึ้น ดูสวยงามดีครับ 🔋🍃</p>
                                    <div class='d-flex justify-content-between'>
                                        <p class="card-text"><small class="text-muted fw-bold">by BB (Premium Low Cost)</small></p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Place Reviews #1
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <div class="card bg-dark text-white border-img">
                                                        <img src={require('../img/Blue_Lagoon2.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">Blue​ Lagoon ภูผาม่าน​ ชัยภูมิ​ น้ำใส ฟ้าสวย</h5>
                                                            <p class="card-text">Blue​ Lagoon ภูผาม่าน
                                                                สถานที่สวยงาม น้ำสีสวย ท้องฟ้าสดใส
                                                                น่าจะเป็นแหล่งท่องเที่ยวที่เปิดได้ยังไม่นานนัก
                                                                เข้ามาจากถนนหมายเลข  12 พอสมควร
                                                                ทางค่อนข้างขรุขระ เป็นหลุม ถ้าฝนตกหรือฤดูฝนน่าจะค่อนข้างลำบากเลย
                                                                ถนนค่อนข้างแคบแต่ก็ไม่แออัด
                                                                มีจุดถ่ายรูป2-3จุด
                                                                หรือสามารถเดินไปอีกด้านหนึ่ง  จะได้มุมที่ต่างออกไปแตีต้องใช้ความระมัดระวังด้วยเพราะเป็นแอ่งลงไปลึกเลย
                                                            </p>
                                                            <div class='d-flex justify-content-between'>
                                                                <p class="card-text"><small class="text-white fw-bold">by There​ are Many​ Stories.</small></p>
                                                                <p class="card-text"><small class="text-white">Last updated 3 mins ago</small></p>
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
                                                        <img src={require('../img/Blue_Lagoon3.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">สระน้ำสีสวยงาม ถ่ายรูปสวย</h5>
                                                            <p class="card-text">สถานที่ท่องเที่ยวน่าจะเพิ่งได้ไม่นานนักตอนเดินทางไปจากอำเภอภูผาม่านจอดรถขนานไปกับแนวถนน ถ้าเป็นวันหยุดมีนักท่องเที่ยวมากน่าจะติดขัดบ้างสถานที่สวยงาม ตอนกลางวันแดดแรงแต่มีต้นไม้ให้ร่มเงาดี</p>
                                                            <div class='d-flex justify-content-between '>
                                                                <p class="card-text"><small class="text-white fw-bold ">by Do-Nath Memo</small></p>
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
                                                        <img src={require('../img/Blue_Lagoon5.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">Blue lagoon ภูผาม่าน Unseen สระมรกต ⛰️🏠</h5>
                                                            <p class="card-text">มุมถายภาพไฮไลท์ ก้อนหินริมสระ สามารถไปโพสต์ท่าถ่ายรูปเท่ มีเบลคกราวน์ที่มองเห็นภูเขาและสระน้ำสีเขียวได้แบบสุดปัง ถ้าอากาศสดใส คงได้รูปแบบปังกว่านี้มาก</p>
                                                            <div class='d-flex justify-content-between'>
                                                                <p class="card-text"><small class="text-white fw-bold">by paiduaykan</small></p>
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
            <Footer />
        </>
    )
}

export default BlueLagoon 