import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand site-title" to="/">Friendly Betting</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav menu-links">
                <li className="nav-item">
                    <NavLink className="nav-link link" activeClassName="active-link" to="/">Acerca De</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link" activeClassName="active-link" to="/">Deportes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link" activeClassName="active-link" to="/">En Directo</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link link" activeClassName="active-link" to="/">Iniciar Apuesta</NavLink>
                </li>
            </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
