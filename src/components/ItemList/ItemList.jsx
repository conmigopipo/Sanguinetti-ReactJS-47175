
import Item from '../Item/item'

const ItemList = ({discos}) => {

  return (
    <div className="row justify-content-around">
        {discos.map((disco)=>(
            <Item disco={disco} key={disco.id}/>
        ))}
    </div>
  )
}

export default ItemList