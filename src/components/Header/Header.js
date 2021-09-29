import { useState } from "react";
import "./Header.css";
import Cv from "./Cv/Cv";
const Header = (props) => {

  const[openedValue,setOpenedValue] = useState(false);
  const openHandler = () =>{
    console.log('open');
    setOpenedValue(true);
  }
  const closedHandler = (data) => {
    console.log(data);
    setOpenedValue(false);
  }
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header--text">
          <h1>Hello World! I'm Nikola And I Build Websites</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,I'm a web developer &amp; CS Enthusiast based in Belgrade, Serbia.
          </p>
          <div className="header--text__buttons">
            <a href="#">Get in touch</a>
            <a href="#" onClick={openHandler}>Download CV</a>
          </div>
        </div>
      </div>
      <Cv open={openedValue} onOpen={closedHandler}/>
    </div>
  );
};

export default Header;
