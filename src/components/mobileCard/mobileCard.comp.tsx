import { Button } from "../button/button.comp";
import { MobileCardProps } from "./mobileCard";
import "./mobileCard.styles.scss";

export function MobileCard({
  img,
  description,
  price,
  openModal,
}: MobileCardProps) {
  return (
    <div className="mobileCard" onClick={openModal}>
      <img src={img} alt="" />

      <span>{description}</span>

      <span className="promotionPrice">R$ 1900,90</span>
      <span className="price">R$ {price}</span>
      <span className="options">ou 2x de R$ 49,95 sem juros</span>
      <span className="info">Frete grátis</span>

      <Button
        borderRadius="5px"
        margin="0 0 -20px 0"
        title="COMPRAR"
        width="100%"
        height="44px"
      />
    </div>
  );
}
