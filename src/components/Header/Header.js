import { useState } from "react";
import "./Header.css";
import Cv from "./Cv/Cv";
import ScrollAnimation from "react-animate-on-scroll";


const Header = (props) => {
  const [openedValue, setOpenedValue] = useState(false);
  const openHandler = (e) => {
    e.preventDefault();

    setOpenedValue(true);
  };
  const closedHandler = (data) => {
    setOpenedValue(false);
  };
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header--text">
        <ScrollAnimation
            initiallyVisible={false}
            animateOnce={true}
            animateIn="fadeInUp"
            duration={2}
            offset={250}
          >
          <h1>Hi, I'm Nikola Jevric And I Build Websites</h1>
          <p>
            Welcome to my portfolio website. I'm a web developer &amp; CS
            Enthusiast based in Belgrade, Serbia. If I have your curiosity you
            can start to scroll and explore about me and my work.
          </p>
          <div className="header--text__buttons">
            <a href="#contact">Get in touch</a>
            <a href="#" onClick={openHandler}>
              View Resume
            </a>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <Cv open={openedValue} onOpen={closedHandler} />
    </div>
  );
};

export default Header;
