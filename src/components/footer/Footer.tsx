import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-10 bg-gray-800 text-white py-20">
      <div className="flex flex-row w-full justify-evenly items-start flex-wrap">
        <div className="flex flex-col justify-evenly items-start m-2 h-56">
          <h1 className="text-orange-800 uppercase text-xl">Social links</h1>
          <ul className="flex flex-row justify-between items-start w-40 footer__list">
            <li className="w-8 h-8 rounded-lg bg-gray-700 flex justify-center items-center">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-lg bg-gray-700 flex justify-center items-center">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-lg bg-gray-700 flex justify-center items-center">
              <Link to="#">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
          <p className="text-sm">Dont forget follow us</p>
        </div>
        <div className="m-2 h-56 flex flex-col items-stretch justify-start">
          <h1 className="mb-3 text-base text-gray-500 hover:text-gray-600">
            Products
          </h1>
          <ul className="text-sm footer__list">
            <li>
              <Link to="#">New</Link>
            </li>
            <li>
              <Link to="#">Popular</Link>
            </li>
            <li>
              <Link to="#">Trending</Link>
            </li>
            <li>
              <Link to="#">Best Seller</Link>
            </li>
          </ul>
        </div>
        <div className="m-2 h-56 flex flex-col items-stretch justify-start">
          <h1 className="mb-3 text-base text-gray-500 hover:text-gray-600">
            Support
          </h1>
          <ul className="text-sm footer__list">
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">Terms of Service</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Status</Link>
            </li>
          </ul>
        </div>
        <div className="m-2 h-56 flex flex-col items-stretch justify-start">
          <h1 className="mb-3 text-base text-gray-500 hover:text-gray-600">
            Company
          </h1>
          <ul className="text-sm footer__list">
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center w-full flex-wrap text-xs">
        <strong>© 2021 All rights reserved</strong>
        <strong>Terms of Service</strong>
        <strong>
          Criado por{" "}
          <Link to="https://github.com/jeffersondrs">JeffersonDRS</Link>
        </strong>
      </div>
    </footer>
  );
}
