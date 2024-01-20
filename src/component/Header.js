import { useState, useEffect } from "react";
import "./css/header.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Header = (props) => {
    const location = useLocation();
    const [btnState, setBtnState] = useState(false)

    function handleClick() {
        setBtnState(btnState => !btnState)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    function contact() {
        setTimeout(() => {
            window.scrollTo(0, 500);
        }, 500)

    }

    let toggleClassCheck = btnState ? 'active' : null
    const links = [
        { to: "/", label: "หน้าหลัก" },
        { to: "/tour", label: "สถานที่ท่องเที่ยว" },
        { to: "/reviews", label: "รีวิว" },
        { to: "/about", label: "เกี่ยวกับเรา" },
        { to: "/about", label: "ติดต่อ", class: "cta" },
    ]
    const currentURL = location.pathname;
    console.log(currentURL);

    return (
        <header>
            <div className="logo"><h1><Link to="/">TAXI UBR Thailand</Link></h1></div>
            <span className="nav-toggle" id="nav-toggle" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </span>
            <nav>
                <ul className={`nav_link ${toggleClassCheck}`} id="nav-menu">
                    {links.map((link) => (
                        <li key={link.label} className={link.class}>
                            <Link className={((currentURL === link.to) && link.label !== "ติดต่อ") ? 'link-active' : null} to={link.to} onClick={link.label === "ติดต่อ" ? contact : null}>{link.label === "ติดต่อ" ? <button>{link.label}</button> : link.label}</Link>
                        </li>
                    ))}
                    {/* <li><Link to="/">หน้าหลัก</Link></li>
                    <li><Link to="/tour">สถานที่ท่องเที่ยว</Link></li>
                    <li><Link to="/reviews">รีวิว</Link></li>
                    <li><Link to="/about">เกี่ยวกับเรา</Link></li>
                    <li><Link className="cta" to="/about" onClick={contact}><button>ติดต่อ</button></Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header