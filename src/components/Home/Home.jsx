import TextComponentTitulo from "../TextComponents/TextComponentTitulo"

const Home = (greeting) => {
  return (
    <>
        <TextComponentTitulo/>
        <div>
          <p className="text-secondary p-3 mb-0 pb-0">{greeting.saludo}</p>
        </div>
        <div className="d-flex justify-content-center m-4">
            <img src="https://ibb.co/PjwMvRP" className="img-fluid"></img>
        </div>
    </>
  )
}

export default Home