import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
// import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaulCart = (props)=>{
    let cart = {};
    //all_product.length
    for (let index = 0; index < 300+1; index++) {  
        cart[index]= 0;
        
    }
    return cart;
}
const ShopContextProvider = (props) =>{

    const[all_product,setAll_Proudct] = useState([])
    const [cartItem, setCartItem] = useState(getDefaulCart())

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Proudct(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItem(data))
                
        }

    },[])
    
    const addToCart= (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accpet:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((response)=>response.json).then((data)=>console.log(data));
        }
    }
    
    const removeFromCart= (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accpet:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((response)=>response.json).then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItem[item] * itemInfo.new_price;
                }
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem= 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartItems , getTotalCartAmount , all_product, cartItem, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
