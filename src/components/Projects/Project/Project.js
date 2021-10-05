import "./Project.css";

const Project = (props) => {
  return (
    <div className="project">
      <img
        src={`projectImages/${props.project.img.src}`}
        alt={props.project.img.alt}
        className="project--image"
      />
      <div className="project--info">
        <h3>{props.project.headline}</h3>
        <p>
          {props.project.desc}
        </p>

        <div className="project--info__tech">
          <ul>
            {props.project.tech.map(t=>(
                <li>{t}</li>
            ))}
          </ul>
        </div>
        <div className="project--info__links">
          <a href={props.project.buttons.github}>Github repo</a>
          <a href={props.project.buttons.demo}>Live Demo</a>
        </div>
      </div>
    </div>
  );
};
export default Project;
