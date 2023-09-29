import { useCartContext } from "../../context/cartContext"

const Cart = ({disco}) => {

    const {eliminarProducto} = useCartContext()
    console.log(disco)
    console.log(disco.precio)
    return (
                <tr>
                    <th scope="row" >{disco.titulo}</th>
                    <th>{disco.autor}</th>
                    <td>{parseInt(disco.precio).toFixed(2)}</td>
                    <td>{disco.quantity}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=> eliminarProducto(disco.id)}>X</button></td>
                </tr>
                
    )
}

export default Cart