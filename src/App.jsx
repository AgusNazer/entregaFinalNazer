
{/* <FontAwesomeIcon icon="fa-thin fa-trash" /> */}
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
 import CartView from './componentes/CartView'
// import Footer from './componentes/Footer'

//  arreglar rutas de Cart componente.

function App() {
  
// PONER EN LAS RUTAS UNA NUEVA RUTA PARA EL FIREBASE
    return (
        <CartContextProvider>
      <BrowserRouter>
          <div className='app'>
         
            <NavBar/>
            {/* <Footer/> */}
        <Routes>
           <Route path='/entregaFinalNazer/' element={<ItemListContainer greeting='Welcome to shoos shop' />} />  
           <Route path='/entregaFinalNazer/item/:id' element={<ItemDetailContainer />}/> 
           <Route path='/entregaFinalNazer/category/:idCategory' element={<ItemListContainer/>}/>
          {/* arreglar la ruta del carrito */}
            <Route path='/entregaFinalNazer/CartView' element={<CartView/>}/> 
           <Route path='/entregaFinalNazer/CartWidget' element={<CartWidget/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </CartContextProvider>
      
      )
    }
    
    export default App