import { Footer } from "./components/footer/footer.comp";
import { Banner } from "./components/banner/banner.comp";
import { Header } from "./components/header/header.comp";
import { Menu } from "./components/menu/menu.comp";
import { RelatedProduct } from "./components/relatedProduct/relatedProduct.comp";
import { Submenu } from "./components/submenu/submenu.comp";
import { AdsCard } from "./components/adsCard/adsCard.comp";

import "./styles/global.scss";
import "./App.styles.scss";
import { BrandCards } from "./components/brandCards/brandCards.comp";
import { MobileCard } from "./components/mobileCard/mobileCard.comp";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <RelatedProduct />
      <Submenu />

      <main>
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
      </main>

      <div className="adsContent">
        <AdsCard title="Parceiros" />
        <AdsCard title="Parceiros" />
      </div>

      <RelatedProduct />
      <a href="#" className="seeAll">
        Ver todos
      </a>

      <div className="adsContent">
        <AdsCard title="Produtos" />
        <AdsCard title="Produtos" />
      </div>

      <h2 className="navigationByBrands">Navegue por Marcas</h2>

      <div className="Brands">
        <BrandCards />
        <BrandCards />
        <BrandCards />
        <BrandCards />
        <BrandCards />
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      <Footer />
    </>
  );
}
