import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Titulo from "../Titulo/Titulo"


const Home = (greeting) => {
  return (
    <>
        <Titulo/>
        <div>
          <p className="text-secondary p-3 mb-0 pb-0">{greeting.saludo}</p>
        </div>
        <div className="d-flex justify-content-center m-4">
            <img src="src\resources\img\index-img.jpg" className="img-fluid"></img>
        </div>
    </>
  )
}

export default Home