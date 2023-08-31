const DestinationItem = (props)=>{
    let {imgPath,location, title} = props
    const getImg = require(`${imgPath}`)
    return(
        <li class="destination-item">
            <img src={getImg}/>
            <p className="location">
                <i class="bi bi-geo-alt-fill" style={{color:"#42a7c3"}}></i>
                <span className="location-title">{location}</span>
            </p>
            <p className="title">{title}</p>
            <a href="#"><button className="button" role="button">รายละเอียด</button></a>
        </li>
    )
}

export default DestinationItem