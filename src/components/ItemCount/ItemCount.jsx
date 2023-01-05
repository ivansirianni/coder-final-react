import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light mb-2'>-</button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light mb-2'>+</button> <br />
            <button className="btn-a btn-dark mb-2" onClick={agregarAlCarrito}>Add To Cart</button>
            <Link to="/checkout"><button onClick={agregarAlCarrito} className="btn-a btn-secondary">Generate Order</button></Link>
        </>
    );
}

export default ItemCount;