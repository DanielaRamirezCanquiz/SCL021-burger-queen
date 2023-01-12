import React from "react";
import logoBtnHome from "../componentes/img/logoBtnHome.png";
import logoBtnKitchen from "../componentes/img/logoBtnKitchen.png";
import logoBtnOrders from "../componentes/img/logoBtnOrders.png";
import logoBtnMenu from "../componentes/img/logoBtnMenu.png";
import logoRestaurant from "../componentes/img/logoRestaurant.jpg";
import "../style.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="logoRestaurantHeader">
        <img
          src={logoRestaurant}
          className="logoHeader"
          alt="logo principal"
          width="60%"
        />
      </div>
      <nav>
        <Link to= "/">
          <button type="button" className="btnsHeader">
            <img src={logoBtnHome} alt="logoHome" width="15%" />
          </button>
        </Link>
        <Link to="/menu">
          <button type="button" className="btnsHeader">
            {" "}
            <img
              src={logoBtnMenu}
              className="logoMenu"
              alt="logoMenu"
              width="15%"
            />
          </button>
        </Link>
        <Link to = "/kitchen">
          <button type="button" className="btnsHeader">
            {" "}
            <img
              src={logoBtnKitchen}
              className="logoKitchen"
              alt="logoKitchen"
              width="15%"
            />
          </button>
        </Link>
        <Link to="/orders">
          <button type="button" className="btnsHeader">
            {" "}
            <img
              src={logoBtnOrders}
              className="logoOrders"
              alt="logoOrders"
              width="15%"
            />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
