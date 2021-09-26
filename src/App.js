import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Socials from "./components/Socials/Socials";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return <div>
    <Nav/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <Socials/>
  </div>;
}

export default App;
