import "./Social.css";
const Social = (props) => {
  return (
    <div>
      <li className="socials--list__item">
        <a href={props.social.href} target="_blank" rel="noopener noreferrer">
          <i className={props.social.content}></i>
        </a>
      </li>
    </div>
  );
};
export default Social;
