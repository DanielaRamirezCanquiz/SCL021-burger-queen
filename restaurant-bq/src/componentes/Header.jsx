import logoBtnHome from "../componentes/img/logoBtnHome.png";
import logoBtnKitchen from "../componentes/img/logoBtnKitchen.png";
import logoBtnOrders from "../componentes/img/logoBtnOrders.png";
import logoBtnMenu from "../componentes/img/logoBtnMenu.png"; 
import logoRestaurant from "../componentes/img/logoRestaurant.jpg";
import "../style.css";  
 
const Header = () => {

  return (
    <div className="header">
    <div className="logoRestaurantHeader">
     <img src={logoRestaurant} className="logoHeader" alt="logo principal" width="40%" height="40%"/>
    </div>
    <nav>
        <a href="/"><button type="button" className="btnHome"><img src={logoBtnHome} className="logoHome" alt="logoHome"/></button></a>
        <a href="/menu"><button type="button" className="btnMenu"> <img src={logoBtnMenu} className="logoMenu" alt="logoMenu"/></button></a>
        <a href="/kitchen"><button type="button" className="btnKitchen"> <img src={logoBtnKitchen} className="logoKitchen" alt="logoKitchen"/></button></a>
        <a href="/orders"><button type="button" className="btnOrders"> <img src={logoBtnOrders} className="logoOrders" alt="logoOrders"/></button></a>
    </nav>
    </div>
  );
}

export default Header;