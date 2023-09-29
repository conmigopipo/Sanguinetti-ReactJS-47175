import { useCartContext } from "../../context/cartContext"
import { useState } from "react"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import './FormFinalizarCompra.css'
import Swal from "sweetalert2"

const FormFinalizarCompra = () => {
    const {cartList, precioTotal, emptyCart} = useCartContext()
    const [id, setId] = useState("")
    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        telefono: '',
    })


    const handleOnChange = (evt)=>{
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }
    
    const handleBlur = (evt) =>{
        const inputName = evt.target.name
        const inputValue = evt.target.value

        inputValue.length < 3 
            ? setErrors ({
                ...errors,
                [inputName]: `${inputName} debe contener más de 3 caracteres`
            })
            : setErrors({
                ...errors,
                [inputName]: "",
            })
    }

    const handleOrder = async (evt)=>{
        evt.preventDefault()
        if (dataForm.name === "" || dataForm.email === "" || dataForm.telefono === "" ) {return}
        else
        {            
            
     
        const order = {}
            order.client = dataForm
            order.items = cartList.map(disco=>{
                return {id: disco.id, name: disco.titulo, price: disco.precio, quantity: disco.quantity }
            })
            
            order.total = precioTotal().toFixed(2)
            
            const queryDB = getFirestore()
            const ordersCollection = collection(queryDB, 'orders')
            
            addDoc(ordersCollection, order)
            .then(({id})=> {
                setId(id)
                Swal.fire({
                    title: 'Compra finalizada con éxito',
                    text: 'id de compra: ' + id,
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                        },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
            })
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
                    telefono: '',
                })
            })
            emptyCart()}
        }

    return (
        <form onSubmit={handleOrder} className="form-inline row">
            <div className="form-group mb-2 d-flex m-2 col">
                <label className="m-1 mt-0">
                    Nombre
                    <input 
                        className="form-control"
                        type="text" 
                        name="nombre" 
                        placeholder="ingresar el nombre"
                        value={dataForm.nombre}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                    />
                    <p className="text-danger m-2 mt-0 fst-italic fw-light">{errors.nombre}</p>
                </label>
                <label className="m-1 mt-0">
                    Email
                    <input 
                        className="form-control"
                        type="email" 
                        name="email" 
                        placeholder="ingresar el email"
                        value={dataForm.email}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                    />
                    <p className="text-danger m-2 mt-0 fst-italic fw-light">{errors.email}</p>
                </label>
                <label className="m-1 mt-0">
                    Teléfono
                    <input 
                        className="form-control"
                        type="number" 
                        name="telefono" 
                        placeholder="ingresar el telefono"
                        value={dataForm.telefono}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                    />
                    <p className="text-danger m-2 mt-0 fst-italic fw-light">{errors.telefono}</p>
                </label>
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <button type="submit" className="btn btn-outline-success m-3 mt-1">Finalizar Compra.</button>
                </div>
                <div>
                    <button className="btn btn-danger m-3 mt-1" onClick={emptyCart}>Vaciar Carrito</button>
                </div>
            </div>
        </form>
    )
}


export default FormFinalizarCompra