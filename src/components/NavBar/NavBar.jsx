import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {

    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-primary">BYN</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-secondary">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/discos" className="nav-link text-secondary">Discos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/discos/category/rock" className="nav-link text-secondary">Rock</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/discos/category/hip-hop" className="nav-link text-secondary">Hip-Hop</NavLink>
                        </li>
                    </ul>
                    <Link to={'/carrito'}>
                        <div className="m-2"><CartWidget /></div>
                    </Link>
                </div>
            </div>
        </nav>
)}


export default NavBar
        // <nav>
        //   <ul>
            
        //   </ul>
        //     {/* <form className="d-flex" role="search">
        //       <input className="form-control me-2" type="search" placeholder="Busque productos aquí" aria-label="Search"/>
        //       <button className="btn btn-outline-success" type="submit">Buscar</button>
        //     </form> */}
        // </nav>