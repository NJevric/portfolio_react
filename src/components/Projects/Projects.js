import "./Projects.css";
import Project from "./Project/Project";

const Projects = (props) => {
  
  const projects = props.projects.map((project) => (
    <Project project={project} key={project.id}/>
  ));

  return (
    <div className="projects" id="projects">
      <div className="wrapper">
        <h2>My Work</h2>
        <p>
          Here are some of my latest and most proudest projects I've done. If
          you want to checkout all of them feel free to visit my{" "}
          <a href="https://github.com/NJevric" target="_blank" rel="noopener noreferrer"> github page</a>
        </p>
        {projects}
      </div>
    </div>
  );
};
export default Projects;
