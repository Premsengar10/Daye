import React from 'react'
import './Style.css';

const Navbar = () => {
  return (
    <nav className="HomeNavbar">
        <div className="Logo">
        <a href="#" className='logo'>#DateUP</a>
        </div>
        <input type="checkbox" id='toggler' />
        <label for="toggler"><i class="fa-solid fa-bars"/></label>
        <div className="menu">
            <ul className="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
