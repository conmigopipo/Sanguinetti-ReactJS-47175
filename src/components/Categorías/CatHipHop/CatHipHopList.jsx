import CatHipHop from "./CatHipHop"

const CatHipHopList = ({discos}) => {

  
  
  return (
    <div className="row justify-content-around">
        <div>
            <h2 className="p-3 pb-0 text-primary">Discos Hip-Hop:</h2>
        </div>
        {discos.map((disco)=>(
        <CatHipHop disco={disco} key={disco.id}/>
    ))}
    </div>
  )
}

export default CatHipHopList

