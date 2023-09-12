
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const discos = useLoaderData()

    
    const disco = discos.discos.find((disco) =>  disco.id === parseInt(id))

    return (
        <div>
            <NavLink to={"/discos"} className={"text-secondary btn btn-outline m-3 mb-0"}>Volver a Discos</NavLink>
            <ItemDetail disco={disco}/>
        </div>
    )
}

export const discoDetalleLoader = async ()=>{

    const res = await fetch ("../../../data/database.json" )
    return res.json()
}

export default ItemDetailContainer