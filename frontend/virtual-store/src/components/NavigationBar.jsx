import React from 'react'
import Style from '../modules/NavigationBar.module.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className={Style.navigation_bar}>
        <Link className={Style.links} to={"/"}><span>Home</span></Link>
        <Link className={Style.links} to={"/store"}><span>Cardápio</span></Link>
        <Link className={Style.links}><span>Sobre</span></Link>
        <Link className={Style.links}><span>FAQS</span></Link>
        <Link className={Style.links}><span>Contato</span></Link>

    </div>
  )
}

export default NavigationBar