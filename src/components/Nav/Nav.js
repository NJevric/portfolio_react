import React from "react";
import "./Nav.css";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
const Nav = () => {

  

  const links = [
    {
      id: 1,
      href: "#",
      text: "Home",
    },
    {
      id: 2,
      href: "#",
      text: "About",
    },
    {
      id: 3,
      href: "#",
      text: "Projects",
    },
    {
      id: 4,
      href: "#",
      text: "Contact",
    },
    // {
    //   id: 5,
    //   href: "#",
    //   text: <i class="far fa-moon"></i>,
    // }
  ];

  return (
    <div className="nav">
      <div className="wrapper">
      <Logo />
      <Links links={links} />
      </div>
  
    </div>
  );
};
export default Nav;
