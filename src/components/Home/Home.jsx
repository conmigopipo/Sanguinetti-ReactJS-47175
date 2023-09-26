import TextComponentTitulo from "../TextComponents/TextComponentTitulo"

const Home = (greeting) => {
  return (
    <>
        <TextComponentTitulo/>
        <div>
          <p className="text-secondary p-3 mb-0 pb-0">{greeting.saludo}</p>
        </div>
        <div className="d-flex justify-content-center m-4">
            <img src="https://i.ibb.co/xLJYtyB/index-img.jpg" className="img-fluid" alt="Imágen de bienvenida"></img>
        </div>
    </>
  )
}

export default Home