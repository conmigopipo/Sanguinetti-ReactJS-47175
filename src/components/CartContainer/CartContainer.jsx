import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import Cart from "../Cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormFinalizarCompra from "../FormFinalizarCompra/FormFinalizarCompra";

export const CartContainer = () => {

    const {cartList, precioTotal} = useCartContext()

    return (
        cartList.length > 0 ?
        <>
            <Link to='/discos' ><button className="btn btn-outline-dark m-2">Seguir Comprando</button></Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Disco</th>
                        <th scope="col">Autor</th>
                        <th scope="col">USD</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((disco)=>(
                        <Cart disco={disco} key={disco.id}/>
                    ))}
                    <tr className="table-info">
                        <th scope="row">Precio Total:</th>
                        <td ><span>USD {precioTotal().toFixed(2)}</span></td>
                        <th ></th>
                        <th ></th>
                        <th ></th>
                    </tr>
                </tbody>
            </table>
            <FormFinalizarCompra/>
        </>
        :
        <div className="text-primary d-flex align-items-center flex-column mt-5 ">
            <h2>Su carrito está vacío</h2>
            <Link to='/discos'><button className="btn btn-outline-dark m-2">Seguir Comprando</button></Link>
        </div>
        )
}
