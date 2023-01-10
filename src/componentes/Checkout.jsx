

import { async } from '@firebase/util';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import React  from 'react';
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Checkout = () => {
    const {cart, totalPrecioCarrito, emptyCart} = useContext(CartContext)
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState('')
// Expresiones regulares para los campos e-mail y teléfono


const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

const [buyer, setBuyer] = useState({})
    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async ( data) => {
        try {
            setLoad(true)
            const db = getFirestore()
            const orderCollection = collection(db, 'orders')
            const order = await addDoc(orderCollection, data)
         console.log(order.id)
         setOrderID(order)
         emptyCart()
        Swal.fire(`Thanks for visit our shop store, your order has been created succesfully!`);
        
        }catch (error){
            console.log(error)
        }finally{
            setLoad(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let data ={
            dia: new Date(),
            items:cart,
            total: totalPrecioCarrito(),
            comprador: buyer
        }
        console.log("data",data)  
        generateOrder(data)
    }

    if(load){
        return <h1> Loading... <Loader loading={true}  /></h1>
        
    }
        return (
            <>
            {orderID ? <div>
                <h2 className='font-bold'>Thanks for buying, your order is: {orderID.id}</h2>
            </div>
            :<div className='flex flex-col' >
            <h1>Checkout - Buy form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col" >
                <div className="col-md-3 border  " >
                    <input onChange={handleInputChange} type="text" placeholder="Name" className="form-control"  name='Name'/>
                </div>
               
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="Correo" className="form-control"  name='Email'/>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} ype="text" placeholder="Phone number" className="form-control"  name='Phone'/>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="City" className="form-control"  name='City'/>
                </div>
                
                <div className="col-md-3 border">
                    <input onChange={handleInputChange} type="text" placeholder="Postal code " className="form-control"  name='PostalCode'/>
                </div>
                
                
                <div className="w-[65%] flex justify-end m-1 gap5" >
                  <button  type='submit' className="bg-teal-500 hover:bg-teal-700 hover:text-teal-100 text-white font-bold py-2 px-4 rounded-full uppercase">Confirm/buy</button>
                <Link to='/entregaFinalNazer/'>
                  <button onClick={() => emptyCart()} className="bg-purple-300 hover:bg-purple-400 border-none hover:text-red-900 font-bold  py-2 px-4 rounded-full uppercase"> Cancel/Back to shop </button>
                  </Link>
                </div>

            </form>
        </div>}
            </>
        );
    }
    export default Checkout