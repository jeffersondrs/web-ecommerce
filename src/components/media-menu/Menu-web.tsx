import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import imagemLogo from "../../assets/logo.png";
import Footer from "../footer/Footer";

export default function MenuWeb() {
  return (
    <div>
      <div className="navegation">
        <div className="flex flex-row justify-between px-10 items-center bg-transparent h-24">
          <div className="navegation__logo">
            <Link to="/">
              <img className="w-20 h-20 bg-center rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="logo" />
            </Link>
          </div>
          <div className="flex flex-row flex-wrap h-12 justify-between items-center uppercase navegation__menu">
            <Link className="navegation__menu-item" to="/">
              Home
            </Link>
            <Link className="navegation__menu-item" to="/products">
              Products
            </Link>
            <Link className="navegation__menu-item" to="/about">
              About
            </Link>
            <Link className="navegation__menu-item" to="/support">
              Support
            </Link>
          </div>
          <div className="flex flex-row w-24 justify-evenly">
            <Link className="text-black hover:text-gray-600" to="#">
              <FiShoppingCart />
            </Link>
            <Link className="text-black hover:text-gray-600" to="#">
              <FiSearch />
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}
