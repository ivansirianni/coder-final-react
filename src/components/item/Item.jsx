import { Link } from "react-router-dom";
import "../Pages/style.css"

const Item = ({prod}) => {
    return (
        <div className="card-item border-light mb-3 cardProducto">
                        <img src={prod.url} className="card-img-top cardImg" alt="cardimg" />
                        <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">{prod.category}</p>
                            <p className="card-text">u$D {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                           <Link  to={`/product/${prod.id}`}> <button className='btn-a '>Buy Now</button></Link>
                    </div>
        </div>
    );
}

export default Item;