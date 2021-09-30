import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  const technologies = [
    {
      id: 1,
      value: "HTML / Bootstrap",
    },
    {
      id: 2,
      value: "CSS / Sass",
    },
    {
      id: 3,
      value: "Javascript / React",
    },
    {
      id: 4,
      value: "PHP / Laravel",
    },
    {
      id: 5,
      value: "SQL",
    },
    {
      id: 6,
      value: "C# / ASP.NET",
    },
  ];

  const architectures = [
    {
      id: 1,
      value: "3-Tier Architecture",
    },
    {
      id: 2,
      value: "MVC",
    },
    {
      id: 3,
      value: "Onion Architecture",
    },
  ];

  const tools = [
    {
      id: 1,
      value: "Git",
    },
    {
      id: 2,
      value: "Visual Studio",
    },
    {
      id: 3,
      value: "Visual Studio Code",
    },
    {
      id: 4,
      value: "Photoshop (basics)",
    }
  ]
  const [dark, setDark] = useState(true);
  const a = (data) => {
    setDark(data);
  };

  return (
    <div className={`${!dark ? "darkMode" : ""} app`}>
      <Nav onA={a} />
      <Header className="header" />
      <About
        className="about"
        technologies={technologies}
        architectures={architectures}
        tools = {tools}
      />
      <Projects className="projects" />
      <Contact className="contact" />
      <Footer className="footer" />
      <Socials className="socials" />
    </div>
  );
}

export default App;
