import { LuMonitorSmartphone } from "react-icons/lu";
import { CardMenu } from "../cardMenu/cardMenu.comp";

import "./menu.styles.scss";
import { BsShop } from "react-icons/bs";
import { GiBeerBottle } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { IoFitnessOutline } from "react-icons/io5";
import { PiDress } from "react-icons/pi";

const menuItems = [
  { icon: LuMonitorSmartphone, title: "Tecnologia" },
  { icon: BsShop, title: "Supermercado" },
  { icon: GiBeerBottle, title: "Bebidas" },
  { icon: VscTools, title: "Ferramentas" },
  { icon: LiaHandHoldingHeartSolid, title: "Saúde" },
  { icon: IoFitnessOutline, title: "Esportes e Fitness" },
  { icon: PiDress, title: "Moda" },
];

export function Menu() {
  return (
    <section className="menu">
      {menuItems.map((item, index) => (
        <CardMenu key={index} Icon={item.icon} title={item.title} />
      ))}
    </section>
  );
}
