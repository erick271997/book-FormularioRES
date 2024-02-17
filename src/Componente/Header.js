import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <header className="header">
      <div className="container">
      <Link className='logo-link' to={'/'}> <div className="logo">Bookworm</div></Link> 
        <nav className="navbar">
          <ul className="nav-links">
           <Link to={'/'}><li><a href="#">Inicio</a></li></Link> 
           <Link to={'/autores'}> <li><a href='/autores'>Autores</a></li></Link> 
           <Link to={'/contactar'}><li><a href="#">Contactar</a></li>  </Link> 
            <li>
         
          </li>
          </ul>
       
        </nav>
      </div>

    </header>
  )
}

export default Header