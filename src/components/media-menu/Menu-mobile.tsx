import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
export default function MenuWeb() {
  const handleMenu = () => {
    const menu = document.querySelector(".navegation_menu-links");
    const hamburguer = document.querySelector(".hanburguer");
    hamburguer?.classList.toggle("hidden");
    menu?.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="navegation">
        <div className="flex flex-row justify-between px-5 items-center rounded-md bg-sky-500 h-20 py-2 navegation__menu">
          <div onClick={handleMenu} className="hanburguer">
            <Link to="/">
              <GiHamburgerMenu />
            </Link>
          </div>
          <div className="hidden w-full navegation_menu-links flex flex-row items-center justify-center">
              <span onClick={handleMenu}>X</span>
            <div className="flex flex-grow flex-wrap justify-center items-center uppercase">
              <Link className=" navegation__menu-m" to="/">
                Home
              </Link>
              <Link
                className=" navegation__menu-m"
                to="/products"
              >
                Products
              </Link>
              <Link
                className=" navegation__menu-m"
                to="/about"
              >
                About
              </Link>
              <Link
                className=" navegation__menu-m"
                to="/dashboard"
              >
                Support
              </Link>
            </div>
          </div>
          <div className=" h-full flex flex-col justify-evenly items-end">
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
