import React, {Fragment, useState} from 'react';

const Checkout = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <div className='flex flex-col' >
            <h1>Checkout - Form</h1>
            <form className="flex flex-col" >
                <div className="col-md-3 border  " >
                    <input type="text" placeholder="Nombre completo" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Correo" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Password" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="City" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3 border">
                    <input type="text" placeholder="Code postal" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button type="submit" className="btn btn-primary">Confirmar compra</button>
            </form>
            {/* <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul> */}
        </div>
    );
}
 



export default Checkout