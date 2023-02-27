import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-md navbar-light fixed-top active"
            : "navbar navbar-expand-md navbar-light fixed-top"
        }
      >
        <div className="container">
          <Link to="/" className="navbar-brand logo-of text-white">
            <img style={{ width: "200px" }} src="/images/logo.png" alt="" />
          </Link>
          <Link to="/" className="navbar-brand sidebar-of text-white">
            <button className="ofset-btn mt-0 ">Offsets</button>
          </Link>
          <a
            className="bar-cls"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i className="fa fa-bars"></i>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link home " href="#home-section">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#explore-section">
                  Token
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#create-section">
                  Corporate Offsetting
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#share-section">
                  All Public Offsets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#share-section">
                  About Us
                </a>
              </li>
              <li>
                <button className="ofset-btn">Offset</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Link to="/" className="navbar-brand text-white">
              <img style={{ width: "200px" }} src="/images/logo.png" alt="" />
            </Link>
          </h5>
          <div></div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          style={{ borderTop: "1px solid black", width: "80%", margin: "auto" }}
          className="offcanvas-body"
        >
          <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link home " href="#home-section">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="#explore-section">
                Token
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="#create-section">
                Corporate Offsetting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="#share-section">
                All Public Offsets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="#share-section">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="positions">
        <section id="home-section">
          <div className="dark-overlay">
            <div className="home-inner">
              <div className="container">
                <div className="row">
                  <div>
                    <div className="token-text">
                      <h2 className="text-center">Two Tokens</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
