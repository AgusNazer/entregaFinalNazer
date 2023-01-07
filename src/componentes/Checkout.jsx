// import { async } from '@firebase/util';
// import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
// import React  from 'react';
// import { useContext, useState } from "react"
// import { CartContext } from '../context/CartContext';
// import Swal from 'sweetalert2';


// const Checkout = () => {


    

//     const {cart, totalPrecioCarrito, emptyCart} = useContext(CartContext)
    
//     const [load, setLoad] = useState(false)
//     const [orderID, setOrderID] = useState()


// const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
// const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

// const [buyer, setBuyer] = useState({
//     Name: "",
//     Email: "",
//     Phone: "",
//     City: "",
//     PostalCode: "",
// })


// const {Name, Email, Phone, City, PostalCode} = buyer

    



    


//     const handleInputChange = (e) => {
//         setBuyer(({
//             ...buyer,
//             [e.target.name]:e.target.value
//         }))
//     }

   

//     const generateOrder = async ( data) => {
      
//         setLoad(true)

//         try {
//          const orderCollection = collection(db, 'orders')
//          const order = await addDoc(orderCollection, data)
//          setOrderID = (order.id)
//          emptyCart()
//          setLoad(false)
//         }catch (error){
//             console.log(error)
//         }
      
//         Swal.fire('Thanks for visit us!. Your order ID is :',  );
//     }



//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const dia = new Date()
//         const items = cart.map(e=> {return {id:e.id,title:e.title,price:e.price}})        
//         const total = totalPrecioCarrito()
//         const data = {buyer,items,dia,total}
//         console.log("data",data)  
//         generateOrder(data)
        
        
//     }

//     return (
//         <div className='flex flex-col' >
//             <h1>Checkout - Buy form</h1>
//             <form onSubmit={handleSubmit} className="flex flex-col" >
//                 <div className="col-md-3 border  " >
//                     <input onChange={handleInputChange} type="text" placeholder="Name" className="form-control"  value={Name}></input>
//                 </div>
               
//                 <div className="col-md-3 border">
//                     <input onChange={handleInputChange} type="email" placeholder="Correo" className="form-control"  value={Email}></input>
//                 </div>
                
//                 <div className="col-md-3 border">
//                     <input onChange={handleInputChange} type="number" placeholder="Phone number" className="form-control"  value={Phone}></input>
//                 </div>
                
//                 <div className="col-md-3 border">
//                     <input onChange={handleInputChange} type="text" placeholder="City" className="form-control"  value={City}></input>
//                 </div>
                
//                 <div className="col-md-3 border">
//                     <input onChange={handleInputChange} type="number" placeholder="Postal code " className="form-control"  value={PostalCode}></input>
//                 </div>
                
//                 <button   className="btn btn-primary">Confirm/buy</button>
//             </form>
//         </div>
//     );


// }
// export default Checkout



/////////////////////////////

import { async } from '@firebase/util';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import React  from 'react';
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


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
        return <h1>Cargado...</h1>
    }
        return (
            <>
            {orderID ? <div>
                <h2>Thanks for buying, your order is: {orderID.id}</h2>
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
                  <button  type='submit' className="px-5 py-2 bg-green-600 text-white font-medium uppercase">Confirm/buy</button>
                <Link to='/entregaFinalNazer/'>
                  <button onClick={() => emptyCart()} className="px-5 py-2 bg-red-600 text-white font-medium uppercase"> Cancel/Back to shop </button>
                  </Link>
                </div>

            </form>
        </div>}
            </>
        );
    }
    export default Checkout