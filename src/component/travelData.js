const travelData = [
    {
        url:"bluelagoon",
        title:"Blue Lagoon",
    }
    ,{
        url: "phamanfun",
        title:"ผาม่านฝัน",
    }
    ,{
        url: "haina",
        title:"Hai-Na Garden House",
    }
    ,{
        url: "changarena",
        title:"ช้างอารีนา",
    }
    ,{
        url: "watphasonkaew",
        title:"วัดผาซ่อนแก้ว",
    }
    ,{
        url: "ubonrat",
        title:"เขื่อนอุบลรัตน์",
    }
    ,{
        url: "khaokho",
        title:"เขาค้อ",
    }
    ,{
        url: "phuthapbuek",
        title:"ภูทับเบิก",
    }
    ,{
        url: "airport",
        title:"สนามบินขอนแก่น",
    }
    ,{
        url: "takayai",
        title:"TAKAYAI",
        content:`คาเฟ่เปิดใหม่ขอนแก่น อ.ภูผาม่าน สไตล์มินิมอล ท่ามกลางหุบเขา สวยโดดเด่นด้วยโทนสีขาว มุมถ่ายรูปเยอะมาก ใกล้ชิดกับธรรมชาติ ฟีลดีมากมากค่า ทั้งโซนindoor และoutdoor
        นอกจากคาเฟ่ชิคๆ แล้ว ใกล้ๆกัน ยังมีลานกางเต้นท์ และโฮมสเตย์ตากะยาย มีหมูกระทะรสเด็ด ให้เพื่อนๆได้ฟินดื่มด่ำกับธรรมชาติ ร่วมก๊วนปาร์ตี้กับเดอะแก็งค์ หรือครอบครัว ได้อย่างจุใจ ภูผาม่าน ก็แค่ปากซอย จิบกาแฟชมค้างคาวต้องที่นี่เลย ⛺️🏔`,
        
        fb:"Takayai cafe",
        time:"เปิดให้บริการทุกวัน 09.00-18.00",
        tel:'0610598337, 0831441377',
        location:'ร้านตั้งอยู่ก่อนถึงถ้ำค้างคาว อำเภอภูผาม่าน จังหวัดขอนแก่น อยู่ภายใน โฮมสเตย์ตากะยาย',
        
        mapSrc:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.343651895081!2d101.902361!3d16.6596781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31218d4d5be674ed%3A0x4391dac7bf891955!2z4LmC4Liu4Lih4Liq4LmA4LiV4Lii4LmM4LiV4Liy4LiB4Liw4Lii4Liy4LiiIOC4oOC4ueC4nOC4suC4oeC5iOC4suC4mQ!5e0!3m2!1sth!2sth!4v1694161054054!5m2!1sth!2sth',
        
        storyTitle:"เรื่องราวล่าสุดจาก Takayai Café",
        storyImg:"./travel/takayai6.jpg",
        
        overAllTitle:"รีวิว คาเฟ่ + ที่พัก #แบกเป้เที่ยว",
        overAllContent:"เหตุการณ์ครั้งนี้เกิดจากการเปิดไปเจอคลิปนึงใน Tiktok มา หมอกลอยเต็มท้องฟ้า ภูเขา มันน่าโดนจริงๆ บวกกับการที่ทำงานหนักมาหลายอาทิตย์ อยากออกไปหาที่นอนงีบเงียบๆเจอธรรมชาติ ชาร์จแบตให้ตัวเอง ตัดสินใจไปออกเดินทางเลยเลย 🔋🍃",
        overAllAuthor:"หลงทาง กางเต็นท์",
        overAllUpdateTime:"Last updated 3 mins ago",
        
        review1Img:"./travel/takayai3.jpg",
        review1Title:"โฮมสเตย์ตากะยาย ภูผาม่าน",
        review1Content:"วันธรรมดาที่เงียบสงบ ดูค้างคาวที่ออกมาจากถ้ำ ช่วงเย็นๆ อากาศเย็นๆ ลมอ่อนๆ แสงแดดกำลังดี"+
                "สูดบรรยากาศเข้าเต็มปอด ช่างสดชื่นเหลือเกิน"+
                "เช้าๆอุณหภูมิลงต่ำถึง12องศา"+
                "ความเงียบสงบกับฉากภูเขาหินปูนลูกนี้ ทำให้ผู้คนที่มาเยือนมากมาย ฮีลใจไปตามๆกัน",
        review1Author:"รีวิวบ้านๆ",
        review1UpdateTime:"Last updated 3 mins ago",

        review2Img:"./travel/takayai4.jpg",
        review2Title:"ตากะยาย TAKAYAI",
        review2Content:"โฮมสเตย์ตายกะยายมีมุมถ่ายรูปเยอะมากสายคาเฟ่ห้ามพลาดมีเครื่องดื่มและลานกางเต้นท์ให้ด้วยชิวสุดๆ อีกทั้งยังมีร้านหมูกะทะรสเด็ดให้เพื่อนๆได้ฟินดื่มดํ่ากับธรรมชาติเป็นทั้งที่พักและคาเฟ่ไปในตัว",
        review2Author:"_TI***WK",
        review2UpdateTime:"Last updated 3 mins ago",
            
        review3Img:"./travel/takayai5.jpg",
        review3Title:"โฮมสเตย์ตากะยาย ภูผาม่าน ⛰️🏠",
        review3Content:"ช่วงหน้าฝน ใครกำลังจะออกไปเที่ยวภูผาม่าน ขอนแก่น <br></br>เราขอแนะนำที่พักสักหน่อย วิวดี ติดกับผาม่านเลยยย 🤩",
        review3Author:"nook.ishere",
        review3UpdateTime:"Last updated 3 mins ago",
    }
]

module.exports = travelData