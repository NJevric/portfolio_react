import "./Project.css";
import ScrollAnimation from "react-animate-on-scroll";

const Project = (props) => {
  return (
    <ScrollAnimation
      initiallyVisible={false}
      animateOnce={true}
      animateIn="fadeInUp"
      duration={1.5}
      offset={200}
    >
      <div className="project">
        <img
          src={`projectImages/${props.project.img.src}`}
          alt={props.project.img.alt}
          className="project--image"
        />
        <div className="project--info">
          <h3>{props.project.headline}</h3>
          <p>{props.project.desc}</p>

          <div className="project--info__tech">
            <ul>
              {props.project.tech.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </div>
          <div className="project--info__links">
            {props.project.buttons.demo ? (
              <a
                href={props.project.buttons.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            ) : (
              <p></p>
            )}
            <a
              href={props.project.buttons.github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default Project;
