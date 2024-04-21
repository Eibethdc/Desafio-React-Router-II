import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'

function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'desactive');

    return (
        <nav>
            <div>
                <img className= 'navbar-img' src={logo} alt="pokemon" />
            </div>
            <div className='nav-section'>
                <NavLink className={ setActiveClass } style={{textDecoration: 'none'}} to='/' > Home </NavLink>
                <NavLink className={ setActiveClass } style={{textDecoration: 'none'}} to='/pokemones' > Pokemones </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
