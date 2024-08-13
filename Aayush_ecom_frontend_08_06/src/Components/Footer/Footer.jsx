import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_logo from '../Assets/instagram_icon.png'
import pint_icon from '../Assets/pintester_icon.png'
import what_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOP IT</p>
        </div>
        <ul className='footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer_social_icon'>
            <div className='footer_icons_container'>
                <img src={insta_logo} alt=''/>  
            </div>
            <div className='footer_icons_container'>
                <img src={pint_icon} alt=''/>  
            </div>
            <div className='footer_icons_container'>
                <img src={what_icon } alt=''/>  
            </div>
            <div className='footer_copyright'>
                <hr/>
                <p>Copyrigt @ 2024 All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer