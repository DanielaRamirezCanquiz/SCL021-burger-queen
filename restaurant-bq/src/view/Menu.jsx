import Header from "../componentes/Header";
import { useState } from "react";
import data from "../data.json";


const drinksData = data.drinks;
const foodData = data.food;
const sideDishData = data.sideDish;
const extraData = data.extra; 

const Menu = () => {
  const [items, setItems] = useState ([])
  
  return (
    <>
      {/* <Header></Header> */}
      <div className="viewMenu">
        <div className="containerMenu">
          <h2>Menú</h2>
          <div className="dataClient">
            <input type="text" className="name" id="client" name="name" placeholder="Nombre Cliente" />
            <input
              type="number"
              className="table" id="table"
              name="table"
              placeholder="Mesa"
              min="0"
              max="10"
            />
            <input type="submit" id="send"className="btnSend" value="Ingresar Pedido" autocomplete="off" />
            </div>
            <div className="btnDrinksFood">
              <button type="button" className="btnFood" onClick={() => {setItems(foodData)}}>Comida</button>
              <button type="button" className="btnSideDish" onClick={() => {setItems(sideDishData)}}>Acompañamiento</button>
              <button type="button" className="btnExtra" onClick={() => {setItems(extraData)}}>Extras</button>
              <button type="button" className="btnDrinks" onClick={() => {setItems(drinksData)}}>Bebidas</button>
              </div>
              <div className="printMenu">{
                items.map((item) => 
                  <button type = "button" className ="btnItem" key= {item.id}>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                  </button>
                )} 
              </div>
           </div>


{/* Resumen del Pedido */}

        <div className="containerOrders">
            <h2>Resumen Pedido</h2>
          <div className="dataClientPrint">
          <button type="button" className="btnMenu">Hamburguesa Simple</button>
            </div>
            <div className="orders">
              <div className="btnsAmount">
                <button type="button">Restar</button>
                <button type="button">Sumar</button>
                <button type="button">Eliminar</button>
                <input type="text" placeholder="Cantidad"/>
              </div>
              <div className="totalSend">
                <input type="number" readonly/>
                <button type="button" className="btnSendKitchen">Enviar a Cocina</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};


export default Menu;
