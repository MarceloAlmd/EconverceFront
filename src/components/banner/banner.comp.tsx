import { Button } from "../button/button.comp";
import "./banner.styles.scss";

export function Banner() {
  return (
    <section className="banner">
      <div className="contentBanner">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos </h2>
        <Button
          width="227px"
          height="60px"
          borderRadius="5px"
          title="Ver Produto"
          margin="50px 0"
        />
      </div>
    </section>
  );
}
