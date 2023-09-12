import { useLoaderData } from "react-router-dom"
import CatRockList from "./CatRockList"


const CatRockListContainer = () => {

    const discos = useLoaderData()
    const cat = "Rock"
    const discosRock = discos.discos.filter((disco)=>( disco.genero === cat))

  return (
    <CatRockList discos={discosRock}/>
  )
}

export default CatRockListContainer