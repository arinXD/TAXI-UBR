import DestinationItem from "./DestinationItem"
import "./css/destination.css"
import { useState } from "react"; // Import useState hook
import React from "react";

let data = [
    {
        link:"/bluelagoon",
        imgPath:"./img/Blue_Lagoon1.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Blue Lagoon",
    },
    {
        link:"/takayai",
        imgPath:"./img/takayai.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Takayai Cafe"
    },
    {
        link:"/phamanfun",
        imgPath:"./img/Phamanfun2.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"ผาม่านฝัน"
    },
    {
        link:"/haina",
        imgPath:"./img/destination/hai_na_garden_house.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Hai-Na Garden House"
    },
    {
        link:"/changarena",
        imgPath:"./img/Chang_Arena_Buriram4.jpg",
        location:"ตำบลอิสาณ อำเภอเมืองบุรีรัมย์ บุรีรัมย์",
        title:"ช้างอารีนา"
    },
    {
        link:"/watphasonkaew",
        imgPath:"./img/Wat_Pha_Son_Kaew2.jpg",
        location:"ตำบลแคมป์สน อำเภอเขาค้อ เพชรบูรณ์",
        title:"วัดผาซ่อนแก้ว"
    },
    {
        link:"/ubonrat",
        imgPath:"./img/Ubonrat_Dam1.jpg",
        location:"อำเภออุบลรัตน์ ขอนแก่น",
        title:"เขื่อนอุบลรัตน์"
    },
    {
        link:"/khaokho",
        imgPath:"./img/Khao_Kho2.jpg",
        location:"อำเภอเขาค้อ ตำบลแคมป์สน เพชรบูรณ์",
        title:"เขาค้อ"
    },
    {
        link:"/phuthapbuek",
        imgPath:"./img/Phu_Thap_Buek5.jpg",
        location:"ตำบลวังบาล เพชรบูรณ์",
        title:"ภูทับเบิก"
    },
    {
        link:"/airport",
        imgPath:"./img/Khon_Kaen_Airport1.jpg",
        location:"ตำบลบ้านเป็ด อำเภอเมืองขอนแก่น ขอนแก่น",
        title:"สนามบินขอนแก่น"
    },

]

const Destination = () => {
    const [showMore, setShowMore] = useState(false); // State to track whether to show more items

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <section class="destination">
                <h1>สถานที่ท่องเที่ยว</h1>
                <h5>พักผ่อนเพื่อหาประสบการณ์ที่สนุกสนานในเมืองขอนแก่นกับเรา !</h5>
                <ul class="destination-list">
                    {data.slice(0, showMore ? data.length : 8).map((e, index) => {
                        return <DestinationItem key={index} {...e} />;
                    })}
                </ul>
                {data.length > 8 && (
                    <button onClick={toggleShowMore}>
                        {showMore ? <i class="bi bi-arrow-up-circle pe-2"></i> : <i class="bi bi-arrow-down-circle pe-2"></i>}{" "}
                        {showMore ? "Show less" : "Select more"}
                    </button>
                )}
            </section>
        </>
    );
}


export default Destination