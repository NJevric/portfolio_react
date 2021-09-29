import React from "react";
import "./Nav.css";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";

const Nav = (props) => {
 
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
  ];

 
  const b = (data) => {
    props.onA(data);
  }
  return (
    <div className={`nav`}>
      <div className="wrapper">
        <Logo />
        <Links links={links} onB={b}/>
      </div>
    </div>
  );
};
export default Nav;
