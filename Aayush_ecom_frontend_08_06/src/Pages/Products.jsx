import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import Description from '../Components/DescriptionBox/Description';
import Relatedproducts from '../Components/ReletedProducts/Relatedproducts';

const Products = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div className='products'>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description product={product}/>
      <Relatedproducts product={product}/>
    </div>
  )
}

export default Products