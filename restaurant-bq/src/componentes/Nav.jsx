  import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Kitchen">Kitchen</Link>
        </li>
        <li>
          <Link to="/Orders">Orders</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;

