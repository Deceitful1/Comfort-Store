import React from "react";
import banner1 from '../assets/banner1-confort-store.png'
import banner2 from '../assets/banner2.png'
import home from '../modules/Home.module.css'
import BannerCarousel from "./BannerCarousel";
import card1 from '../assets/card1.png'
import batedeira from '../assets/batedeira.png'
import batedeira2 from '../assets/batedeira2.png'
import us from '../assets/us-banner.png'
import cake from '../assets/cake.png'
import heart from '../assets/heart2-icon.png'
import product from '../assets/produtos selecionados.png'
import variety from '../assets/variety4.jpeg'
import guloseimas from '../assets/guloseimas.png'
import contact from '../assets/contact-us.png'
import CakeIcon from "./CakeIcon";
import MixerIcon from "./MixerIcon";
import Variety from "./Variety";
import Items from "./Items";
import Products from "./Products";


function Home() {
  return (
    <>
      <div className="main-container">
        <div className={home.main_banner_images}>
          <BannerCarousel />
        </div>
        <section className={home.features}>
          <ul>
            <li><div className={home.feature_card}><img src={card1} alt="" className={home.feature_card_img} /><h3>EM DESTAQUE</h3></div></li>
            <li><div className={home.feature_card}><img src={card1} alt="" className={home.feature_card_img} /><h3>EM DESTAQUE</h3></div></li>
            <li><div className={home.feature_card}><img src={card1} alt="" className={home.feature_card_img} /><h3>EM DESTAQUE</h3></div></li>
            <li><div className={home.feature_card}><img src={card1} alt="" className={home.feature_card_img} /><h3>EM DESTAQUE</h3></div></li>
          </ul>
        </section>
        <section className={home.shop}>
          <img src={us} alt="" className={home.choose_us_banner} id={home.banner_us} />
          <div className={home.options_padding}>
            <div className={home.options}>
              <div className={home.option}>
                <MixerIcon className={home.icon} />
                <h3>Produção Artesanal</h3>
              </div>
              <div className={home.option}>
                <CakeIcon className={home.icon} />
                <h3>Ingredientes Selecionados</h3>
              </div>
              <div className={home.option}>
                <Variety className={home.icon} />
                <h3>Variedade para Todos os Gostos</h3>
              </div>
              <div className={home.option}>
                <Items />
                <h3>Feito com Carinho</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={home.featured}>
        <div className={home.products_box}>
        <div>
          <h1 id={home.products_h1}>Produtos</h1>
          </div>
          <Products className={home.product} />
          </div>
    
        </section>
      
        <section className={home.all_products}>
          <div className={home.all_products_text}>
            <h2>Confira os favoritos</h2>
            <p>Macarons delicados, jujubas coloridas, marshmallows macios, jawbreakers divertidos, pirulitos artesanais, cupcakes decorados, brownies irresistíveis, cookies crocantes, brigadeiros gourmet, trufas refinadas e bolos personalizados compõem uma coleção de doces criada para encantar em cada detalhe. Nossa confeitaria reúne uma grande variedade de produtos preparados com ingredientes selecionados, combinando sabores marcantes, texturas únicas e uma apresentação cuidadosamente elaborada. Cada doce é pensado para proporcionar uma experiência especial, transformando celebrações, presentes e momentos do dia a dia em ocasiões ainda mais doces e memoráveis.</p>
            <button className={home.cta_btn}>Comprar</button>
          </div>
          <div className={home.products_img_container}>
            <img src={guloseimas} alt="" id={home.guloseima_img} />

          </div>
        </section>
        <section className={home.contact_us}>
          <img src={contact} alt="" className={home.contact_us_banner} />
          <div className={home.contact_container}>
            <p>Se você quer fazer uma encomenda personalizada para um evento especial ou tem alguma dúvida sobre nosso cardápio, entre em contato!</p>
            <button className={home.cta_btn} id={home.contact_btn}>Entrar em contato</button>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home;