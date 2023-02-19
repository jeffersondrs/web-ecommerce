import CardProduct from "../card-product/Card-products";
import eletronics from "../../data/eletronics.json";
import books from "../../data/books.json";
import clothes from "../../data/clothings.json";
import office from "../../data/office.json";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="bg-sky-200 flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-start">
        <Link to="/products">
          <h1 className="text-4xl p-5 text-center m-2">Eletronics</h1>
        </Link>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {eletronics.map((eletronic) => (
            <CardProduct
              key={eletronic.id}
              name={eletronic.name}
              price={eletronic.price}
              image={eletronic.image}
              productId={eletronic.id}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-start">
        <Link to="/products">
          <h1 className="text-4xl p-5 text-center m-2">Books</h1>
        </Link>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {books.map((book) => (
            <CardProduct
              key={book.id}
              name={book.name}
              price={book.price}
              image={book.image}
              productId={book.id}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-start">
        <Link to="/products">
          <h1 className="text-4xl p-5 text-center m-2">Clothes</h1>
        </Link>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {clothes.map((cloth) => (
            <CardProduct
              key={cloth.id}
              name={cloth.name}
              price={cloth.price}
              image={cloth.image}
              productId={cloth.id}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-start">
        <Link to="/products">
          <h1 className="text-4xl p-5 text-center m-2">Office</h1>
        </Link>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {office.map((office) => (
            <CardProduct
              key={office.id}
              name={office.name}
              price={office.price}
              image={office.image}
              productId={office.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
