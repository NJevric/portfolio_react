import { useState } from "react";
import "./Nav.css";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import useWindowDimensions from "./useWindowDimensions";
const Nav = (props) => {
  //HAMBURGER MENU
  const { height, width } = useWindowDimensions();

  const [clickedHamburger, setClickedHamburgerValue] = useState(false);

  const onClickHamburgerHandler = () => {
    setClickedHamburgerValue(true);
  };

  const exitMenu = () => {
    setClickedHamburgerValue(false);
  };
  //END HAMBURGER MENU
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

  const b = (data) => {
    props.onA(data);
  };

  let linksContent = <Links links={links} onB={b} />;
  if (width <= 768) {
    linksContent = (
      <i
        className="fas fa-bars hamburger"
        onClick={onClickHamburgerHandler}
      ></i>
    );
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
  }
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
