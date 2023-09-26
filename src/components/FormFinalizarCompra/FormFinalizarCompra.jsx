import { useCartContext } from "../../context/cartContext"
import { useState } from "react"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import './FormFinalizarCompra.css'

const FormFinalizarCompra = () => {

    const {cartList, precioTotal, emptyCart} = useCartContext()
    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    const handleOnChange = (evt)=>{
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
        console.log(dataForm)
    }
    
    const handleOrder = async (evt)=>{
        evt.preventDefault()
        const order = {}
        order.client = dataForm
            order.items = cartList.map(disco=>{
                return {id: disco.id, name: disco.titulo, price: disco.precio, quantity: disco.quantity }
            })
            
            order.total = precioTotal().toFixed(2)
            
            const queryDB = getFirestore()
            const ordersCollection = collection(queryDB, 'orders')
            
            addDoc(ordersCollection, order)
            .then(resp=> {
                cartList.forEach(disco => {
                    const queryUpdateStock = doc(queryDB, 'discos', disco.id)
                    const newStock = disco.stock - disco.quantity
                    updateDoc(queryUpdateStock, {stock:  newStock})
                })
            })
            .catch((error) => {
                console.error('Error al procesar la orden:', error);
            })
            .finally(()=>{
                setDataForm({
                    nombre: '',
                    email: '',
                    telefono: ''
                })
            })
            emptyCart()
        }

    return (
        <form onSubmit={handleOrder} className="form-inline">
            <div className="form-group mb-2 d-flex m-2">
                <input 
                    className="form-control w-25"
                    type="text" 
                    name="nombre" 
                    placeholder="ingresar el nombre"
                    value={dataForm.nombre}
                    onChange={handleOnChange}
                />
                <input 
                    className="form-control w-25"
                    type="email" 
                    name="email" 
                    placeholder="ingresar el email"
                    value={dataForm.email}
                    onChange={handleOnChange}
                />
                <input 
                    className="form-control w-25"
                    type="number" 
                    name="telefono" 
                    placeholder="ingresar el telefono"
                    value={dataForm.telefono}
                    onChange={handleOnChange}
                />
            </div>
            <button type="submit" className="btn btn-outline-success m-3 mt-1">Finalizar Compra.</button>
        </form>
    )
}


export default FormFinalizarCompra