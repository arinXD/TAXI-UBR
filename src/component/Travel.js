import "./css/travel.css"
import Nav from './Nav';

const Travel = () => {
    return (
        <>
            <Nav />
            <div class='maintravel'>
                <div className='contain'>
                    <div class='imgBox'></div>
                </div>

                <div class='container margin-top'>
                    <div class="row">
                        <div class="col-lg-8 ">
                            <h1 class='display-1 fontTA my-5 '>TAKAYAI </h1>
                            <p class='padding-right lh-lg text-just'>คาเฟ่เปิดใหม่ขอนแก่น อ.ภูผาม่าน สไตล์มินิมอล ท่ามกลางหุบเขา สวยโดดเด่นด้วยโทนสีขาว มุมถ่ายรูปเยอะมาก ใกล้ชิดกับธรรมชาติ ฟีลดีมากมากค่า ทั้งโซนindoor และoutdoor
                                นอกจากคาเฟ่ชิคๆ แล้ว ใกล้ๆกัน ยังมีลานกางเต้นท์ และโฮมสเตย์ตากะยาย มีหมูกระทะรสเด็ด ให้เพื่อนๆได้ฟินดื่มด่ำกับธรรมชาติ ร่วมก๊วนปาร์ตี้กับเดอะแก็งค์ หรือครอบครัว ได้อย่างจุใจ ภูผาม่าน ก็แค่ปากซอย จิบกาแฟชมค้างคาวต้องที่นี่เลย ⛺️🏔</p>
                            <p class='lh-lg font-bold'>ข้อมูลติดต่อ :</p>
                            <p class='lh-lg'>FB :Takayai cafe</p>
                            <p class='lh-lg'>🧭 เปิดให้บริการทุกวัน 09.00-18.00</p>
                            <p class='lh-lg'>☎️ โทร : 0610598337, 0831441377</p>
                            <p class='lh-lg mb-5'>📍 ร้านตั้งอยู่ก่อนถึงถ้ำค้างคาว อำเภอภูผาม่าน จังหวัดขอนแก่น อยู่ภายใน โฮมสเตย์ตากะยาย</p>
                            <div className="embed-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.343651895081!2d101.902361!3d16.6596781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31218d4d5be674ed%3A0x4391dac7bf891955!2z4LmC4Liu4Lih4Liq4LmA4LiV4Lii4LmM4LiV4Liy4LiB4Liw4Lii4Liy4LiiIOC4oOC4ueC4nOC4suC4oeC5iOC4suC4mQ!5e0!3m2!1sth!2sth!4v1694161054054!5m2!1sth!2sth"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div class="padding-top col-lg-4 ">
                            <h2 class=' mb-5'>เรื่องราวล่าสุดจาก Takayai Café</h2>
                            <div class="card mb-3 border-0">
                                <img src={require('../component/img/takayai6.jpg')} class="card-img-top border-img bg-shadow" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">รีวิว คาเฟ่ + ที่พัก #แบกเป้เที่ยว</h5>
                                    <p class="card-text">เหตุการณ์ครั้งนี้เกิดจากการเปิดไปเจอคลิปนึงใน Tiktok มา หมอกลอยเต็มท้องฟ้า ภูเขา มันน่าโดนจริงๆ บวกกับการที่ทำงานหนักมาหลายอาทิตย์ อยากออกไปหาที่นอนงีบเงียบๆเจอธรรมชาติ ชาร์จแบตให้ตัวเอง ตัดสินใจไปออกเดินทางเลยเลย 🔋🍃</p>
                                    <div class='d-flex justify-content-between'>
                                        <p class="card-text"><small class="text-muted fw-bold">by หลงทาง กางเต็นท์</small></p>
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
                                                        <img src={require('../component/img/takayai3.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">โฮมสเตย์ตากะยาย ภูผาม่าน</h5>
                                                            <p class="card-text">วันธรรมดาที่เงียบสงบ ดูค้างคาวที่ออกมาจากถ้ำ ช่วงเย็นๆ อากาศเย็นๆ ลมอ่อนๆ แสงแดดกำลังดี
                                                                สูดบรรยากาศเข้าเต็มปอด ช่างสดชื่นเหลือเกิน
                                                                เช้าๆอุณหภูมิลงต่ำถึง12องศา
                                                                ความเงียบสงบกับฉากภูเขาหินปูนลูกนี้ ทำให้ผู้คนที่มาเยือนมากมาย ฮีลใจไปตามๆกัน</p>
                                                            <div class='d-flex justify-content-between'>
                                                                <p class="card-text"><small class="text-white fw-bold">by รีวิวบ้านๆ</small></p>
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
                                                        <img src={require('../component/img/takayai4.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">ตากะยาย TAKAYAI</h5>
                                                            <p class="card-text">โฮมสเตย์ตายกะยายมีมุมถ่ายรูปเยอะมากสายคาเฟ่ห้ามพลาดมีเครื่องดื่มและลานกางเต้นท์ให้ด้วยชิวสุดๆ อีกทั้งยังมีร้านหมูกะทะรสเด็ดให้เพื่อนๆได้ฟินดื่มดํ่ากับธรรมชาติเป็นทั้งที่พักและคาเฟ่ไปในตัว</p>
                                                            <div class='d-flex justify-content-between '>
                                                                <p class="card-text"><small class="text-white fw-bold ">by _TI***WK</small></p>
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
                                                        <img src={require('../component/img/takayai5.jpg')} class="card-img border-img bg-shadow" alt="..."></img>
                                                        <div class="card-img-overlay">
                                                            <h5 class="card-title">โฮมสเตย์ตากะยาย ภูผาม่าน ⛰️🏠</h5>
                                                            <p class="card-text">ช่วงหน้าฝน ใครกำลังจะออกไปเที่ยวภูผาม่าน ขอนแก่น <br></br>เราขอแนะนำที่พักสักหน่อย วิวดี ติดกับผาม่านเลยยย 🤩</p>
                                                            <div class='d-flex justify-content-between'>
                                                                <p class="card-text"><small class="text-white fw-bold">by nook.ishere</small></p>
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
                    {/* <hr class='mb-5'></hr> */}
                    tes

                </div>

            </div>
        </>
    )
}

export default Travel 