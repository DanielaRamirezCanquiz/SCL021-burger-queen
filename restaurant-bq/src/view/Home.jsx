import "../style.css";  
import logoRestaurant from "../componentes/img/logoRestaurant.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <>
   <div className="sectionHome">
      <div className="logoHome">
        <img src={logoRestaurant} alt="logo principal" />
      </div>
      <div className="btnHome">
        <button type="button" className="btnMenu"><Link to="/Menu">Mesero</Link></button>
        <button type="button" className="btnOrders"><Link to="/Orders">Pedidos</Link></button>
        <button type="button" className="btnKitchen"><Link to="/Kitchen">Cocina</Link></button>
      </div>
   </div>
   
  </>
  );
};

export default Home;