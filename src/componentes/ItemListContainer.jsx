import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Loader from './Loader'
// import MediaQuery from 'react-responsive/types/Component'


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
       <div className=''>
        
          {/* <div className=' md:bg-contain ' style={{backgroundImage: `url("https://static1.abc.es/media/bienestar/2019/11/01/deportistas-veganos-1-kjPH--620x349@abc.jpg")`}}> */}
          <div className='text-3xl greeting  text-gray-100 hover:text-gray-600' >{greeting}  </div>
           {
        
            productList.length
            ?
            <ItemList productList={productList}/>  
            :
             <h1> Loading... <Loader loading={true}  /></h1>       }     
          
            
          
          
          </div>
        // </div>
    )
  }
  
  export default ItemListContainer























