import "./Contact.css";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="contact--info">
          <ScrollAnimation
            initiallyVisible={false}
            animateOnce={true}
            animateIn="fadeInUp"
            duration={1.5}
            offset={150}
          >
            <h2>Want to work with me?</h2>
            <p>
              My experience rate wants to rise and you want to upgrade this
              page?
              <br />
              Don't hesitate, contact me.
            </p>
            <div className="contact--info__button">
              <a href="mailto:njevric9@gmail.com">
                Message me<div className="line"></div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
export default Contact;
