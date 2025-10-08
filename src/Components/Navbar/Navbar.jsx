import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img width="50px" src={logo} alt="Logo" className='logo' /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Drivers">Drivers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/History">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
