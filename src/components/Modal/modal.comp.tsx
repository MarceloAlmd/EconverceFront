import { Produtos } from "../../constants/mock";
import { Counter } from "../counter/counter.comp";
import "./modal.styles.scss";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <IoClose />
        </button>

        <div className="modal-content-product">
          <img
            src={Produtos.products[0].photo}
            alt="Product"
            className="modal-content-product-image"
          />
          <div className="modal-content-product-info">
            <h2 className="modal-content-product-title">
              {Produtos.products[0].productName}
            </h2>
            <h3 className="modal-content-product-price">
              R$ {Produtos.products[0].price.toFixed(2)}
            </h3>
            <p className="modal-content-product-description">
              {Produtos.products[0].descriptionShort}
            </p>
            <Counter />
            <button className="modal-content-product-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
