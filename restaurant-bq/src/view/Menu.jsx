import { React, useState } from "react";
import data from "../data.json";
import Header from "../componentes/Header";
import FormClient from "../componentes/FormClient";
import OrderSummary from "../componentes/OrderSummary";

const drinksData = data.drinks;
const foodData = data.food;
const sideDishData = data.sideDish;
const extraData = data.extra;

const Menu = () => {
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState([]);
  const [count, setCount] = useState(1);

  const addProduct = (product) => {
    //  console.log(product)
    const exist = summary.findIndex((item) => item.id === product.id);
    // console.log(exist);
    if (exist === -1) {
      setSummary([...summary, product]);
    } else {
      let productTmp = [...summary];
      productTmp[exist].qty = productTmp[exist].qty + product.qty;
      setSummary(productTmp);
      console.log(productTmp[exist]);
    }
  };

  return (
    <>
      <Header/>
      <div className="viewMenu">
        <div className="containerMenu">
          <h2>Menú</h2>
          <FormClient></FormClient>
          <div className="containerDrinksFood">
            <button
              type="button"
              className="btnFood"
              onClick={() => {
                setItems(foodData);
              }}
            >
              Comida
            </button>
            <button
              type="button"
              className="btnDrinks"
              onClick={() => {
                setItems(drinksData);
              }}
            >
              Bebidas
            </button>
            <button
              type="button"
              className="btnSideDish"
              onClick={() => {
                setItems(sideDishData);
              }}
            >
              Acompañamiento
            </button>
            <button
              type="button"
              className="btnExtra"
              onClick={() => {
                setItems(extraData);
              }}
            >
              Extras
            </button>
          </div>
          <div className="printMenu">
            {items.map((item) => (
              <button
                type="button"
                className="btnItem"
                onClick={() => {
                  addProduct(item);
                }}
                key={item.id}
              >
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
              </button>
            ))}
          </div>
        </div>
        <OrderSummary
          summary={summary}
          count={count}
          setCount={setCount}
        ></OrderSummary>
      </div>
    </>
  );
};

export default Menu;
