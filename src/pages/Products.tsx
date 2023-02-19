import { Link } from "react-router-dom";
import "./pages.styles.scss";
import ProductList from '../components/products/Products.component';

export default function Products() {
  return (
    <div className="products">
      <ProductList />
    </div>
  );
}
