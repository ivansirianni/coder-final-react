import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "../Pages/style.css"



const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        <div className='card-detail row g-0'>
            <div className="col-md-4">
                <img src={producto.url} className="img-fluid rounded-start" alt="img"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.name}</h5>
                    <p className='card-text'>Detail: {producto.details}</p>                    
                    <p className='card-text'>Price: u$D{producto.price}</p>
                    <p className='card-text'>Stock: {producto.stock} Items</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd}/><br />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;