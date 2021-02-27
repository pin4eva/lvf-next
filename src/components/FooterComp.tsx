import React from "react";
import styled from "styled-components";

const FooterComp = (): JSX.Element => {
  return (
    <Footer>
      <nav className="navbar front-footer">
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
            <li className="nav-item involved ">
              <a href="#" className="nav-link text-light">
                Get Involved
              </a>
              <ul className=" menu show m-0">
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

        <div className="line"></div>

        <div className="container">
          <div className="bottom">
            <p>
              © Love Vision Foundation, Inc. {new Date().getFullYear()}, We love
              spreading love
            </p>
            <div className="social">
              <span className="mr-2">Follow Us</span>
              <img src="/images/facebook.svg" className="mr-2" alt="" />
              <img src="/images/instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer``;
