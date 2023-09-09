import DestinationItem from "./DestinationItem"
import "./css/destination.css"
let data = [
    {
        imgPath:"./img/destination/hai_na_garden_house.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Hai-Na Garden House"
    },
    {
        imgPath:"./img/destination/hai_na_garden_house.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Hai-Na Garden House"
    },
    {
        imgPath:"./img/destination/hai_na_garden_house.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Hai-Na Garden House"
    },
    {
        imgPath:"./img/destination/hai_na_garden_house.jpg",
        location:"ตำบลภูผาม่าน อำเภอภูผาม่าน ขอนแก่น",
        title:"Hai-Na Garden House"
    },

]

const Destination = ()=>{
    return(
        <section class="destination">
            <h1>สถานที่ท่องเที่ยว</h1>
            <p>พักผ่อนเพื่อหาประสบการณ์ที่สนุกสนานในเมืองขอนแก่นกับเรา !</p>
            <ul class="destination-list">
            {
                data.map((e) => {
                    return <DestinationItem {...e}/>
                })
            }
            </ul>
        </section>
    )
}

export default Destination