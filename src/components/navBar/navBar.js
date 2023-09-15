import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="/">Proyecto</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/acerca-de">Herrero</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contacto">....</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;



