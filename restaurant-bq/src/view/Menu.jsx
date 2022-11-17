import Header from "../componentes/Header";
import logoBtnSubtract from "../componentes/img/logoBtnSubtract.png"
import logoBtnPlus from "../componentes/img/logoBtnPlus.png"
import logoBtnDelete from "../componentes/img/logoBtnDelete.png"
import { useState } from "react";
import data from "../data.json";


const drinksData = data.drinks;
const foodData = data.food;
const sideDishData = data.sideDish;
const extraData = data.extra; 

const Menu = () => {
  const [items, setItems] = useState ([])
  const [summary, setSummary] = useState([])
  
  return (
    <>
      <Header></Header>
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
            <div className="containerDrinksFood">
              <button type="button" className="btnFood" onClick={() => {setItems(foodData)}}>Comida</button>
              <button type="button" className="btnDrinks" onClick={() => {setItems(drinksData)}}>Bebidas</button>
              <button type="button" className="btnSideDish" onClick={() => {setItems(sideDishData)}}>Acompañamiento</button>
              <button type="button" className="btnExtra" onClick={() => {setItems(extraData)}}>Extras</button>
              </div>
              <div className="printMenu">{
                items.map((item) => 
                  <button type = "button" className ="btnItem" onClick={() => {setSummary([...summary, item])}} key= {item.id}>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                  </button>
                )} 
              </div>
           </div>


{/* Resumen del Pedido */}


        <div className="containerOrders">
          <div className="dataClientPrint">



          
            </div>
            <div className="orders">
              <div className="btnsAmount">
              <button type="button" className="btnSubtract"><img src={logoBtnSubtract} className="logoSubtract" alt="logoSubtract"/></button>
              <button type="button" className="btnPlus"><img src={logoBtnPlus} className="logoPlus" alt="logoSubtract"/></button>
              <button type="button" className="btnDelete"><img src={logoBtnDelete} className="logoDelete" alt="logoSubtract"/></button>
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
