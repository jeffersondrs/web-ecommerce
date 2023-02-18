import { Link, Outlet } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import "./navegation.styles.scss";
import imagemLogo from "../../assets/logo.png";

export default function Navegation() {
  return (
    <div>
      <div className="navegation">
        <div className="flex flex-row bg-sky-200 justify-between px-5 items-center rounded-md">
          <div className="navegation__logo">
            <Link to="/">
              <img className="w-12" src={imagemLogo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-row h-12 justify-between items-center text-black uppercase w-80 navegation__menu">
            <Link className="navegation__menu-item" to="/">
              Home
            </Link>
            <Link className="navegation__menu-item" to="/products">
              Products
            </Link>
            <Link className="navegation__menu-item" to="/about">
              About
            </Link>
            <Link className="navegation__menu-item" to="/dashboard">
              Support
            </Link>
          </div>
          <div className="flex flex-row w-24 justify-evenly">
            <Link className="hover:text-gray-600" to="/cart">
              <FiShoppingCart />
            </Link>
            <Link className="hover:text-gray-600" to="/search">
              <FiSearch />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
