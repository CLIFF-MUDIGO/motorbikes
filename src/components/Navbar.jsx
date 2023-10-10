import React from "react";
import "./Navbar.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        {/* Logo in desktop view */}
        <a className="navbar-brand fs-4" href="#home">
          Monad Motorbikes
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Sidebar */}
        <div
          className={`sidebar offcanvas offcanvas-start ${
            showSidebar ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* Sidebar header */}
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Monad Motorbikes
            </h5>
            <button
              className="btn-close btn-close-white shadow-none"
              onClick={toggleSidebar}
              aria-label="close"
            ></button>
          </div>

          {/* Sidebar body */}
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
            {/* Navbar links */}
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Home"
                  style={{ color: "#0A83F2" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about-us"
                  style={{ color: "#6499E9" }}
                >
                  About us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#shop"
                  style={{ color: "#6499E9" }}
                >
                  Shop
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#blog"
                  style={{ color: "#6499E9" }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact"
                  style={{ color: "#6499E9" }}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Login / Signup */}
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-lg-row">
              <a href="#login" className="text-white" style={{ color: "#6499E9" }}>
                Login
              </a>
              <a
                href="#signup"
                className="text-white decoration-none px-3 py-1 rounded-4"
                style={{ background: "#6499E9" }}
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
