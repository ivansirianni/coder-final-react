import {useState, useEffect} from 'react';
import OrderList from '../itemList/OrderList.jsx';
import {getOrders} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';
import "../Pages/style.css"

const OrderListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {idOrder} = useParams()

    useEffect(() => {
        if(idOrder) {
            getOrders()
            .then(products => {
                const productsList= products.filter(prod => prod.id === idOrder)
                console.log(productsList)
                const cardProductos = OrderList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getOrders().then(products => {
                const productsList= products.filter(prod => prod.nombre)
                const cardProductos = OrderList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[idOrder]);
    
    return (
        <div className= 'card-orders row cardProductos' >
            {productos}
        </div>
       
    );
}

export default OrderListContainer;