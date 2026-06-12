import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../modules/Navbar.module.css'
import CartIcon from './CartIcon'
import ProfileIcon from './ProfileIcon'
import NavigationBar from './NavigationBar'
import SearchIcon from './SearchIcon'
import InstagramIcon from './InstagramIcon'
import WhatsappIcon from './WhatsappIcon'
import Cloud from './Clouds'



function Navbar() {
    return (
        <>
            <div className={Styles.navbar_container}>
                <div className={Styles.navbar}>
                    <div id="logo">
                        <Link to="/" className={Styles.logo_link}>Comfort Store</Link>
                    </div>
                    <NavigationBar />

                    <div className={Styles.links}>
                        <div id="" className={Styles.my_account}>
                            <ProfileIcon className={Styles.profile_icon} />
                            <Link to="/user" className={Styles.profile_link}></Link>
                        </div>
                        <div className={Styles.cart}>
                            <CartIcon className={Styles.cart_icon} />
                        </div>
                        <div className={Styles.cart}>
                            <InstagramIcon classname={Styles.instagram_icon} />

                        </div>
                        <div className={Styles.cart}>
                            <WhatsappIcon classname={Styles.whatsapp_icon} />
                        </div>
                        
                    </div>
                   
<div className="clouds">
                </div>
              
                </div>
                <Cloud className={Styles.clouds} wi={5000}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
                <Cloud className={Styles.clouds}/>
            </div>
            
        </>
    )
}

export default Navbar