import { GiLaurelsTrophy, GiTechnoHeart } from "react-icons/gi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { BsCashCoin, BsCreditCardFill } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardServices from "./card-services/Card-services.component";

export default function HomeContent() {
  return (
    <div className="home-content">
      <div className="flex flex-row justify-evenly items-center w-full flex-wrap bg-sky-200/40 py-24">
        <div className="flex flex-col items-stretch justify-between w-[50%]">
          <p className="text-2xl text-orange-600 my-4">E-commerce</p>
          <h1 className="text-8xl my-2">It's all about you.</h1>
          <p className="text-2xl my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec
          </p>
          <div className="flex flex-col justify-center items-start">
            <button className="bg-sky-800 text-white w-52 h-16 text-xl px-4 py-2 rounded-lg mt-4 hover:bg-sky-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-gray-200 py-12 w-96 h-96 flex justify-center items-center m-5">
          <div className="w-80 h-80 rounded-2xl grid-cols-2 grid gap-2 justify-between product-home">
            <div className="bg-orange-700 w-16 h-16 flex justify-center items-center rounded-tl-2xl rounded-bl-2xl rounded-br-2xl -translate-x-10 -translate-y-4 text-white text-4xl hover:scale-105 transition-transform">
              <TbShoppingCartPlus />
            </div>
            <div className="bg-white w-24 h-24 flex justify-center items-center text-5xl rounded-full translate-x-20 -translate-y-10 hover:scale-105 transition-transform">
              <GiLaurelsTrophy />
            </div>
            <div className="text-[.5rem] bg-orange-400 h-20 w-32 flex flex-col justify-center items-start px-4 rounded-bl-3xl rounded-t-3xl -translate-x-12 translate-y-24 text-white hover:scale-105 transition-transform">
              <p className="text-[.6rem]">Shop</p>
              <strong className="text-xl">50% OFF</strong>
              <pre className="text-[.5rem]">
                Lorem ipsum dolor sit<br></br> amet, consectetur.
              </pre>
            </div>
            <div className="bg-red-600 text-white text-4xl w-16 h-16 flex justify-center items-center rounded-full translate-x-24 translate-y-24 hover:scale-105 transition-transform">
              <GiTechnoHeart />
            </div>
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl my-4">Our Products</h1>
          <p className="text-2xl my-4">
            Our Service will make your life so much more easier
          </p>
        </div>
        <div className="flex flex-row w-full justify-evenly items-center">
          <div>
            <CardServices
              icon={<GrDeliver />}
              title="Free Shipping"
              description="Free delivery on all orders over $100"
            />
          </div>
          <div>
            <BsCashCoin />
          </div>
          <div>
            <FaHeadphonesAlt />
          </div>
          <div>
            <BsCreditCardFill />
          </div>
        </div>
      </div>
    </div>
  );
}
