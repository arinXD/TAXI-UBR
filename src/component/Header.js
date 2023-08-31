import "./css/header.css"
import { Link } from "react-router-dom";
const Header = (props)=>{
    return(
        <header>
            <span className="logo"><Link to="/">TAXI UBR Thailand</Link></span>
            <nav>
                <ul className="nav_link">
                    <li><Link to="/tour">Tourist Attraction</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
            <a className="cta" href="/about"><button>Contact Us</button></a>
        </header>
    )
}

export default Header