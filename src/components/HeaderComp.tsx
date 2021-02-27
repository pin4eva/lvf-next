import React from "react";

const HeaderComp = (): JSX.Element => {
  return (
    <nav className="navbar front-nav">
      <div className="container">
        <a href="#" className="nav-brand">
          <img src="/images/logo-hand.svg" alt="" />
          <div className="logo-text">
            <p className="top font-weight-bold">
              <span className="text-secondary">LOVE</span>{" "}
              <span className="text-info">VISION</span>
            </p>
            <p className="bottom text-muted">FOUNDATION</p>
          </div>
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link text-light">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">
              Mission
            </a>
          </li>
          <li className="nav-item get-involved dropdown">
            <a href="#" className="nav-link text-light">
              Get Involved <i className="fas fa-chevron-down "></i>
            </a>
            <ul className=" dropdown-menu show m-0">
              <li className="nav-item">
                <a href="#" className="nav-link text-light">
                  Join LVF
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link text-light">
                  Partnership
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">
                  Donation
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="btn btn-grad">Connect</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComp;
