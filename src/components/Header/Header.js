import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header--text">
          <h1>Hello World! I'm Nikola And I Build Websites</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,I'm a web developer &amp; CS Enthusiast based in Belgrade, Serbia.
          </p>
          <div className="header--text__buttons">
            <a href="#">Get in touch</a>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
