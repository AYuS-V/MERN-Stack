import React from 'react'
import './Newcollection.css'
// import new_collection from '../Assets/new_collections'
import Item from '../Items/Item'
import { useState } from 'react'
import { useEffect } from 'react'

const Newcollection = () => {

  const [new_collection,setNew_collection] = useState([]); 

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='new_collection'>
        <h1>New Collection</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Newcollection