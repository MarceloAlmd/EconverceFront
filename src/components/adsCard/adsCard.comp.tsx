import { Button } from "../button/button.comp";
import { AdsCardProps } from "./adsCard";
import "./adsCard.styles.scss";

export function AdsCard({ title }: AdsCardProps) {
  return (
    <section className="adsCard">
      <h2>{title}</h2>

      <span>Lorem ipsum dolor sit amet, consectetur</span>

      <Button
        title="Confirmar"
        width="131px"
        height="48px"
        borderRadius="10px"
      />
    </section>
  );
}
