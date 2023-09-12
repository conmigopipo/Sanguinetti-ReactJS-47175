import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { NavLink, useLoaderData } from "react-router-dom"
import './ItemListContainer.css'


const ItemListContainer = () => {
  const discos = useLoaderData()

  return (
    <>

      <div>
        <div  className="ILC-nav">
          <div>
            <h2 className="p-3 pb-0 text-primary">Discos:</h2>
          </div>
        </div>
        <ItemList discos={discos.discos}/>
      </div>
    </>
  )
}

export default ItemListContainer

export const discosLoader = async ()=>{
  const res = await fetch ("../../../data/database.json")

  return res.json()
}

