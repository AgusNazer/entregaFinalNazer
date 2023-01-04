import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../componentes/mock/products';
import { getFirestore, doc, getDoc } from 'firebase/firestore';




const ItemDetailContainer = () => {

    const {id} = useParams();

   /*  console.log(id,'soy el id'); */

    const [item, setItem] = useState({})

   
    const getProduct = async () => {
        const dataBase= getFirestore()
            const document = doc(dataBase, "items", id)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)
    }
    // const getProducts = ()=> new Promise((resolve, reject)=>{
    //     setTimeout(()=>resolve(products.find(product => product.id === parseInt(id))),2000)
    // })
    
    useEffect(()=>{
        // getProducts()
        // .then(res => setItem(res)

        getProduct()
        // )
    },[id])
    

    return (
        <>
        {
         item
         ?  
            <ItemDetail  item={item}/>
            
        :
        <h1>Loading...</h1>
        }
        </>

      )
}

export default ItemDetailContainer