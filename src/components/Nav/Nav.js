import React from "react";
import MobileNav from "./MobileNav";
import WebNav from "./WebNav";

const Nav = () => {
  return (
    <div>
      <WebNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
