import { useState } from "react"
import './ItemCount.css'
import { Link } from "react-router-dom"



const ItemCount = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  const [toCart, setToCart] = useState(false)
  const handleRestar = ()=>{
    if (counter > initial) setCounter(counter - 1)
  }
  const handleSumar = ()=>{
    if (counter < stock) setCounter(counter + 1)
  }

  const handleOnAdd = () => {
    onAdd(counter)
    setToCart(true)
  }
  return (
      toCart === true 
      ?
      <Link to={'/carrito'}><button className="btn btn-success">Ir al Carrito</button></Link>
      :
    <>
      <div className="div-counter row">
          <button className="col-1 btn" onClick={handleRestar}>-1</button>
          <div className="col-2 text-center m-1 ">
            <p ><span >{ counter }</span></p>
          </div>
          <button className="col-1 btn" onClick={handleSumar}>+1</button>
          <button className="btn m-1" onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    </>
    
  )
}

export default ItemCount