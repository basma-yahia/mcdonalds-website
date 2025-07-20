import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'
import { FaHamburger } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3 py-2 fixed-top fw-200">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaHamburger className="me-2" />
          McDonald's
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
