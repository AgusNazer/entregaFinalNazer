

import { CartContextProvider } from './context/CartContext'
import './App.css'
import NavBar from './componentes/NavBar'
import './componentes/NavBar.css'
import ItemListContainer from './componentes/ItemListContainer'
import './componentes/ItemListContainer.css'
import ItemDetailContainer from './componentes/ItemDetailContainer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './componentes/ItemCount.css'
import './componentes/Item.css'
import './componentes/ItemList.css'
import CartWidget from './componentes/CartWidget'
// import Cart from './componentes/Cart'
// import Footer from './componentes/Footer'



function App() {
  
// PONER EN LAS RUTAS UNA NUEVA RUTA PARA EL FIREBASE
    return (
        <CartContextProvider>
      <BrowserRouter>
          <div className='app'>
         
            <NavBar/>
            {/* <Footer/> */}
        <Routes>
           <Route path='/preEntregaNazer/' element={<ItemListContainer greeting='Welcome to shoos shop' />} />  
           <Route path='/preEntregaNazer/item/:id' element={<ItemDetailContainer />}/> 
           <Route path='/preEntregaNazer/category/:idCategory' element={<ItemListContainer/>}/>
          {/* arreglar la ruta del carrito */}
            {/* <Route path='/preEntregaNazer/Cart' element={<Cart/>}/>  */}
           <Route path='/preEntregaNazer/CartWidget' element={<CartWidget/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </CartContextProvider>
      
      )
    }
    
    export default App