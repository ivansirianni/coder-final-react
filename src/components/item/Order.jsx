import "../Pages/style.css"


const Order = ({prod}) => {
    return (
        <div className="card-order border-light mb-3 cardProducto">
                        <div className="card-order-body">
                            <h5 className="card1-title">Client: {prod.nombre} {prod.apellido}</h5>
                            <p className="card1-text">Order ID: <strong>{prod.id}</strong></p>
                             <p className="card1-text">Email: {prod.email}</p>
                             <p className="card1-text">Cell: {prod.celular}</p>
                             <p className="card1-text">Date: {prod.fecha}</p>
                             <p className="card1-text">Amount: u$s{prod.precioTotal}</p>
                        </div>
        </div> 
       
    );
}

export default Order;
