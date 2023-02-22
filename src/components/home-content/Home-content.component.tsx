import { GiLaurelsTrophy, GiTechnoHeart } from "react-icons/gi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { BsCashCoin, BsCreditCardFill } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import CardServices from "./Card-services.component";
import CardProducts from "../card-product/Card-products";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type email = string;

export default function HomeContent() {
  const emailRef = useRef(null as any);
  const [email, setEmail] = useState<email>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const email = emailRef.current.value;

    setEmail(email);
  };

  useEffect(() => {
    emailRef.current.value = "";
    if (email !== "") {
      alert("Thank you for subscribing!");
    }
  }, [email]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 0,
    });
  }, []);

  return (
    <div className="home-content">
      <section className="flex flex-row justify-evenly items-center w-full flex-wrap py-24">
        <div className="flex flex-col items-stretch justify-between w-[50%] text-black">
          <p className="text-2xl text-orange-600 my-4">E-commerce</p>
          <h1 className="text-8xl my-2">It's all about you.</h1>
          <p className="text-2xl my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec
          </p>
          <div className="flex flex-col justify-center items-start">
            <button className="bg-sky-800 text-white w-52 h-16 text-xl px-4 py-2 rounded-lg mt-4 hover:bg-sky-700 transition-colors shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-gray-200 py-12 w-96 h-96 flex justify-center items-center m-5 shadow-2xl">
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
      </section>
      <section className="p-5">
        <div className="flex flex-col justify-center items-center text-black">
          <h1 data-aos="fade-right" className="text-sm uppercase text-orange-600 my-4">
            Our Products
          </h1>
          <p data-aos="fade-right" data-aos-delay="300" className="text-2xl my-4 w-80 text-center font-bold">
            Our Service will make your life so much more easier
          </p>
        </div>
        <div className="flex flex-row w-full justify-evenly items-center flex-wrap">
          <div data-aos="zoom-out-left" data-aos-delay="0" className="hover:scale-105 transition-all">
            <Link to="/products">
              <CardServices
                icon={<TbTruckDelivery />}
                title="Free Shipping"
                description="Free delivery on all orders over $100"
                className="w-32 h-32 bg-white flex justify-center items-center text-8xl p-5 shadow-lg rounded-tl-3xl rounded-br-3xl text-yellow-500"
              />
            </Link>
          </div>
          <div data-aos="zoom-out-left" data-aos-delay="200" className="hover:scale-105 transition-all">
            <Link to="/products">
              <CardServices
                icon={<BsCashCoin />}
                title="Money Back"
                description="Cash Back at all"
                className="w-32 h-32 bg-white flex justify-center items-center text-8xl p-5 shadow-lg rounded-tl-3xl rounded-br-3xl text-green-700"
              />
            </Link>
          </div>
          <div data-aos="zoom-out-left" data-aos-delay="600" className="hover:scale-105 transition-all">
            <Link to="/products">
              <CardServices
                icon={<FaHeadphonesAlt />}
                title="Support 24/7"
                description="24/7 Support"
                className="w-32 h-32 bg-white flex justify-center items-center text-8xl p-5 shadow-lg rounded-tl-3xl rounded-br-3xl text-red-600"
              />
            </Link>
          </div>
          <div data-aos="zoom-out-left" data-aos-delay="1000" className="hover:scale-105 transition-all">
            <Link to="/products">
              <CardServices
                icon={<BsCreditCardFill />}
                title="Secure Payment"
                description="Secure Payment"
                className="w-32 h-32 bg-white flex justify-center items-center text-8xl p-5 shadow-lg rounded-tl-3xl rounded-br-3xl text-blue-600"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-wrap justify-center items-center mb-5">
        <div className=" text-black mb-10">
          <h3 className="text-sm uppercase text-orange-600 text-center my-4">
            Featured Products
          </h3>
          <h1 className="text-2xl my-4 w-72 text-center font-bold">
            Choose as you Want
          </h1>
        </div>
        <div className="flex flex-1 flex-wrap justify-center items-center w-[90%]">
          <CardProducts
            name="HeadPhone"
            price={40.99}
            image="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
            productId="/product/1"
          />
          <CardProducts
            name="Bags"
            price={99.99}
            image="https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            productId="/product/2"
          />
          <CardProducts
            name="Shoes"
            price={79.99}
            image="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
            productId="/product/3"
          />
          <CardProducts
            name="Pulse Clock"
            price={199.99}
            image="https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
            productId="/product/4"
          />
          <CardProducts
            name="EarPhone"
            price={129.99}
            image="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            productId="/product/5"
          />
          <CardProducts
            name="Smart Watch"
            price={59.99}
            image="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            productId="/product/6"
          />
        </div>
      </section>
      <section className="flex flex-row flex-wrap items-center justify-center py-20 bg-blue-100 h-full">
        <div className="flex flex-col justify-center items-start text-start my-5 w-96 p-5">
          <h4 className="text-sm uppercase text-orange-600">Testimonials</h4>
          <h1 className="text-2xl font-semibold">
            What they are sayng about us and our products
          </h1>
          <p className="text-xs">
            list a product once and it will be published across all of your
            connected sales channels
          </p>
          <div className="text-xs flex flex-row w-20 justify-evenly items-center mt-5">
            <span>View More</span>
            <HiOutlineArrowLongRight className="text-sky-600" />
          </div>
        </div>
        <div data-aos="fade-up" className="border rounded-sm bg-white z-50 w-64 flex flex-col p-2 shadow-2xl h-44 justify-between">
          <strong className="text-sm">
            "The best product I have ever seen. I am very happy with the
            quality"
          </strong>
          <div className="flex flex-row-reverse justify-evenly p-1 items-center my-2">
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-xs">CEO, ABC Company</p>
            </div>
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="border rounded-sm bg-white z-50 w-72 flex flex-col p-2 shadow-2xl h-48 justify-between">
          <strong className="text-sm">
            "The best product I have ever seen. I am very happy with the
            quality"
          </strong>
          <div className="flex flex-row-reverse justify-evenly p-1 items-center my-2">
            <div>
              <h4 className="font-semibold">Dolores</h4>
              <p className="text-xs">CEO, XYZ Company</p>
            </div>
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="800" className="border rounded-sm bg-white z-50 w-64 flex flex-col p-2 shadow-2xl h-44 justify-between">
          <strong className="text-sm">
            "The best product I have ever seen. I am very happy with the
            quality"
          </strong>
          <div className="flex flex-row-reverse justify-evenly p-1 items-center my-2">
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-xs">CEO, ABC Company</p>
            </div>
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-10"
        >
          <h1 className="text-2xl font-semibold">
            Subscribe to our newsletter
          </h1>
          <p className="text-xs">
            list a product once and it will be published across all of your
            connected sales channels
          </p>
          <div className="flex flex-row justify-center items-center mt-5">
            <input
              ref={emailRef}
              className="border rounded-sm p-2"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white rounded-sm p-2"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
