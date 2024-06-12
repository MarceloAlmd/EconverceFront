import "./footer.stykes.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import useFooter from "./useFooter";
import { Button } from "../button/button.comp";

export function Footer() {
  const { paymentMetodUrl, footerCreditImg } = useFooter();

  return (
    <footer>
      <main>
        <div className="firstDiv">
          <section className="leftFirstDiv">
            <div className="linkSection">
              <h2>Sobre nós</h2>
              <div className="links">
                <a href="#">CONHEÇA</a>
                <a href="#">COMO COMPRAR</a>
                <a href="#">INDICAÇÃO E DESCONTO</a>
              </div>
              <div className="linksSocial">
                <a href="#">
                  <FaFacebookF color="white" />
                </a>
                <a href="#">
                  <FaInstagram color="white" />
                </a>
                <a href="#">
                  <FaYoutube color="white" />
                </a>
              </div>
            </div>
            <div className="linkSection">
              <h2>INFORMAÇÕES ÚTEIS</h2>
              <div className="links">
                <a href="#">FALE CONOSCO</a>
                <a href="#">DÚVIDAS</a>
                <a href="#">PRAZOS DE ENTREGA</a>
                <a href="#">POLÍITICA DE PRIVACIDADE</a>
                <a href="#">TROCAS E DEVOLUÇÕES</a>
              </div>
            </div>
            <div className="linkSection">
              <h2>FORMAS DE PAGAMENTO</h2>
              <div className="paymentImages">
                {paymentMetodUrl.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={`Método de pagamento ${index}`}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="rigthFirstDiv">
            <div className="destaque">
              <div>
                <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
                <h1>
                  <strong>NOVIDADES E PROMOÇÕES</strong>
                </h1>
              </div>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
                adipisicingadipisicing.
              </h3>
              <div className="inputEmail">
                <input placeholder="SEU EMAIL" />
                <Button title="OK" />
              </div>
            </div>
          </section>
        </div>
        <div className="secondDiv">
          <p className="copyright">
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <div className="imgCopyright">
            {footerCreditImg.map((item, index) => (
              <img
                src={item}
                key={index}
                style={{
                  height: 40,
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </footer>
  );
}
