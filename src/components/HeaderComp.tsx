import React, { Fragment, useEffect } from "react";
import NextLink from "next/link";

const DesktopNav = (): JSX.Element => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dropdownMenu = document.querySelector(".dropdown-menu");
      const dropdown = document.querySelector(".dropdown");

      dropdown?.addEventListener("click", () => {
        dropdownMenu?.classList.toggle("show");
      });
    }
  }, []);

  return (
    <nav className="navbar front-nav desktop-nav">
      <div className="container">
        <a href="/" className="nav-brand">
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
            <a href="/" className="nav-link text-light">
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
            <ul className=" dropdown-menu m-0">
              <li className="nav-item">
                <NextLink href="/connect">
                  <a className="nav-link text-light">Join LVF</a>
                </NextLink>
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

const MobileNav = () => {
  useEffect(() => {
    if (process.browser) {
      const toggler = document.querySelector(".toggler");
      const navUl = document.querySelector(".mobile-ul");
      const closeBTN = document.querySelector(".close");
      toggler?.addEventListener("click", () => {
        navUl.classList.add("show");

        toggler.classList.add("d-none");
      });

      closeBTN?.addEventListener("click", () => {
        navUl?.classList.remove("show");
        toggler.classList.remove("d-none");
      });
    }
  }, []);
  return (
    <div className="mobile-nav">
      <nav className="top-wrapper navbar align-items-center">
        <a href="/" className="nav-brand">
          <img src="/images/logo-hand.svg" />
          <div className="logo-text">
            <p className="top font-weight-bold">
              <span className="text-secondary">LOVE</span>{" "}
              <span className="text-info">VISION</span>
            </p>
            <p className="bottom text-muted">FOUNDATION</p>
          </div>
        </a>
        <div className="toggler">
          <a href="#">
            <img src="/images/toggler.svg" alt="" width="20" />
          </a>
        </div>
      </nav>
      <ul className="nav mobile-ul flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link text-light">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light">
            About Us
          </a>
        </li>
        <li className="nav-item mobil-dropdown">
          <a href="#" className="nav-link text-light">
            Get Involved <i className="fas fa-chevron-down "></i>
          </a>
          <ul className="mobile-dropdown-menu">
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
          <a href="#" className="nav-link text-light">
            Connect
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-light">
            The Team
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link close">
            <img src="/images/close-btn.svg" alt="" width="30" />
          </a>
        </li>
      </ul>
    </div>
  );
};

const HeaderComp = () => {
  return (
    <div id="header">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default HeaderComp;
