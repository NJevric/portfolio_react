import "./About.css";
import Tech from "./Tech/Tech";
import Arch from "./Arch/Arch";
import Tool from "./Tool/Tool";
import ScrollAnimation from "react-animate-on-scroll";
const About = (props) => {
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
        <ScrollAnimation
            initiallyVisible={false}
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1.5}
            offset={150}
          >
          <h2>About Me</h2>
          </ScrollAnimation>
          <ScrollAnimation
            initiallyVisible={false}
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1.5}
            offset={150}
          >
            <p>
              Obviously a web developer with a passion for technology as a base
              with a goal to become full stack javascript developer.
            </p>
            <p>
              Plan and means to fulfill the goal - commitment to project
              deadlines, flexibility in adapting to the client's briefs and
              feedback, openness towards various types of projects, dedication
              in improving coding skills.
            </p>
            <p>
              I am eager to expand my knowledge of the web world. Moreover,
              willing to work and build in a team of passionate people who can
              keep me motivated to go beyond my comfort zone.
            </p>
            <p>
              Briefly - ambitious individue hungry for more projects in
              portfolio
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            initiallyVisible={false}
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1.5}
            offset={150}
          >
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
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
export default About;
