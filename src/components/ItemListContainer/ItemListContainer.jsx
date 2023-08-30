import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (greeting) => {
  const [pinturas, setPinturas] = useState(null)
  const [cargando, setCargando] = useState(true)
  
  async function fetchCuadros (){
    try{
      const URLCuadros = "http://localhost:8000/cuadros"
      const cuadrosJSON = await fetch(URLCuadros)
      const cuadrosArray = await cuadrosJSON.json()
      setPinturas(cuadrosArray)
      setCargando(false)
    } catch(error){
        console.error("se ha producido un error", error)
    }
  }
  
  useEffect(() => {
    console.log('useEffect trigger')
    fetchCuadros()
  }, [])
   
  return (
    <>
      <div>
          <p className="text-secondary p-3 mb-0 pb-0">{greeting.saludo}</p>
      </div>
      <div>
        <h2 className="p-3 pb-0 text-primary">Nuestros Cuadros:</h2>
        <div>
          {cargando ? (
            <p  className="text-center m-2">Cargando...</p>
          ) : (
            <ItemList pinturas={pinturas}/>
          )
        } 
        </div>
      </div>
    </>
  )
}

export default ItemListContainer

