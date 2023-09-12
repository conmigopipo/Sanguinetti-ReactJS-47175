import CatRock from "./CatRock"

const CatRockList = ({discos}) => {
  
  return (
    <div className="row justify-content-around">
        <div>
            <h2 className="p-3 pb-0 text-primary">Discos Rock:</h2>
        </div>
        {discos.map((disco)=>(
        <CatRock disco={disco} key={disco.id}/>
    ))}
    </div>
  )
}

export default CatRockList