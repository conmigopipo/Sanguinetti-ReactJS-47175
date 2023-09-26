import { Link } from "react-router-dom"

const item = ({disco}) => {
  return (
          <div className="col-3 card border-black shadow bg-light m-1 mb-4" >
                <div className="card-header bg-light">
                    <h4 className="pt-1">{disco.titulo}</h4>
                </div>
                <p className="mb-0 p-1">Autor: {disco.autor}</p>
                <div className="card-body d-flex justify-content-center">
                    <img src={ disco.portada } alt="imágen del disco" className="img-fluid"/>
                </div>
                <div className="card-footer h-25 ">
                  <Link to={"/discos/" + disco.id.toString()} disco={disco} className="btn btn-outline-dark w-100">Detalle</Link>
                </div> 
          </div>
  )
}

export default item