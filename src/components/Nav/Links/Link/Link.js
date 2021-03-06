import "./Link.css";
import { useState } from "react";

const Link = (props) => {

  return (
    <div>
      <li className="link">
        <a href={props.href}>{props.text}</a>
      </li>
    </div>
  )
};

export default Link;
