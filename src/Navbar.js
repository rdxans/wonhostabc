import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Images/logo.png"

const Navbar = () =>{
    return (
        <> 
    <div className="container-flud nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/Home"> <img src={logo} style={{width:220}}></img> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink 
          exact
          className="nav-link " 
          aria-current="page" 
          to="/Home">
          Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Services</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
        </>
    )
}
export default Navbar;