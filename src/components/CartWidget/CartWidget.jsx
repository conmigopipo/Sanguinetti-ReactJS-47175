import { useCartContext } from "../../context/cartContext"
import "./CartWidget.css"

const CartWidget = () => {

  const {cantidadTotal} = useCartContext()

  return (
    <div className="card-carrito shadow rounded-pill text-danger d-inline-flex"> {cantidadTotal()}🛒</div>
  )
}

export default CartWidget