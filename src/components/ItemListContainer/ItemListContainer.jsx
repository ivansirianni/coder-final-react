import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import {getProductos} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';
import "../Pages/style.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {idCategory} = useParams()

    useEffect(() => {
        if(idCategory) {
            getProductos()
            .then(products => {
                const productsList= products.filter(prod => prod.category === idCategory).filter(prod => prod.stock > 0)
                console.log(productsList)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[idCategory]);
    
    return (
        <div className= 'card-detail row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;