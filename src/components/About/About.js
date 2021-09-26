import "./About.css";
import avatar from "../../assets/images/me-avatar.png";

const About = () => {
  return (
    <div className="about">
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
            and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="about--info__list">
            <div className="about--info__technologies">
              <h3>Technologies of my expertise</h3>
              <ul>
                <li>HTML / Bootstrap</li>
                <li>HTML / Bootstrap</li>
                <li>HTML / Bootstrap</li>
                <li>HTML / Bootstrap</li>
                <li>HTML / Bootstrap</li>
                <li>HTML / Bootstrap</li>
              </ul>
            </div>
            <div className="about--info__architectures">
              <h3>Architectures I am familiar with</h3>
              <ul>
                <li>3-Tier Architecture</li>
                <li>MVC</li>
                <li>Onion Architecture</li>
              </ul>
            </div>
            <div className="about--info__architectures">
              <h3>Architectures I am familiar with</h3>
              <ul>
                <li>3-Tier Architecture</li>
                <li>MVC</li>
                <li>Onion Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
