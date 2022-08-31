import React , {useState} from 'react'
import { Link} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'
import Logo from '../images/logo.png'
import './navbarStyles.css'

function Navbar() {
    const[click,setClick]=useState(false)
    const handleClick =()=>setClick(!click)


  return (
   <header>
    <nav className="navbar">
    <Link to="/ModerN" activeclassname="none"><div className="brand__logo">
            <img src={Logo} alt="logo" className="logo"/>
            <span>ModerN</span>
        </div></Link>
        <ul className={click?"nav__menu open" : "nav__menu"}>
            <li className="nav__item"><Link  className="nav__link" to="/Projects">Projects</Link></li>
            <li className="nav__item"><Link  className="nav__link" to="/About">About</Link></li>
            <li className="nav__item"><Link  className="nav__link" to="/About">Services</Link></li>
            <li className="nav__item"><Link  className="nav__link " to="/Contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
        </div>
    </nav>
   
   </header>
  )
}

export default Navbar
