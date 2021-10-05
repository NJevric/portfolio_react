import "./Social.css";
const Social = (props) => {
  return (
    <div>
      <li className="socials--list__item">
        <a href={props.social.href}>
          <i className={props.social.content}></i>
        </a>
      </li>
    </div>
  );
};
export default Social;
