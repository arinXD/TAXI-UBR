import { Link } from "react-router-dom";
import "./css/footer.css"
export default ()=>{
    // 42a7c3
    return ( 
    <footer>
        <h1>TAXI UBR Thailand</h1>
        <ul>
            <li><Link to="/tour">สถานที่ท่องเที่ยว</Link></li>
            <li><Link to="/reviews">รีวิว</Link></li>
            <li><Link to="/about">เกี่ยวกับเรา</Link></li>
            <li><Link to="/about">ติดต่อ</Link></li>
            <li><Link to="/about"><i class="fa-brands fa-facebook-f"></i> facebook</Link></li>
        </ul>
        <hr/>
        <p className="copyright">
            &#169; TAXI UBR Thailand
        </p>
    </footer>
    )
}