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

  return (
    <>
      <div className="div-counter row">
          <button className="col-1" onClick={handleRestar}>-1</button>
          <div className="col-2 text-center">
            <p ><span >{ counter }</span></p>
          </div>
          <button className="col-1" onClick={handleSumar}>+1</button>
          <button onClick={()=>onAdd()}>Agregar al carrito</button>
      </div>
    </>
    
  )
}

export default ItemCount