import React from "react";

const NavBar = () => {
  return (
    <nav className="">
      <div className="">
        <a className="" href="#home">
          Harsh Patel
        </a>
        <div className="" id="navbarNav">
          <ul className="">
            <li className="">
              <a className="" href="#about">
                About
              </a>
            </li>
            <li className="">
              <a className="" href="#projects">
                Projects
              </a>
            </li>
            <li className="">
              <a className="" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
