import { NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top m-0 p-0">
        <div className="container-fluid">
          
          {/* Logo + Brand */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src={logo} 
              alt="Logo" 
              width="30" 
              height="30" 
              className="d-inline-block align-text-top me-2"
            />
            Todo App
          </NavLink>

          {/* Hamburger */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/" 
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todos">
                  Todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/expenses">
                  Expenses
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDropdownMenuLink" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Email Us</a></li>
                  <li><a className="dropdown-item" href="#">Call Us</a></li>
                  <li><a className="dropdown-item" href="#">Visit Office</a></li>
                </ul>
              </li>
            </ul>

            {/* Search */}
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Push content down so it's not hidden under fixed navbar */}
      <div style={{ paddingTop: '70px' }}></div>
    </header>
  );
}

export default HeaderComponent;
