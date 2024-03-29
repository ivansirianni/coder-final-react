import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
import "../Pages/style.css"
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
           
            {cart.length === 0 ? 
            <div className="cart-empty">
                <img src="https://cdn-icons-png.flaticon.com/512/102/102661.png" className="cart-cart" alt="cart-icon" />
                <p className="cart-p">Cart is empty</p>
                <Link to={'/'}><button className="btn-a btn-empty btn-dark">Go Home</button></Link>
            </div> 
            : 
            <div className=" container cartContainer">
                {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.url} className="img-fluid rounded-start" alt="img" />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">Amount: {prod.cant}</p>
                            <p className="card-text">Single Price: u$D {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                            <p className="card-text">Total Price: u$D {new Intl.NumberFormat('de-DE').format(prod.price * prod.cant)}</p>
                            <button className="btn-b btn-danger" onClick={() => removeItem(prod.id)}>Remove<DeleteIcon /></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
            <div>
                <p className="total-amount">Total Amount: u$s {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <button className="btn-b btn-danger buttonCarts" onClick={emptyCart}>Clean the Cart</button>
                <Link to="/checkout">
                    <button className="btn-a btn-primary buttonCarts">Generate Order</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;