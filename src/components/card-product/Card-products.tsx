import { Link } from "react-router-dom";

interface PropsProduct {
  productId: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  className?: string;
}

export default function CardProducts(props: PropsProduct) {
  return (
    <div className="flex flex-col w-72 h-96 text-black justify-center items-center  shadow-2xl bg- rounded-xl m-4 hover:scale-105 transition-all">
      <div>
        <img
          className="w-64 h-64 object-cover bg-cover"
          src={props.image}
          alt="product"
        />
      </div>
      <div className="flex flex-col justify-between items-center text-black mb-5">
        <div className="p-3">
          <h1 className="text-2xl text-center">{props.name}</h1>
          <p className="text-xl text-center">R$ {props.price}</p>
        </div>
        <div>
          <Link to={props.productId}>
            <button className="bg-sky-500 text-white rounded-md px-5 py-2 hover:bg-sky-400 transition-all">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
