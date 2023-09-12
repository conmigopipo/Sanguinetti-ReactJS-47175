import Swal from "sweetalert2"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (disco) => {
   
  const onAdd = ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto/s agregado/s al carrito',
            showConfirmButton: false,
            timer: 1200
          })
  }

  return (
    
      <div className="p-3">
        <div className="bg-light">
          <h2 className="pt-1">{disco.disco.titulo}</h2>
        </div>
        <h3 className="mb-0 p-1 pb-3">Autor: {disco.disco.autor}</h3>
        <p>Fecha de estreno: {disco.disco.fechaEstreno}</p>
        <p>Género: {disco.disco.genero}</p>
        <p>Precio: USD {disco.disco.precio}</p>
        <div className="d-flex justify-content-center">
          <img src={"../../../" + disco.disco.icon} alt="imágen del disco" className="img-fluid"/>
        </div>
        <div>
          <ItemCount initial={1} stock={disco.disco.stock} onAdd={onAdd}/>
          <p>Unidades Disponibles: {disco.disco.stock}</p>
        </div>
        
    </div>
  )
    
  
}

export default ItemDetail