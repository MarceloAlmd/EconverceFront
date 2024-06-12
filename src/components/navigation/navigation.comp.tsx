import { LuCrown } from "react-icons/lu";

import "./navigation.styles.scss";

export function Navigation() {
  return (
    <nav className="navigation">
      <span>Todas Categorias</span>
      <span>Supermercado</span>
      <span>Livros</span>
      <span>Moda</span>
      <span>Lançamentos</span>
      <span className="isCheck">Ofertas do dia</span>
      <span className="crown">
        <LuCrown />
        Assinatura
      </span>
    </nav>
  );
}
