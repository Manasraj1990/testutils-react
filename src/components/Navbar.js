import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutUsText}</Link>
            </li>
          
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" value={props.mode} onClick={props.handleSwitch}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{color:props.mode === "dark"?"white":"black"}} htmlFor="flexSwitchCheckDefault">{props.modeBtnText}</label>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUsText:PropTypes.string.isRequired

}

// Specifies the default values for props:
Navbar.defaultProps = {
    title: "Nav Title",
    aboutUsText: "About Us text"
  };
export default Navbar

