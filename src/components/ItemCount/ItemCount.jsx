import {useState} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        toast.success('✨ Added To Cart!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

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
            <Link to="/"><button className="btn-a btn-secondary">To Home</button></Link>
            <ToastContainer />
        </>
    );
}

export default ItemCount;