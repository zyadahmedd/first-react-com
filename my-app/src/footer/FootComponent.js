import "../css/style.css";
import img from "./img/download.jpeg"
import { FaFacebook, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";



export default function Footer() {
    return (
        <div className="footer">
            <div>
                <h1><img src={img} alt="img" style={{width:"100px", borderRadius:"50%" , float:"left"}}></img></h1>
                <h1>COVER STORE</h1>
                <p>Copyright &copy; 2022</p>    
            </div>
            <div className="icons">
                <FaFacebook className="icon-fb" size={30} color="blue"  style={{margin:"0 10px",borderRadius:"50%" , cursor:"pointer"}} />
                <FaWhatsapp className="icon-wa" size={30} color="green"  style={{margin:"0 10px",borderRadius:"50%" , cursor:"pointer"}}/>
                <FaTiktok className="icon-tt" size={30} color="black" style={{margin:"0 10px",borderRadius:"50%" ,backgroundColor:"white", cursor:"pointer"}} />
                <FaInstagram className="icon-inst" size={30} color="red" style={{margin:"0 10px",borderRadius:"50%" , cursor:"pointer"}} />
            </div>
        </div>
    )
}