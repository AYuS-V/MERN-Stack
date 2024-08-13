import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/Shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { getTotalCartAmount ,all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="cartitems_format_main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id]>0) {
          return (
            <div key={e.id}>
              <div className="cartitem_format cartitems_format_main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="carticon_product_icon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems_quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img
                  className="catritems_remove_icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems_down">
        <div className="cartitems_total">
          <h1>Cart Total</h1>
          <div className="cartitems_total_item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cartitems_total_item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className="cartitems_total_item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>Procced to checkout</button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
