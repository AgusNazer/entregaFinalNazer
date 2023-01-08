import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect } from 'react'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {

  const {idCategory} = useParams()
  
   
  
  const [productList, setProductList] = useState([])
  

  
const getProducts= async () => {  
    const dataBase= getFirestore()
    const collectionRef = collection (dataBase, 'items')
    const snapshot = await getDocs(collectionRef)
    setProductList(snapshot.docs.map(d => ({id:d.id, ...d.data()  } )))
}


const getProductsCategory = async () => {  
    const dataBase= getFirestore()
    const collectionRef = query(collection(dataBase,"items"),where('categoryId', '==', idCategory))
    const snapshot = await getDocs(collectionRef)
    setProductList(snapshot.docs.map(d => ({id:d.id, ...d.data()  } )))   
}
useEffect(()=>{
   
    idCategory ? getProductsCategory():getProducts()
    
     
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























