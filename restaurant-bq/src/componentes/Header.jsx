import logoBtnHome from "../componentes/img/logoBtnHome.png";
import logoBtnKitchen from "../componentes/img/logoBtnKitchen.png";
import logoBtnOrders from "../componentes/img/logoBtnOrders.png";
import logoBtnMenu from "../componentes/img/logoBtnMenu.png"; 
import logoRestaurant from "../componentes/img/logoRestaurant.png";
import "../style.css";  
 
const Header = () => {

  return (
    <div className="header">
    <div className="logoRestaurantHeader">
     <img src={logoRestaurant} className="logoHeader" alt="logo principal" width="40%" height="40%"/>
    </div>
    <nav>
        <a href="/"><button type="button"><img src={logoBtnHome} className="logoHome" alt="logoHome" width="20%" height="20%" /></button></a>
        <a href="/menu"><button type="button"> <img src={logoBtnMenu} className="logoMenu" alt="logoMenu"  width="20%" height="20%"/></button></a>
        <a href="/kitchen"><button type="button"> <img src={logoBtnKitchen} className="logoKitchen" alt="logoOrders"  width="20%" height="20%"/></button></a>
        <a href="/orders"><button type="button"> <img src={logoBtnOrders} className="logoOrders" alt="logoOrders"  width="20%" height="20%"/></button></a>
    </nav>
    </div>
  );
}

export default Header;