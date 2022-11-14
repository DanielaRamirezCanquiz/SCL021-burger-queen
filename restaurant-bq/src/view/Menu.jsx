import Header from "../componentes/Header";
import data from "../data.json";



const drinksData = data.drinks
console.log(drinksData)
const showItemsDrinks = () => {
drinksData.forEach(element => { 
  <button type="button">${element.name}</button>
  console.log(element.name)
})

}


const Menu = () => {
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
            <div className="btnDrinksFood">
              <button type="button" className="btnFood">Comida</button>
              <button type="button" className="btnDrinks" onClick={showItemsDrinks()}>Bebidas</button>
              <div className="printMenu">
                <h3>food</h3>
                <h3>Drinks</h3>
                <button type="button" className="btnMenu">Hamburguesa Simple</button>
              </div>
          </div>
        </div>
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
