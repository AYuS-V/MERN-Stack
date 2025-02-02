import React, { useState , useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/Shopcontext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const{getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo} alt=""/>
            <p>SHOP IT</p>
        </div>
        <ul className='nav_menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav_login_cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>LogOut</button>
            :<Link to='/login'><button>Login</button></Link>}
            
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='add_cart_count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar