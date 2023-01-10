
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
import Checkout from './componentes/Checkout'
import Footer from './componentes/Footer'




function App() {
  
    return (
        <CartContextProvider>
      <BrowserRouter>
          <div className='app'>
         
            <NavBar/>
        <Routes>
           <Route path='/entregaFinalNazer/' element={<ItemListContainer greeting='Welcome to Yor-ShooStore!' />} />  
           <Route path='/entregaFinalNazer/item/:id' element={<ItemDetailContainer />}/> 
           <Route path='/entregaFinalNazer/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/entregaFinalNazer/CartView' element={<CartView/>}/> 
           <Route path='/entregaFinalNazer/CartWidget' element={<CartWidget/>}/>
           <Route path='/entregaFinalNazer/Checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
      </CartContextProvider>
      
      )
    }
    
    export default App