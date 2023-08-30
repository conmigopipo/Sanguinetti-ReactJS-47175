const ItemList = ({pinturas}) => {
  return (
    <div className="row justify-content-around mt-4">
        {pinturas.map((cuadro)=>(
            <div className="col-5 card border-black shadow bg-light" key={cuadro.id}>
                <div className="card-header bg-light">
                    <h2 className="pt-1">"{cuadro.titulo}"</h2>
                </div>
                <p className="mb-0 p-1">Autor: {cuadro.autor}</p>
                <div className="card-body d-flex justify-content-center">
                    <img src="../src/resources/img/WIP.jpg" alt="imágen del cuadro" className="rounded-circle border border-secondary"/>
                </div>
                <div className="card-footer h-25">
                    <p>Descripción: {cuadro.descripcion}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList