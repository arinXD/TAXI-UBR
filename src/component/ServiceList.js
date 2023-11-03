import React from 'react';
import "./css/servicelist.css"
import BasicTable from './BasicTable';
import {
    UilBuilding, UilBusAlt, UilPlaneDeparture, UilSuitcase,
    UilTaxi, UilCarSideview, UilBusSchool, UilCar
} from '@iconscout/react-unicons'

const ServiceList = () => {
    const airport = [
        { no: 1, location: 'เซนทรัลขอนแก่น', price: 120 },
        { no: 2, location: 'ใน มข. มหาวิทยาลัยขอนแก่น', price: 120 },
        { no: 3, location: 'ม.ภาค', price: 120 },
        { no: 4, location: 'วิทยาลัย.เทคโนภาค', price: 120 },
        { no: 5, location: 'โรงเรียนขอนแก่นวิทยายน', price: 120 },
        { no: 6, location: 'บขส เก่า ขอนแก่น', price: 120 },
        { no: 7, location: 'ปรับอากาศ เก่า ขอนแก่น', price: 120 },
        { no: 8, location: 'โรงพยาบาลราชพฤกษ์', price: 120 },
        { no: 9, location: 'โรงเรียนแก่นนคร', price: 130 },
        { no: 10, location: 'บขส 3 ขอนแก่น (บขสใหม่)', price: 130 },
        { no: 11, location: 'ขนส่งใน', price: 130 },
        { no: 12, location: 'โรงพยาบาลศรีนครรินทร์ รพ.ศรี', price: 130 },
        { no: 13, location: 'ตลาดบางลำภู', price: 140 },
        { no: 14, location: 'ตลาดจอมพล', price: 140 },
        { no: 15, location: 'โรงเรียนนครขอนแก่น', price: 140 },
        { no: 16, location: 'วิทยาลัยอาชีวะขอนแก่', price: 140 },
        { no: 17, location: 'ม.ศรีปทุม', price: 150 },
        { no: 18, location: 'วิทยาลัยเทคนิคขอนแก่', price: 150 },
        { no: 19, location: 'คิวนอก', price: 150 },
        { no: 20, location: 'โรงพยาบาลขอนแก่น รพ.ศูนย์ขอนแก่น', price: 150 },
        { no: 21, location: 'บ้านทุ่ม', price: 150 },
        { no: 22, location: 'โลตัสประตูน้ำ โลตัสเก่า', price: 160 },
        { no: 23, location: 'ตลาดเคหะเมืองเก่า', price: 160 },
        { no: 24, location: 'ม.ราชมงคล', price: 160 },
        { no: 25, location: 'โรงเรียนขามแก่นนคร', price: 160 },
        { no: 26, location: 'หลัง มข มหาวิทยาลัยขอนแก่น', price: 170 },
        { no: 27, location: 'โลตัสเอ็กตร้า บ้านโนนม่วง', price: 170 },
        { no: 28, location: 'ตลาดประตูน้ำ โลตัสเก่า', price: 170 },
        { no: 29, location: 'ตลาดอู่ฟู่', price: 170 },
        { no: 30, location: 'ตลาดบ้านหนองใหญ่', price: 180 },
        { no: 31, location: 'วิทยาลัยการอาชีพขอนแก่น ท่าพระ', price: 200 },
        { no: 32, location: 'บ้านสำราญ', price: 220 },
        { no: 33, location: 'ขนส่งนอก บ้านสำราญ', price: 250 },
        { no: 34, location: 'ม.มจร มหาจุฬา บ้านโคกสี', price: 250 },
        { no: 35, location: 'โรงเรียนกีฬา', price: 250 },
        { no: 36, location: 'บ้านฝาง', price: 260 },
        { no: 37, location: 'โรงพยาบาลสิรินธร บ้านโนนสมบูรณ์', price: 320 },
        { no: 38, location: 'บ้านไผ่', price: 580 },
    ]
    const taxi = [
        { no: 1, location: 'อำเภอบ้านฝาง', price: 240 },
        { no: 2, location: 'อำเภอพระยืน', price: 250 },
        { no: 3, location: 'อำเภอบ้านแฮด', price: 320 },
        { no: 4, location: 'อำเภอน้ำพอง', price: 350 },
        { no: 5, location: 'อำเภอเชียงยืน', price: 350 },
        { no: 6, location: 'อำเภอซำสูง', price: 380 },
        { no: 7, location: 'อำเภอหนองเรือ', price: 450 },
        { no: 8, location: 'อำเภอบ้านไผ่', price: 450 },
        { no: 9, location: 'อำเภอโกสุมพิสัย', price: 450 },
        { no: 10, location: 'อำเภออุบลรัตน์', price: 500 },
        { no: 11, location: 'อำเภอกระนวน', price: 550 },
        { no: 12, location: 'อำเภอมัญจาคีรี', price: 570 },
        { no: 13, location: 'อำเภอเขาสวนกวาง', price: 600 },
        { no: 14, location: 'อำเภอโนนศิลา', price: 620 },
        { no: 15, location: 'อำเภอภูเวียง', price: 650 },
        { no: 16, location: 'อำเภอกันทรวิชัย', price: 650 },
        { no: 17, location: 'อำเภอยางตลาด', price: 650 },
        { no: 18, location: 'อำเภอห้วยเม็ก', price: 650 },
        { no: 19, location: 'อำเภอชนบท', price: 720 },
        { no: 20, location: 'อำเภอพล', price: 780 },
        { no: 21, location: 'อำเภอเปือยน้อย', price: 790 },
        { no: 22, location: 'อำเภอชุมแพ', price: 800 },
        { no: 23, location: 'อำเภอโคกโพธิ์ไชย', price: 800 },
        { no: 24, location: 'อำเภอบรบือ', price: 800 },
        { no: 25, location: 'อำเภอโนนสังห์', price: 800 },
        { no: 26, location: 'อำเภอเวียงเก่า', price: 850 },
        { no: 27, location: 'อำเภอแวงใหญ่', price: 870 },
        { no: 28, location: 'อำเภอหนองนาคำ', price: 920 },
        { no: 29, location: 'อำเภอหนองสองห้อง', price: 960 },
        { no: 30, location: 'อำเภอกมลาไสย', price: 970 },
        { no: 31, location: 'อำเภอแวงน้อย', price: 980 },
        { no: 32, location: 'อำเภอสีชมพู', price: 1100 },
        { no: 33, location: 'อำเภอจังหาร', price: 1100 },
        { no: 34, location: 'อำเภอภูผาม่าน', price: 1200 },
    ]
    return (
        <div className="service-list">
            <div className="hero-wrap mb-4">
                <h1>บริการแท็กซี่</h1>
                <p className="describe">พูดคุยตกลงราคาได้ค่ะ ขอบคุณที่ใช้บริการ </p>
            </div>
            <div className="service-wrap">
                <h4 className=''>รูปแบบการให้บริการ</h4>
                <ul className="">
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilSuitcase color="white" /></div> <span>ส่วนตัว</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilBusAlt color="white" /></div> <span>บขส 3 ขอนแก่น</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilBuilding color="white" /></div> <span>ตัวเมืองขอนแก่น</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilTaxi color="white" /></div> <span>แท็กซี่ขนาดใหญ่ 7 ที่นั่ง</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilCarSideview color="white" /></div> <span>รับส่งต่างจังหวัด ต่างอำเภอ ทั่วไทย</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilCar color="white" /></div> <span>เหมาแท็กซี่ไปต่างจังหวัด ต่างอำเภอ</span></li>
                    <li className='mb-2 py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilBusSchool color="white" /></div> <span>เหมารถ เหมารถตู้ เช่ารถตู้</span></li>
                    <li className='py-2 px-2 d-flex align-items-center'><div className="circle me-3 "><UilPlaneDeparture color="white" /></div>  <span>สนามบินสุวรรณภูมิ ภูเก็ต ดอนเมือง อุดรธานี ขอนแก่น ร้อยเอ็ด</span></li>
                </ul>
                <h5 className=''>อัตราค่าบริการจากสนามบินขอนแก่น</h5>
                <BasicTable data={airport} />
                <div className="mt-4">
                    <h5 className='mb-0'>เหมาแท็กซี่</h5>
                </div>
                <BasicTable data={taxi} />
            </div>
        </div>
    )
}

export default ServiceList

{/* <ul className="grid-2">
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินสุวรรณภูมิ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินภูเกต</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินดอนเมือง</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินอุดรธานี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินขอนแก่น</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สนามบินร้อยเอ็ด</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>พัทยา</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ตราด</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ขอนแก่น</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>กรุงเทพฯ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ระยอง</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ชลบุรี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>มหาสารคาม</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>อุดรธานี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ร้อยเอ็ด</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>โคราช</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>จันทบุรี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ลพบุรี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>อรัญประเทศ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สระแก้ว</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ภูเก็ต</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>มุกดาหาร</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>หนองคาย</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>กาฬสินธุ์</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>บึงกาฬ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>นครพนม</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>พิษณุโลก</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>เชียงใหม่</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สุโขทัย</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>เพชรบูรณ์</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ตราด</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>เมืองเลย</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ชัยภูมิ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>อุบลราชธานี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>หนองบัวลำภู</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ชัยภูมิ</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สุรินทร์</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สุพรรณบุรี</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>ฉะเชิงเทรา</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>เชียงราย</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>สกลนคร</span></li>
                    <li className="mb-2 py-2 px-2 d-flex align-items-center"><i className="bi bi-check-lg"></i> <span>อำนาจเจริญ</span></li>
                </ul> */}