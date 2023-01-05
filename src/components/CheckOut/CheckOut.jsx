import React, {useContext} from "react"
import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'

const Checkout = () => {


    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, totalPrice} = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [email1, setEmail1] = useState("");



    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        const aux = [...cart]
        aux.forEach(producto => {
            getProducto(producto.id)
            .then(prod => {
                prod.stock -= producto.cant
                updateProducto(producto.id, prod)
            })
        })
        
        createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden => {
           Swal.fire({
            title: 'Compra finalizada',
            text: `Your order Cod-${orden.id}-${new Date().getFullYear()} has been created succesfully`,
            icon: 'success',
            timer: 10000,
            confirmButtonText: 'Ok'
          })
            
            emptyCart()
            e.target.reset()
            navigate("/")
          
        }).catch(error => {
            Swal.fire({
                title: 'Process Denied',
                text: `Error 404`,
                icon: 'error',
                timer: 10000,
                confirmButtonText: 'Ok'
              })
            console.error(error)
        })
        
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Name</label>
                    <input required type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Surname</label>
                    <input required type="text" className="form-control" name="apellido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input required type="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label">Repeat your email</label>
                    <input required type="email" onChange={(e) => {setEmail1(e.target.value)}} className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI / Id Card</label>
                    <input required type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">CellPhone</label>
                    <input required type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Adress</label>
                    <input required type="text" className="form-control" name="direccion" />
                </div>
                {email === email1 ? 
                    <button type="submit" className="btn-a btn-primary">Finish Transaction</button> :
                    <button disabled type="submit" className="btn-a btn-primary">Finish Transaction</button> 
                    
                    }
                    

                
                
            </form>

        </div>
    );
}

export default Checkout;