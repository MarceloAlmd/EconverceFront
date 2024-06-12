import { Footer } from "./components/footer/footer.comp";
import { Banner } from "./components/banner/banner.comp";
import { Header } from "./components/header/header.comp";
import { Menu } from "./components/menu/menu.comp";
import { RelatedProduct } from "./components/relatedProduct/relatedProduct.comp";
import { Submenu } from "./components/submenu/submenu.comp";
import { AdsCard } from "./components/adsCard/adsCard.comp";
import { BrandCards } from "./components/brandCards/brandCards.comp";
import { MobileCard } from "./components/mobileCard/mobileCard.comp";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { product } from "./constants/mock";

import "./styles/global.scss";
import "./App.styles.scss";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { ModalMobile } from "./components/modalMobile/modalMobile.comp";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings: SwiperProps = {
    slidesPerView: 4,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <RelatedProduct />
      <Submenu />

      <main>
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
          {product.products.map((product) => (
            <SwiperSlide key={product.descriptionShort}>
              <MobileCard
                openModal={() => setIsModalOpen(true)}
                img={product.photo}
                description={product.descriptionShort}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
          {product.products.map((product) => (
            <SwiperSlide key={product.descriptionShort}>
              <BrandCards />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
      <ModalMobile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
