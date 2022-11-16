import "../style.css";
import logoRestaurant from "../componentes/img/logoRestaurant.jpg";

const Home = () => {
  return (
   <>
   <div className="sectionHome">
      <div className="logoRestaurantHome">
        <img src={logoRestaurant} alt="logo principal" />
      </div>
      <div className="btnHome">
        <button type="button" className="btnMenu"><a href="/Menu">Mesero</a></button>
        <button type="button" className="btnOrders"><a href="/Orders">Pedidos</a></button>
        <button type="button" className="btnKitch"><a href="/Kitchen">Cocina</a></button>
      </div>
   </div>

  </>
  );
};

export default Home;