import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { NavLink, useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "../loading/loading"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [discos, setDiscos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'discos', id)
        getDoc(queryDoc)
            .then((resp) => {
                if (resp.exists()) {
                    setDiscos({ id: resp.id, ...resp.data() })
                }
            })
            .catch((error) => {
                console.error("Error al intentar conectarse con el servidor:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            <NavLink to={"/discos"} className={"text-secondary btn btn-outline m-3 mb-0"}>
                Seguir Comprando
            </NavLink>

            {loading ? (
                <Loading />
            ) : (
                <ItemDetail disco={discos} />
            )}
        </div>
    )
}

export default ItemDetailContainer