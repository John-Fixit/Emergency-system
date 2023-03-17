import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/navbar.css"


function Navbar() {
    const styles = {
        fontSize: '4vh',
        fontWeight: 'bold',
        color: "red"
    } 

 

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light navbar_second_color">
          <div className="container-fluid">
            <Link to="" className="navbar-brand" href="#"><span style={styles}>ES</span><small className='text-success fw-bold'>Emergency system</small>
            
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="" className="nav-link " >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar