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
    },
  ];
  const socials = [
    {
      id:1,
      content:"fab fa-linkedin-in",
      href: ""
    },
    {
      id:2,
      content:"fab fa-instagram",
      href: ""
    },
    {
      id:3,
      content:"fab fa-github",
      href: ""
    },
    {
      id:4,
      content:"far fa-envelope",
      href: ""
    }
  ]
  const projects = [
    {
      id: 1,
      img: {
        src: "blog_api.png",
        alt: "Blog API",
      },
      headline: "Blog API",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      tech: ["ASP.NET", "SQL Server"],
      buttons: {
        github: "",
        demo: "",
      },
    },
    {
      id: 2,
      img: {
        src: "laravel_blog.png",
        alt: "Laravel Blog",
      },
      headline: "Laravel Blog",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      tech: ["Laravel", "MySql"],
      buttons: {
        github: "",
        demo: "",
      },
    },
    {
      id: 3,
      img: {
        src: "csa.png",
        alt: "CSA Sports Management",
      },
      headline: "CSA Sports Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      tech: ["PHP", "Javascript", "MySql", "AJAX"],
      buttons: {
        github: "",
        demo: "",
      },
    },
    {
      id: 4,
      img: {
        src: "nikola_cinema.png",
        alt: "Nikola Cinema",
      },
      headline: "Nikola Cinema",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      tech: ["Javascript", "JSON", "AJAX", "JQuery"],
      buttons: {
        github: "",
        demo: "",
      },
    },
    ,
    {
      id: 5,
      img: {
        src: "urbanInfo.png",
        alt: "Urban Info",
      },
      headline: "Urban Info",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      tech: ["Javascript", "AJAX", "JQuery"],
      buttons: {
        github: "",
        demo: "",
      },
    },
  ];
  console.log(projects);
  const [dark, setDark] = useState(true);
  const a = (data) => {
    setDark(data);
    console.log(dark);
  };

  return (
    <div className={`${!dark ? "darkMode" : ""} app`} id="home">
      <Nav onA={a} />
      <Header className="header" />
      <About
        className="about"
        technologies={technologies}
        architectures={architectures}
        tools={tools}
      />
      <Projects className="projects" projects={projects} />
      <Contact className="contact" />
      <Footer className="footer" />
      <Socials className="socials" socials={socials}/>
    </div>
  );
}

export default App;
