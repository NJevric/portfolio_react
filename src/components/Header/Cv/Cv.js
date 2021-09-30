import "./Cv.css";
const Cv = (props) => {
  const sendToParent = () => {
    props.onOpen(false);
  };

  return (
    <div className= {props.open ? "disableBlock" : ''} >
      <div
        className={`cv--block__close
         ${props.open ? "cv--block" : ''} 
        `}
      >
        <i className="far fa-times-circle" onClick={sendToParent}></i>
        <h3 className="cv--block__headline">Choose between languages</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <div className="cv--text__buttons">
          <a href="#">Serbian</a>
          <a href="#">English</a>
        </div>
      </div>
    </div>
  );
};
export default Cv;
