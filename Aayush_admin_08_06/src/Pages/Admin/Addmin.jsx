// import React from 'react'  
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Addmin.css'
import {Route , Routes} from 'react-router-dom'

const Addmin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Addmin