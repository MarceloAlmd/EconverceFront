import { useState } from "react";
import "./buttonToggle.styles.scss";
import { ButtonToggleProps } from "./buttonToggle";

export function ButtonToggle({ children }: ButtonToggleProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="containerButtonToggle">
      <button className="buttonToggle" onClick={toggleVisibility}>
        {isVisible ? "Ver todos" : "Ver todos"}
      </button>
      {isVisible && <div className="toggleDiv">{children}</div>}
    </div>
  );
}
