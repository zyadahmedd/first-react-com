import { useNavigate, useLocation} from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import {FaBars} from "react-icons/fa"
import "../css/style.css";
import img from "./img/download.jpeg"


export default function NavComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [OnAvaliable, setOnAvaliable] = useState(null);

    const menuItems = useMemo(() => [
      {
        id: 1,
        name: "Home",
        avaliable: true,
        page:"/src/header/HomeComponent.js",
      },
      {
        id:2,
        name :"services",
        avaliable: false,
        page:"/ServicesComponent"
      },
      {
        id: 3,
        name: "Contact",
        avaliable: false,
        page :"/FormComponent",
      },
    ], []);

    useEffect(() => {
      const currentItem = menuItems.find((item) => item.page === location.pathname);
      if (currentItem) {
        setOnAvaliable(currentItem.id);
      } else {
        setOnAvaliable(1); 
        navigate("/", { replace: true });
      }
    }, [location.pathname, navigate, menuItems]);
  
    function handleClick(id, page) {
      if (OnAvaliable !== id) {
        setOnAvaliable(id);
        navigate(page);
      }
    }

    const [ isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu () {
      setIsMenuOpen(!isMenuOpen)
      console.log("hello")
    }

    return (
      <>
    <div  className="nav flexbox" style={{ justifyContent: "space-between" }}>
      <div style={{display:"flex" ,gap:"10px" , alignItems:"center" , width:"40%"}}>
        <h1><img src={img} alt="" style={{width:"50px", borderRadius:"50%" , float:"left"}}></img></h1>
        <h1>COVER STORE</h1>
      </div >
          <nav className="flexbox" >
          <ul className={isMenuOpen ? "open" : ""}>
            {menuItems.map((item) => (
              <li className={OnAvaliable === item.id ? "available" : ""}
                key={item.id}
                onClick={() => handleClick(item.id , item.page)}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      
      <div className="iconfa" onClick={toggleMenu}>
      <FaBars style={{fontSize:"30px"}} />
      </div>
    </div>
    </>
    
  );
}
