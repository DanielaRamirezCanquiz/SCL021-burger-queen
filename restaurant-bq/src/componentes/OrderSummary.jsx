// import logoBtnSubtract from "../componentes/img/logoBtnSubtract.png"
// import logoBtnPlus from "../componentes/img/logoBtnPlus.png"
import logoBtnDelete from "../componentes/img/logoBtnDelete.png";
import { React, useState } from "react";

const OrderSummary = ({ summary, count, setCount }) => {
  console.log(summary);

  const [orders, setOrders] = useState([]);
  
console.log('count:', count)
  const DeleteProduct = (indiceProduct) => {
    const menuFilter = orders.filter(
      (item, indice) => indice !== indiceProduct
    );
    setOrders(menuFilter);

  };


  return (
    <>
      <div className="containerOrders">
        <h2>Resumen Pedido</h2>
        {/* <div className="dataClientPrint"></div> */}
        <div className="orders">
          <div className="containerAmount">
            {summary.map((item, index) => (
              <div className="itemOrder" key={item.id}>
                <h3>{item.name}</h3>

                <h3>{item.price}</h3>
                <h3>{count}</h3>
                {/* <h3>{item.qty}</h3> */}
                <button type="button" className="btnDelete">
                  <img
                    src={logoBtnDelete}
                    className="logoDelete"
                    alt="logoDelete"
                    onClick={() => {
                      DeleteProduct(index);
                    }}
                  />
                </button>
              </div>
              
            ))}
            {/* <button type="button" className="btnSubtract"><img src={logoBtnSubtract} className="logoSubtract" alt="logoSubtract" /></button>
      <button type="button" className="btnPlus"><img src={logoBtnPlus} className="logoPlus" alt="logoPlus" /></button>
      <button type="button" className="btnDelete"><img src={logoBtnDelete} className="logoDelete" alt="logoDelete"/></button> */}
          </div>
          <div className="totalSend">
            <button type="button" id="btnSend" className="btnSendKitchen">
              Enviar a Cocina
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
