import Home from "./view/Home";
import Menu from "./view/Menu";
import Kitchen from "./view/Kitchen";
import Orders from "./view/Orders";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default App;