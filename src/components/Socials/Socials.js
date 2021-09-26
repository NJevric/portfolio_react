import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <ul className="socials--list">
        <li className="socials--list__item">
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="socials--list__item">
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>

        <li className="socials--list__item">
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li className="socials--list__item">
          <a href="#">
            <i class="far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Socials;
