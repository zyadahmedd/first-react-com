import pic from "./pic/WhatsApp Image 2024-11-19 at 15.28.44_5b8d17f6.jpg";
import pic1 from "./pic/WhatsApp Image 2024-11-19 at 15.28.43_2fe8d0dd.jpg";
import pic2 from "./pic/WhatsApp Image 2024-11-19 at 15.28.45_891faee9.jpg";
import pic3 from "./pic/WhatsApp Image 2024-11-19 at 15.28.45_f9213257.jpg";
import pic4 from "./pic/WhatsApp Image 2024-11-19 at 15.28.46_2d16ede9.jpg";
import pic5 from "./pic/WhatsApp Image 2024-11-19 at 15.28.47_793f1b81.jpg";
import pic6 from "./pic/WhatsApp Image 2024-11-19 at 15.28.47_801db137.jpg";
import pic7 from "./pic/WhatsApp Image 2024-11-19 at 15.28.47_dc16668d.jpg";

export default function CoverComponent() {
  const pictures = [
    { id: 1, picture: pic, price:" EGP 120" ,  typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 2, picture: pic1, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 3, picture: pic2, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 4, picture: pic3, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 5, picture: pic4, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 6, picture: pic5, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 7, picture: pic6, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
    { id: 8, picture: pic7, price:" EGP 120" , typ:"ipone(x, Xmax, 11, 11Pro, 11ProMax, 12, 12Pro, 12ProMax, 13, 13ProMax, 14, 14pro, 14ProMax)"},
  ];

  return (
    <div className="data-section-images flexbox">
      {pictures.map((item) => (
        <div key={item.id} className="data-section-image-content flexbox">
          <h4>{item.typ}</h4>
          <div className="child">
            <div className="face one flexbox">
              <img className="img" src={item.picture} alt={`${item.id}`} />
            </div>
            <div className="face two flexbox">
              <p style={{ color: "rgb(7, 254, 40)" }}>{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
