import "../style.css";
import logoRestaurant from "../componentes/img/logoRestaurant.jpg";

const Home = () => {
  return (
   <>
   <div className="sectionHome">
      <div className="logoRestaurantHome">
        <img src={logoRestaurant}  className="logoMain" alt="logo main" />
      </div>
      <div className="btnHome">
      <a href="/Menu"><button type="button" className="btnMenu">Mesero</button></a>
      <a href="/Orders"><button type="button" className="btnOrders">Pedidos</button></a>
      <a href="/Kitchen"> <button type="button" className="btnKitchen">Cocina</button></a>
      </div>
   </div>

  </>
  );
};

export default Home;