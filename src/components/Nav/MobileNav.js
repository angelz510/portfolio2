import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./Nav.scss";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav-menu">
      <IoMenu
        className="menu-icon"
        size="40px"
        color="white"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="mobile-links">
          <Link className="mobile-nav-link" to={"/"}>
            Home
          </Link>
          <Link className="mobile-nav-link" to={"/about"}>
            About
          </Link>
          <Link className="mobile-nav-link" to={"/projects"}>
            Projects
          </Link>
          <Link className="mobile-nav-link" to={"/contact"}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
