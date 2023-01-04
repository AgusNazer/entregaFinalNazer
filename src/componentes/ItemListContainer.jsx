import React, { useState } from 'react'
/* import { products } from '../mock/products' */
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect } from 'react'
import products from './mock/products'


const ItemListContainer = ({greeting}) => {

  const {idCategory} = useParams()
  
   
  
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





///////////////////
// antes de firebase


// const ItemListContainer = ({greeting}) => {

//   const {idCategory} = useParams()
  
   
  
//   const [productList, setProductList] = useState([])
  
//   const getProducts = ()=> new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(products),2000)
    
//   })
  
//   useEffect(()=>{
  
//     if (idCategory){
//       getProducts()
//       .then(products => setProductList(products.filter(p => p.category ===idCategory)))
//       .catch(error => console.log(error))
//     } else {
//       getProducts()
//       .then(products => setProductList(products))
//       .catch(error => console.log(error))
//     } 
//     return () => setProductList([])
  
    
    
//   },[idCategory])
  
   
//     return (
//       <>
//       <div className='text-3xl list__container__text greeting' >{greeting}  </div>
//        {
        
//         productList.length
//         ?
//         <ItemList productList={productList}/>  
//         :
//         <h1>Loading...</h1>
//        }     
          
            
          
          
//       </>
//     )
//   }
  
//   export default ItemListContainer









/////
// con firebase de youtube

// import React, { useState, useEffect } from 'react'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'

// import { useParams } from 'react-router-dom'
// import ItemList from './ItemList'







// const ItemListContainer = ({greeting}) => {

// const {idCategory} = useParams()



// const [item, setItem] = useState([])



// useEffect(()=>{
//        const querydb = getFirestore()
//        const queryCollection = collection(querydb, 'items')
//        getDocs(queryCollection)
//        .then(res => setItem(res.docs.map (i => ({id: i.id, ...i.data() } )) ))
       




  
  
// },[idCategory])

 
//   return (
//     <>
//     <div className='text-3xl list__container__text greeting' >{greeting}  </div>
//      {
      
//       item.length
//       ?
//       <ItemList item={item}/>  
//       :
//       <h1>Loading...</h1>
//      }     
        
          
        
        
//     </>
//   )
// }

// export default ItemListContainer