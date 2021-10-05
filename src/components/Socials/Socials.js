import "./Socials.css";
import Social from "./Social/Social";
const Socials = (props) => {
  return (
    <div className="socials">
      <ul className="socials--list">
        {
          props.socials.map(social => (
            <Social key={social.id} social={social}/>
          ))
        }
      </ul>
    </div>
  );
};
export default Socials;
