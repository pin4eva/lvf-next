import NextLink from "next/link";
import React, { useEffect, useRef } from "react";



const DesktopNav = (): JSX.Element => {
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

       <NavMenu/>
      </div>
    </nav>
  );
};

const MobileNav = () => {

  
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
      
        
      <NavMenu/>
    </div>
  );
};

const HeaderComp = (): JSX.Element => {

  useEffect(() => {
    if (process.browser) {
      const toggler = document.querySelector(".toggler");
      const navUl = document.querySelector(".mobile-nav .nav");
      const closeBTN = document.querySelector(".close");

      toggler?.addEventListener("click", () => {
        navUl.classList.add("show");
      });

      closeBTN?.addEventListener("click", () => {
        navUl?.classList.remove("show");
       
      });
    }
  }, []);
  return (
    <div id="header">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default HeaderComp;


const NavMenu = () => {
  const mobileNav = useRef<HTMLUListElement>()
  const dropdownMenu  = useRef<HTMLUListElement>()

  const handleMobileToggle = () => {
    mobileNav?.current.classList.remove("show")
  }

  const toggleDropdown = () => {
    dropdownMenu?.current.classList.toggle("show")
  }
  return (
    <ul className="nav" ref={mobileNav}>
          <li className="nav-item">
        <NextLink href="/">
        <a className="nav-link text-light">
              Home
            </a>
          </NextLink>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link text-light">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">
              Mission
            </a>
          </li>
          <li className="nav-item get-involved dropdown" onClick={toggleDropdown}>
            <a className="nav-link text-light c-hand">
              Get Involved <i className="fas fa-chevron-down "></i>
            </a>
            <ul className=" dropdown-menu m-0" ref={dropdownMenu}>
              <li className="nav-item">
                <NextLink href="/join">
                  <a className="nav-link text-light">Join LVF</a>
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink href="/connect">
                  <a className="nav-link text-light">Partnership</a>
                </NextLink>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-light">
                  Donation
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item desktop-only">
            <button className="btn btn-grad">Connect</button>
      </li>
      <li className="nav-item mobile-only">
          <a href="#" className="nav-link text-light">
            Connect
          </a>
        </li>
        <li className="nav-item mobile-only">
          <a href="#team" className="nav-link text-light">
            The Team
          </a>
        </li>
        <li className="nav-item mobile-only" onClick={handleMobileToggle} >
          <a  className="nav-link close c-hand">
            <img src="/images/close-btn.svg" alt="" width="30" />
          </a>
        </li>
        </ul>
  )
}