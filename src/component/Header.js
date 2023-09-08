import { useEffect, useState } from "react";
import "./css/header.css"
import { Link } from "react-router-dom";
const Header = (props)=>{
    const [btnState, setBtnState] = useState(false)

    function handleClick(){
        setBtnState(btnState=>!btnState)
    }

    let toggleClassCheck = btnState ? 'active' : null

    return(
        <header>
            <div className="logo"><h1><Link to="/">TAXI UBR Thailand</Link></h1></div>
            <span className="nav-toggle" id="nav-toggle" onClick={handleClick}>
                <i className="fas fa-bars"/>
            </span>
            <nav>
                <ul className={`nav_link ${toggleClassCheck}`} id="nav-menu">
                    <li><Link to="/tour">Tourist Attraction</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link className="cta" to="/about"><button>Contact Us</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header