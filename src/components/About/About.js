import "./About.css";
import Tech from "./Tech/Tech";
import Arch from "./Arch/Arch";
import Tool from "./Tool/Tool";
const About = (props) => {
  console.log(props.technologies);
  const techContent = props.technologies.map((tech) => (
    <Tech key={tech.id} value={tech.value} />
  ));
  const archContent = props.architectures.map((arch) => (
    <Arch key={arch.id} value={arch.value} />
  ));
  const toolsContent = props.tools.map((tool) => (
    <Tool key={tool.id} value={tool.value} />
  ));
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="about--info">
          <h2>About Me</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="about--info__list">
            <div className="about--info__technologies">
              <h3>Technologies I've worked with</h3>
              <ul>{techContent}</ul>
            </div>
            <div className="about--info__architectures">
              <h3>Architectures I am familiar with</h3>
              <ul>{archContent}</ul>
            </div>
            <div className="about--info__architectures">
              <h3>Tools I'm using</h3>
              <ul>{toolsContent}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
