import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link to='/'>Gavin Dreyer</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavBar