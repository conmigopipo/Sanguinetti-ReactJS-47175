import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="#">Pitando mundos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Óleos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Acuarelas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Acrílicos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Marcos Artesanales</a>
                        </li>
                        {/*<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>*/}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Busque productos aquí" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <div className="m-2"><CartWidget/></div>
                </div>
            </div>
        </nav>
)}


export default NavBar