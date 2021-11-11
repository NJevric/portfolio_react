import { useState, useEffect } from "react";
import "./Nav.css";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import useWindowDimensions from "./useWindowDimensions";

const Nav = (props) => {
  const links = [
    {
      id: 1,
      href: "#home",
      text: "Home",
    },
    {
      id: 2,
      href: "#about",
      text: "About",
    },
    {
      id: 3,
      href: "#projects",
      text: "Projects",
    },
    {
      id: 4,
      href: "#contact",
      text: "Contact",
    },
  ];
  const { width } = useWindowDimensions();

  const [clickedHamburger, setClickedHamburgerValue] = useState(false);

  const onClickHamburgerHandler = () => {
    setClickedHamburgerValue(true);
  };

  const exitMenu = () => {
    setClickedHamburgerValue(false);
  };

  const b = (data) => {
    props.onA(data);
  };

  let linksContent = <Links links={links} onB={b} />;

  if (width <= 768) {
    if (clickedHamburger === false) {
      linksContent = (
        <div className="openMenu closeMenu">
          <i
            className="fas fa-bars hamburger"
            onClick={onClickHamburgerHandler}
          ></i>
        </div>
      );
    }

    if (clickedHamburger === true) {
      linksContent = (
        <div className="openMenu">
          <Links
            links={links}
            onB={b}
            onHamburgerClick={onClickHamburgerHandler}
          />
          <i className="far fa-times-circle close" onClick={exitMenu}></i>
        </div>
      );
    }
  }

  //scroll animation
  window.onscroll = () => {
    if (width > 768) {
      if (window.scrollY > 100) {
        document.querySelector(".nav").classList.add("nav__scroll");
        document.querySelector(".logo").classList.add("logo__scroll");
        document
          .querySelector(".nav--links")
          .classList.add("nav--links__scroll");
      } else {
        document.querySelector(".nav").classList.remove("nav__scroll");
        document.querySelector(".logo").classList.remove("logo__scroll");
        document
          .querySelector(".nav--links")
          .classList.remove("nav--links__scroll");
      }
    }
    if (width <= 768) {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("nav__scroll");
        document.querySelector(".logo").classList.add("logo__scroll");
      } else {
        document.querySelector(".nav").classList.remove("nav__scroll");
        document.querySelector(".logo").classList.remove("logo__scroll");
      }
    }
  };

  return (
    <div className={`nav`}>
      <div className="wrapper">
        <Logo />
        {linksContent}
      </div>
    </div>
  );
};
export default Nav;
