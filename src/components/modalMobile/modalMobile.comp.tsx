import "./modalMobile.styles.scss";
import { ModalMobileProps } from "./modalMobile";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../button/button.comp";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export function ModalMobile({ isOpen, onClose }: ModalMobileProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="container">
        <header className="headerModal">
          <button className="closeModal" onClick={onClose}>
            <IoCloseSharp />
          </button>
        </header>

        <div className="content">
          <img
            src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
            alt=""
          />

          <div className="infoContentModal">
            <h3>LOREM IPSUM DOLOR SIT AMET</h3>
            <h2>R$ 1.499,90</h2>
            <span>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </span>

            <a href="">Veja mais detalhes do produto</a>

            <div className="plusAndMinus">
              <button className="minus">
                <FiMinus />
              </button>
              1
              <button className="plus">
                <GoPlus />
              </button>
            </div>

            <Button
              borderRadius="5px"
              margin="0 0 -20px 0"
              title="COMPRAR"
              width="100%"
              height="44px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
