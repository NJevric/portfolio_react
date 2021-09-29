import React,{useState} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {

  const [dark,setDark] = useState(true);
  const a = (data) => {
    setDark(data);
  };
  
  return (
    <div className={`${!dark? 'darkMode' : ''}`}>
      <Nav onA={a}/>
      <Header className="header"/>
      <About className="about"/>
      <Projects className="projects"/>
      <Contact className="contact"/>
      <Footer className="footer"/>
      <Socials className="socials"/>
     
    </div>
  );
}

export default App;
