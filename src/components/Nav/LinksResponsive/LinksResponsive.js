import React, { useState } from "react";
import "./Links.css";
import Link from "./Link/Link";

const LinksResponsive = (props) => {

  //DYNAMIC LINKS
  let linksContent = props.links.map((link) => (
    <Link key={link.id} href={link.href} text={link.text} />
  ));
  
  return (
    <div className="nav--links">
      <ul className="links">{linksContent}</ul>
    </div>
  );
};

export default LinksResponsive;
