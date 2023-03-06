import "./navegation.styles.scss";
import MenuMobile from "../media-menu/Menu-mobile";
import MenuWeb from "../media-menu/Menu-web";

type IsWeb = boolean;

export default function Navegation() {
  let mql = window.matchMedia("(max-width: 768px)");

  return (
    <div>
      {mql.matches ? <MenuMobile /> : <MenuWeb />}
      </div>
  );
}
