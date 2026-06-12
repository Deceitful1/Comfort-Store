import React from 'react'
import s from '../modules/Store.module.css'
import jujuba from '../assets/jujubas.png'
import Products from './Products'
import SearchIcon from './SearchIcon'

const Store = () => {
  return (
    <>
  <section className={s.main_banner_section}>
<div className={s.text_banner}>
  <h1>Lorem impsum</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nisi voluptates impedit dolor aspernatur laudantium vel voluptatibus dignissimos. Soluta, molestiae itaque accusamus labore dolores corrupti expedita praesentium neque corporis! Autem.</p>
  </div>

 <div>
  <img src={jujuba} alt="" className={s.image_banner}/>
 </div>
  </section>
  <section className={s.products_section}>
    <div className={s.filters}>
<div className={s.product_filter}>
  <form>
    <details>
      <summary>Disponibilidade</summary>
      </details>
      <details>
        <summary>Preço</summary>
      </details>
      <details>
        <summary>Filtrar por: </summary>
      </details>
  </form>
</div>
<div className={s.search_bar_div}>
<input type="text" placeholder='Buscar produto' id={s.search_bar}/>
<SearchIcon/>
</div>

    </div>
  </section>
  <section className={s.all_products}>
    <div className="product-container">
<Products className={s.product}/>
</div>
  </section>
    </>
  )
}

export default Store