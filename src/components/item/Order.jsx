import "../Pages/style.css"

const Order = ({prod}) => {
    return (
        <div className="card-item border-light mb-3 cardProducto">
                        
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">{prod.email}</p>
                            <p className="card-text">{prod.fecha}</p>
                    </div>
        </div>
    );
}

export default Order;