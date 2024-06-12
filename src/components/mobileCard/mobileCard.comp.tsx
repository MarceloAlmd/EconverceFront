import { Button } from "../button/button.comp";
import "./mobileCard.styles.scss";

export function MobileCard() {
  return (
    <div className="mobileCard">
      <img
        src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
        alt=""
      />

      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

      <span className="promotionPrice">R$ 30,90</span>
      <span className="price">R$ 28,90</span>
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
