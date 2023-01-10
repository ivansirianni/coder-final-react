import { useState, createContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }

            setCart([...cart, nuevoProducto])
        }
        
    }

    const emptyCart = () => {
        toast.error('🛒 Cart was cleared ', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return setCart([])
    }
   
    function removeItem (id) {
        toast.error('✨ Item Removed', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.price), 0)
    }
    console.log(cart)
    return (
        <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem,getItemQuantity, totalPrice}}>
            {props.children}
        <ToastContainer />

        </CartContext.Provider>
    )

}

export {CartContextProvider, CartContext}