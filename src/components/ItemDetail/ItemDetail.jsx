import Swal from "sweetalert2"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import TextComponentStock from "../textComponents/textComponentStock"
import { Link } from "react-router-dom"

const ItemDetail = ( {disco} ) => {
  
  const {addProduct, cartList} = useContext(CartContext)
   
  const onAdd = (quantity)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto/s agregado/s al carrito',
            showConfirmButton: false,
            timer: 1200
          })
          addProduct({...disco, quantity})
  }
  // console.log(cartList)
  return (
      <div className="p-3">
          <div className="bg-light p-1 shadow">
              <h2 className="pt-1">{disco.titulo}</h2>
          </div>
          <div className="d-flex justify-content-arround row mt-3 ">
              <div className="col-5">
                  <h3 className="mb-0 pb-3">Autor: {disco.autor}</h3>
                  <p>Fecha de estreno: {disco.fechaEstreno}</p>
                  <p>Género: {disco.genero}</p>
                  <p>Precio: USD {disco.precio}</p>
              </div>
              <div className="col-7">
                  <img src={disco.portada} alt="imágen del disco" className="img-fluid"/>
              </div>
          </div>
          <div className="mt-2 p-2 d-flex justify-content-between">
              <TextComponentStock stock={disco.stock}/>
              <ItemCount initial={1} stock={disco.stock} onAdd={onAdd}/>
          </div>
      </div>
  )
    
  
}

export default ItemDetail