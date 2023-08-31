import "./css/header.css"
import { Link } from "react-router-dom";
const Header = (props)=>{
    return(
        <header>
            <span className="logo"><Link to="/">TAXI UBR Thailand</Link></span>
            <nav>
                <ul className="nav_link">
                    <li><a href="tour">Tourist Attraction</a></li>
                    <li><a href="reviews">Reviews</a></li>
                    <li><a href="about">About Us</a></li>
                </ul>
            </nav>
            <a className="cta" href="about"><button>Contact Us</button></a>
        </header>
    )
}

export default Header