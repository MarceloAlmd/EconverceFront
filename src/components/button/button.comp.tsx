import { Props } from "./button";
import "./button.styles.scss";

export function Button({ title, width, height, borderRadius, margin }: Props) {
  return (
    <button style={{ width, height, borderRadius, margin }} className="button">
      {title}
    </button>
  );
}
