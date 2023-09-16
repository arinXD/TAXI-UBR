import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./css/footer.css"
const Footer = ()=>{
    function contact() {
        setTimeout(()=>{
            window.scrollTo(0, 500);
        } , 500)
        
    }
    return ( 
    <footer>
        <h1>TAXI UBR Thailand</h1>
        <ul>
            <li><Link to="/tour">สถานที่ท่องเที่ยว</Link></li>
            <li><Link to="/reviews">รีวิว</Link></li>
            <li><Link to="/about">เกี่ยวกับเรา</Link></li>
            <li><Link to="/about" onClick={contact}>ติดต่อ</Link></li>
            {/* <li><Link to="/about"><i class="bi bi-facebook"></i> facebook</Link></li> */}
        </ul>
        <hr/>
        <p className="copyright">
            &#169; TAXI UBR Thailand
        </p>
    </footer>
    )
}
export default Footer