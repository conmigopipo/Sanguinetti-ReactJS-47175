import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import Loading from "../loading/loading"


const ItemListContainer = () => {
  

  const [discos, setDiscos] = useState([]);
  const {idCategory} = useParams()
  const [ loading, setLoading ] = useState(true)


  useEffect(()=>{
      const db = getFirestore ()
      const queryCollection = collection(db, 'discos')
      getDocs(queryCollection)
      .then(resp => setDiscos(resp.docs.map(disco => ({id: disco.id, ...disco.data()}))))
      .finally(setLoading(false)) 
  },[])


  const discosFilter = idCategory === undefined ? discos : discos.filter ((disco)=> disco.genero.toLowerCase() === idCategory)  
      return (
        <>
          <div>
            <div  className="ILC-nav">
              <div>
                <h2 className="p-3 pb-0 text-primary">Discos:</h2>
              </div>
            </div>
            {loading ?
                        <Loading/>
            :
                        <ItemList discos={discosFilter}/>}
          </div>
        </>
  )
}

export default ItemListContainer


