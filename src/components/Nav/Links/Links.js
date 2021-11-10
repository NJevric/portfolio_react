import React, { useState } from "react";
import "./Links.css";
import Link from "./Link/Link";

const Links = (props) => {

  let [clickedValue, setClickedValue] = useState(false);

  const darkMode = () => {
    setClickedValue(true);
    localStorage.setItem('moon',1);
  };
  const lightMode = () => {
    setClickedValue(false);
    localStorage.removeItem('moon');
  };

  const c = () => {
    props.onB(localStorage.getItem('moon'));
    
  };

  const contentDark = (
    <i
      className={"far fa-moon"}
      onClick={() => {
        darkMode();
        c();
      }}
    ></i>
  );
  const contentLight = (
    <i
      className={`far fa-moon`}
      onClick={() => {
        lightMode();
        c();
      }}
    ></i>
  );
  let content = contentDark;

  // if (localStorage.getItem('moon') === true) {
  //   content = contentLight;
  // }
  // if(localStorage.getItem('moon') === false){
  //   content = contentDark;
  // }
  localStorage.getItem('moon') ? content = contentLight : content = contentDark;

  //DYNAMIC LINKS
  let linksContent = props.links.map((link) => (
    <Link key={link.id} href={link.href} text={link.text} />
  ));

  return (
    <div className="nav--links">
      <ul className="links">{linksContent}</ul>
      {content}
    </div>
  );
};

export default Links;
