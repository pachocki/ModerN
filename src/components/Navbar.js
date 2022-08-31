import React , {useState} from 'react'
import {NavLink , Link} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'
import Logo from '../images/logo.png'
import './navbarStyles.css'

function Navbar() {
    const[click,setClick]=useState(false)
    const handleClick =()=>setClick(!click)


  return (
   <header>
    <nav className="navbar">
        <div className="brand__logo">
            <Link to="/" activeclassname="none"><img src={Logo} alt="logo" className="logo"/></Link>
            <span>ModerN</span>
        </div>
        <ul className={click?"nav__menu open" : "nav__menu"}>
            <li className="nav__item"><NavLink  className="nav__link" to="/Projects">Projects</NavLink></li>
            <li className="nav__item"><NavLink  className="nav__link" to="/About">About</NavLink></li>
            <li className="nav__item"><NavLink  className="nav__link" to="/About">Services</NavLink></li>
            <li className="nav__item"><NavLink  className="nav__link " to="/Contact">Contact</NavLink></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
        </div>
    </nav>
   
   </header>
  )
}

export default Navbar
