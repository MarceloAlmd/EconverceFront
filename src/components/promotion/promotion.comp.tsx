import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import "./promotion.styles.scss";

export function Promotion() {
  return (
    <div className="promotion">
      <div>
        <IoShieldCheckmarkOutline />
        <span>
          Compra <span className="highlight">100% segura </span>
        </span>
      </div>

      <div>
        <CiDeliveryTruck />
        <span>
          <span className="highlight">Frete grátis</span> acima de R$ 200
        </span>
      </div>

      <div>
        <CiCreditCard1 />
        <span>
          <span className="highlight">Parcele</span> suas compras
        </span>
      </div>
    </div>
  );
}
