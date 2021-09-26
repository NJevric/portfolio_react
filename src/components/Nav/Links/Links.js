import React, { useState } from "react";
import "./Links.css";
import Link from "./Link/Link";

const Links = (props) => {
  
  const [clickedValue,setClickedValue]=useState(false);
  
  const darkMode = () => {
    setClickedValue(true);
  };

  let linksContent = props.links.map((link) => (
    <Link key={link.id} href={link.href} text={link.text} />
  ));

  return (
    <div>
      <ul className="links">{linksContent}</ul>
      <i class="far fa-moon" onClick={darkMode}></i>
    </div>
  );
};

export default Links;
