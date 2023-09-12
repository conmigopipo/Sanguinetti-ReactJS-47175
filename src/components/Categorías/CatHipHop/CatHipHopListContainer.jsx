import { useLoaderData } from "react-router-dom"
import CatHipHopList from "./CatHipHopList"


const CatHipHopListContainer = () => {

    const discos = useLoaderData()
    const cat = "Hip-hop"
    const discosHiphop = discos.discos.filter((disco)=>( disco.genero === cat))

  return (
    <CatHipHopList discos={discosHiphop}/>
  )
}

export default CatHipHopListContainer