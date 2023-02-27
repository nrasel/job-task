import React from "react";

const Footer = () => {
  return (
    <footer>
      <div style={{ background: "#111827" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <img style={{ width: "200px" }} src="/images/logof.png" alt="" />
              <p className="footer">
                One-stop solution to offset your business’s emissions
              </p>
            </div>
            <div className="col-md-2 my-4">
              <h3 style={{ fontSize: "20px" }} className="text-white ">
                Follow us
              </h3>
              <div className="cursor-pointer">
                <i className="fa fa-twitter footer "></i>
              </div>
              <p className="footer">contact@block2030.com</p>
            </div>
            <div className="col-md-5">
              <ul className="navbar-nav ms-5 res-sm">
                <li className="nav-item ">
                  <a className="nav-links home " href="#home-section">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links  " href="#explore-section">
                    Token
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links  " href="#create-section">
                    Corporate Offsetting
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links  " href="#share-section">
                    All Public Offsets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links  " href="#share-section">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-center small">
            <p className="footer">copyright @greenblock GmbH</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
