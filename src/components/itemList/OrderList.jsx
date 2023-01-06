import Order from "../item/Order"

const OrderList = ({productsList}) => {
    return (
        <>
        
            {productsList.map(producto => <Order key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default OrderList;