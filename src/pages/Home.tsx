import { Link } from "react-router-dom";
import "./pages.styles.scss";
import HomeContent from "../components/home-content/Home-conten.component";
export default function Home() {
  return (
    <div className="home">
      <HomeContent />
    </div>
  );
}
