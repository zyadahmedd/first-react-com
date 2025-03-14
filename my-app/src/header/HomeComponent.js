import "../css/style.css";



import { useEffect, useState, useMemo } from "react";
import img from "./img/hero-image.webp";
import apple from "./img/Apple-iPhone-15-Pro-lineup-FineWoven-Cases-and-Wallet-with-Magsafe-230912_big.jpg.large_2x.jpg"
import apple2 from "./img/zCZzShp8mTfwQ6qTbNNATk-1200-80.jpg"
import sam1 from "./img/Galaxy-S25-Ultra-15.webp"
import sam2 from "./img/samsung_galaxy_s25_ultratitanium_silverblue_front_back.webp"
import VideoComponent from "../Videos/VideoComponent";




export default function HomeComponent() {
    const pic = useMemo(() => [img, apple, sam1, apple2, sam2], []);

    const [currentPic, setCurrentPic] = useState(pic[0]);
    const contents = {
        contentHeader: "Welcome To Website",
        contentP:"Lorem ipsum dolor sit amet",
        contentImg:img
    }

    useEffect(() => {
      let intervalId; 

      intervalId = setInterval(() => {
          try {
              const randomPic = pic[Math.floor(Math.random() * pic.length)];
              setCurrentPic(randomPic);
          } catch (error) {
              console.error("Error in setInterval callback:", error);
              // Optionally, you could clear the interval here if a critical error occurs:
              // clearInterval(intervalId);
          }
      }, 5000);

      return () => {
          clearInterval(intervalId); 
      };
  }, [pic]);



    return (
        <>
            <div className="header flexbox">
                <div  style={{
                    backgroundImage: `url(${currentPic})`, 
                    backgroundSize: "cover" , 
                    backgroundRepeat:"no-repeat" , 
                    backgroundPosition:"center center",
                    transition: "background-image 1s ease-in-out",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"80%",
                    }} className="content-image" >
                    <h1>{contents.contentHeader}</h1>
                    <p>{contents.contentP}</p>
                </div>
                
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", margin:"20px", textAlign:"center"}}>
            </div>
                <VideoComponent/>
        </>
    );
}