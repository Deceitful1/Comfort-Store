import React from 'react'
import footer from '../assets/footer.png'
import style from '../modules/Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <img src={footer} alt="" id={style.footer_divider} />
            <div className={style.footer_container}>
                <div className={style.items}>
                    <div className={style.item}></div>
                    <div className={style.item}>
                        <div className={style.information}>
                            <h4>Informações</h4>
                            <ul>
                                <li>Home</li>
                                <li>Cardápio</li>
                                <li>Sobre</li>
                                <li>FAQs</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.information}>
                            <h4>Loja</h4>
                            <ul>
                                <li>Carrinho</li>
                                <li>Perfil</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.about_us}>
                            <h4>Comfort Store</h4>
                            <p>Transformamos ingredientes selecionados em momentos de pura felicidade. Nossos bolos e doces são feitos diariamente com amor, carinho e aquele gostinho artesanal que deixa qualquer dia mais doce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer