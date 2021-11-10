import "./Cv.css";
import cv_en from "../../../assets/NikolaJevricCV.pdf";
import cv_sr from "../../../assets/NikolaJevricCV_sr.pdf";

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
        <h3 className="cv--block__headline">Choose between resume languages</h3>
       
        <div className="cv--text__buttons">
          <a href={cv_en} target="_blank" rel="noopener noreferrer">English</a>
          <a href={cv_sr} target="_blank" rel="noopener noreferrer">Serbian</a>
        </div>
      </div>
    </div>
  );
};
export default Cv;
