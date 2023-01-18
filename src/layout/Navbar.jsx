import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { commonImages } from "../components/common/images";
import { routes } from '../config/routes';

function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="p-0">
          <div className="navIcon">
            <Link to='/'>
              <img src={commonImages.homeIcon} className="img-fluid" alt="home" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsMobile(!isMobile)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.filter((each) => each.route !== '/').map((each, index) => (
              <Link to={each.route} className='navLink nav-link' role='button' tabIndex='0' key={index}>{each.text}</Link>
            ))}

          
            <Nav.Link className="navLink" href="#link">
              <div className="switch navSwitch">
                <input
                  id="language-toggle"
                  className="check-toggle check-toggle-round-flat"
                  type="checkbox"
                />
                <label htmlFor="language-toggle"></label>

                <span className="on">EN</span>
                <span className="off">AR</span>
              </div>
            </Nav.Link>
          </Nav>
          <ul>
            <li>
              {" "}
              <span className="search-icon">
                {/* <a data-toggle='collapse' href='#collapseExample' role='button' aria-expanded="false" aria-controls="collapseExample"> <FaSearch /></a> */}
               

                  <FaSearch />
                 
              </span>
            </li>
          </ul>
          <div className="collapse" id="collapseExample">
            addsd
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
