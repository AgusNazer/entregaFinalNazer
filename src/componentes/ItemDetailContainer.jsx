import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../componentes/mock/products';

const ItemDetailContainer = () => {

    const {id} = useParams();

   /*  console.log(id,'soy el id'); */

    const [item, setItem] = useState({})

   
    
    const getProducts = ()=> new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(products.find(product => product.id === parseInt(id))),2000)
    })
    
    useEffect(()=>{
        getProducts()
        .then(res => setItem(res)
        )
    },[])
    

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