import { CardMenuProps } from "./cardMenu";

import "./cardMenu.styles.scss";

export function CardMenu({ Icon, title }: CardMenuProps) {
  return (
    <section className="cardMenu">
      <div className="contentIcon">{<Icon />}</div>
      <span>{title}</span>
    </section>
  );
}
