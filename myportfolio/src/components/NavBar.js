import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link className='navBarLink1' to='/'>Gavin Dreyer</Link>
            <Link className='navBarLink2' to='/about'>About</Link>
        </div>
    )
}

export default NavBar