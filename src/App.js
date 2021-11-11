import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
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
      value: "Javascript / ReactJS",
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
      value: "MySQL",
    },
    {
      id: 4,
      value: "SQL Server",
    },
    {
      id: 5,
      value: "Photoshop (basics)",
    },
  ];
  const socials = [
    {
      id: 1,
      content: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/in/nikola-jevric-1a64601b9/",
    },
    {
      id: 2,
      content: "fab fa-instagram",
      href: "https://www.instagram.com/n_jevric/",
    },
    {
      id: 3,
      content: "fab fa-github",
      href: "https://github.com/NJevric",
    },
    {
      id: 4,
      content: "far fa-envelope",
      href: "mailto:njevric9@gmail.com",
    },
  ];
  const projects = [
    {
      id: 1,
      img: {
        src: "blog_api.png",
        alt: "Blog API",
      },
      headline: "Blog API",
      desc: "REST API in ASP.NET implemented with onion architecture for blogs with comments, likes and use cases",
      tech: ["ASP.NET", "SQL Server"],
      buttons: {
        github_repo: "https://github.com/NJevric/Blog_Asp",
      },
    },
    {
      id: 2,
      img: {
        src: "laravel_blog.png",
        alt: "Laravel Blog",
      },
      headline: "Laravel Blog",
      desc: "Laravel Full stack project following REST convention using MVC architecture. CMS for Blog website.",
      tech: ["Laravel", "MySql"],
      buttons: {
        github_repo: "https://github.com/NJevric/blog_laravel",
      },
    },
    {
      id: 3,
      img: {
        src: "csa.png",
        alt: "CSA Sports Management",
      },
      headline: "CSA Sports Management",
      desc: "Full stack website, custom CMS, built with Javascript, AJAX, PHP, MySQL",
      tech: ["PHP", "Javascript", "MySql", "AJAX"],
      buttons: {
        github_repo: "https://github.com/NJevric/csaV2",
        demo: "https://csasportsmanagement.com/",
      },
    },
    {
      id: 4,
      img: {
        src: "nikola_cinema.png",
        alt: "Nikola Cinema",
      },
      headline: "Nikola Cinema",
      desc: "Example of movie theater website where clients can see cinema repertoire and choose which movie they want to watch and make a specific reservation for any number of people at any time,",
      tech: ["Javascript", "JSON", "AJAX", "JQuery"],
      buttons: {
        github_repo: "https://github.com/NJevric/nikola_cinema",
        demo: "https://njevric.github.io/nikola_cinema/",
      },
    },
    {
      id: 5,
      img: {
        src: "urbanInfo.png",
        alt: "Urban Info",
      },
      headline: "Urban Info",
      desc: "Used Teleport public API for searching and displaying info about the cities and quality of life among them.",
      tech: ["Javascript", "AJAX", "JQuery"],
      buttons: {
        github_repo: "https://github.com/NJevric/urban-info",
        demo: "https://njevric.github.io/urban-info/",
      },
    },
  ];

  const [dark, setDark] = useState(localStorage.getItem('dark'));
  const a = (data) => {
    setDark(data);

    console.log(dark);

    if(dark === null){
      localStorage.setItem('dark',1);
    }

    if (dark == 1) {
      localStorage.removeItem("dark");
    }

  };

  return (
    <div
      className={`${localStorage.getItem("dark") ? "darkMode" : ""} app`}
      id="home"
    >
      <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
        <Nav onA={a} className="navClass"/>
        <Header className="header" id="header" />
        <About
          className="about"
          technologies={technologies}
          architectures={architectures}
          tools={tools}
        />
        <Projects className="projects" projects={projects} />
        <Contact className="contact" />
        <Footer className="footer" />
        <Socials className="socials" socials={socials} />
      </ScrollAnimation>
    </div>
  );
}

export default App;
