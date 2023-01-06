import { async } from '@firebase/util';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import React  from 'react';
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


const Checkout = () => {


    

    const {cart, totalPrecioCarrito, emptyCart} = useContext(CartContext)
    
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()


// Expresiones regulares para los campos e-mail y teléfono
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

const [buyer, setBuyer] = useState({
    Name: "",
    Email: "",
    Phone: "",
    City: "",
    PostalCode: "",
})

const {Name, Email, Phone, City, PostalCode} = buyer

    



    


    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

   

    const generateOrder = async ( data) => {
        //  const db = getFirestore()
        //  const {id} = await addDoc(orderCollection, data)
        setLoad(true)

        try {
         const orderCollection = collection(db, 'orders')
         const order = await addDoc(orderCollection, data)
         setOrderID = (order.id)
         emptyCart()
         setLoad(false)
        }catch (error){
            console.log(error)
        }
        //  console.log('Your order ID:', {id});
        //arreglar la siguiente linea para que muestre el alert con el ID
        Swal.fire('Thanks for visit us!. Your order ID is :',  );
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cart.map(e=> {return {id:e.id,title:e.title,price:e.price}})        
        const total = totalPrecioCarrito()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }


    // const updateOrder = ( id ) => {
    //     const db = getFirestore()

    //     const orderDoc = doc(db, 'orders', id)
    //     updateDoc(orderDoc, 
    //         {name:'Agushgntin',
    //         phone: 2236466678123, 
    //         mail:'Agugfhhtinperez@gmail.com'}
    //          ).then (res => {console.log(res)})
    // }



    
    // const editOrderHandler = (e) => {
    //     e.preventDefault()
    //     updateOrder('43GIJZESf8octqRkmVso')
    // }


    return (
        <div className='flex flex-col' >
            <h1>Checkout - Buy form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col" >
                <div className="col-md-3 border  " >
                    <input onChange={handleInputChange} type="text" placeholder="Name" className="form-control"  value={Name}></input>
                </div>
               
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="Correo" className="form-control"  value={Email}></input>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} ype="text" placeholder="Phone number" className="form-control"  value={Phone}></input>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="City" className="form-control"  value={City}></input>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="Postal code " className="form-control"  value={PostalCode}></input>
                </div>
                
                <button   className="btn btn-primary">Confirm/buy</button>
                {/* <button onClick={editOrderHandler}  className="btn btn-primary">Update order</button> */}
            </form>
        </div>
    );


}
export default Checkout



 //     const  user = {name:'juan',phone: 2235678123, email:'juanperez@gmail.com' }
    //     const order = {
    //         buyer: user,
    //         items: cart
    //     }
    //     console.log('levantando la order:', order)
    //     saveOrder( order )
    // }