import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Context
import { CartContextProvider } from '../context/CartContext';
//Componentes
import NavBar from './NavBar/NavBar';
import Home  from "./Pages/Home"
import About from "./Pages/About"
import Orders from "./Pages/Orders"
import Footer from "./Footer/Footer"
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './CheckOut/CheckOut'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/"	element={ <Home />	} />							
						<Route path="/About" element={ <About />	} /> 
            <Route path="/Orders" element={ <Orders />	} />           
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element = {<h1>Page Not Found</h1>} />
          </Routes>
          <Footer /> 
        </CartContextProvider>   
      </BrowserRouter>     
      
    </>
   
  );
}

export default App;