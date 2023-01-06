import { async } from '@firebase/util';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import React  from 'react';
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


const Checkout = () => {


    

    const {cart, totalPrecioCarrito, emptyCart, deleteItemById} = useContext(CartContext)
    
    // const [buyer, setBuyer] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     city: "",
    //     postalCode: "",
    // })


// Expresiones regulares para los campos e-mail y teléfono
// const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
// const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    // Obtener los datos del cliente
    // const handlerBuyer = (e) => {
    //     setBuyer({ ...buyer, [e.target.name]: e.target.value })
    // }

    const makeOrder = (e) => {
     e.preventDefault()


   


        const  user = {name:'juan',phone: 2235678123, email:'juanperez@gmail.com' }
        const order = {
            buyer: user,
            items: cart
        }
        console.log('levantando la order:', order)
        saveOrder( order )
    }

    const saveOrder = async ( order ) => {
         const db = getFirestore()
         const orderCollection = collection(db, 'orders')
         const {id} = await addDoc(orderCollection, order)
         console.log('Your order ID:', {id});
        Swal.fire('Thanks for visit us!. Your order ID is :', id  );
    }
    const updateOrder = ( id ) => {
        const db = getFirestore()

        const orderDoc = doc(db, 'orders', id)
        updateDoc(orderDoc, 
            {name:'Agushgntin',
            phone: 2236466678123, 
            mail:'Agugfhhtinperez@gmail.com'}
             ).then (res => {console.log(res)})
    }



    
    const editOrderHandler = (e) => {
        e.preventDefault()
        updateOrder('43GIJZESf8octqRkmVso')
    }


    return (
        <div className='flex flex-col' >
            <h1>Checkout - Buy form</h1>
            <form className="flex flex-col" >
                <div className="col-md-3 border  " >
                    <input type="text" placeholder="Nombre completo" className="form-control"  name="nombre"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Correo" className="form-control"  name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Phone number" className="form-control"  name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="City" className="form-control"  name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Postal code " className="form-control"  name="apellido"></input>
                </div>
                <button onClick={makeOrder}  className="btn btn-primary">Confirm/buy</button>
                <button onClick={editOrderHandler}  className="btn btn-primary">Update order</button>
            </form>
        </div>
    );

}
    
export default Checkout




