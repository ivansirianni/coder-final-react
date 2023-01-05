import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"





const firebaseConfig = {
    apiKey: "AIzaSyCUznTZUKLkz4chjf4bXNC3iIy5M_BBkMI",
    authDomain: "ivodev-ecommerce.firebaseapp.com",
    projectId: "ivodev-ecommerce",
    storageBucket: "ivodev-ecommerce.appspot.com",
    messagingSenderId: "239785739972",
    appId: "1:239785739972:web:a22ce7de0266ceb2c5eb91"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)



const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "items",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"items", id))
    return estado
}


const getProductos = async() => {
    const productos = await getDocs(collection(db, "items"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "items",id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = 0
    }
    
    return item
}



const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        celular:cliente.celular,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export { getProducto, getProductos, createOrdenCompra, getOrdenCompra, updateProducto, deleteProducto}