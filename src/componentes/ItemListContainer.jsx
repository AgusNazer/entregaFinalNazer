import React, { useState } from 'react'
/* import { products } from '../mock/products' */
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect } from 'react'
import products from './mock/products'





const ItemListContainer = ({greeting}) => {

const {idCategory} = useParams()

 /* console.log(idCategory,'soy el idCategory') */

const [productList, setProductList] = useState([])

const getProducts = ()=> new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(products),2000)
  
})

useEffect(()=>{

  if (idCategory){
    getProducts()
    .then(products => setProductList(products.filter(p => p.category ===idCategory)))
    .catch(error => console.log(error))
  } else {
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.log(error))
  } 
  return () => setProductList([])

  
  
},[idCategory])

 
  return (
    <>
    <div className='text-3xl list__container__text greeting' >{greeting}  </div>
     {
      
      productList.length
      ?
      <ItemList productList={productList}/>  
      :
      <h1>Loading...</h1>
     }     
        
          
        
        
    </>
  )
}

export default ItemListContainer