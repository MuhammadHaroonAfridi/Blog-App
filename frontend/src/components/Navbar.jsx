import React from 'react'
// import './Navbar.css';

function Navbar() {
  return (
    <>
    
     <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container justify-content-center">
        <a className="navbar-brand text-orange fw-bold me-5" href="#">LOGO</a>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Category 1</a></li>
                <li><a className="dropdown-item" href="#">Category 2</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Page 1</a></li>
                <li><a className="dropdown-item" href="#">Page 2</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
        </div>

        <form className="d-flex align-items-center search-bar ms-auto">
          <span className="dots">⋮</span>
          <div className="input-group">
            <input type="text" className="form-control search-input" placeholder="Search..." />
            <span className="input-group-text search-icon"><i className="bi bi-search"></i></span>
          </div>
        </form>
      </div>
    </nav>
    </>
  )
}

export default Navbar
