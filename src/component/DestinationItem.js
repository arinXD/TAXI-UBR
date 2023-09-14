import { Link } from "react-router-dom";
const DestinationItem = (props)=>{
    let {link, imgPath,location, title} = props
    const getImg = require(`${imgPath}`)
    return(
        <li className="destination-item">
            <Link to={link}>
                <img src={getImg} alt="img"/>
                <p className="location">
                    <i className="bi bi-geo-alt-fill" style={{color:"#42a7c3"}}></i>
                    <span className="location-title">{location}</span>
                </p>
                <p className="title">{title}</p>
            </Link>
        </li>
    )
}

export default DestinationItem