import { useState } from "react"
import './ItemCount.css'



const ItemCount = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)

  const handleRestar = ()=>{
    if (counter > initial) setCounter(counter - 1)
  }
  const handleSumar = ()=>{
    if (counter < stock) setCounter(counter + 1)
  }

  const handleOnAdd = () => onAdd(counter)
  return (
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