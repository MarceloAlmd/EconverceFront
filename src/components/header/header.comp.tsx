import "./header.styles.scss";

import { CiHeart, CiSearch, CiShop, CiShoppingCart } from "react-icons/ci";
import { Promotion } from "../promotion/promotion.comp";
import { PiUserCircleThin } from "react-icons/pi";
import { Navigation } from "../navigation/navigation.comp";

export function Header() {
  return (
    <>
      <Promotion />
      <header>
        <img src="/logoVTEXCompleted.svg" alt="" />
        <div className="search">
          <input type="text" placeholder="O que você está buscando?" />
          <CiSearch />
        </div>

        <div className="navigationSearch">
          <CiShop />
          <CiHeart />
          <PiUserCircleThin />
          <CiShoppingCart />
        </div>
      </header>
      <Navigation />
    </>
  );
}
