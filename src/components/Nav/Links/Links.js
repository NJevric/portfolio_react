import React, { useState } from "react";
import "./Links.css";
import Link from "./Link/Link";

const Links = (props) => {
  // DARK MODE
  let [clickedValue, setClickedValue] = useState(false);

  const darkMode = () => {
    setClickedValue(true);
  };
  const lightMode = () => {
    setClickedValue(false);
  };
  const c = () => {
    props.onB(clickedValue);
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

  if (clickedValue === true) {
    content = contentLight;
  }
  
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
