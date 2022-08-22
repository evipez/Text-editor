import "../styles/PopupMenu.css";
import CustomButton from "./CustomButton";

const PopupMenu = (props) => {
  return (
    <div className="PopUp">
      <p>Your text page was created:</p>
      <a href={props.children} target="_blank" rel="noreferrer">
        {props.children}
      </a>
      <CustomButton
        onClick={props.onClick}
        style={{ marginLeft: "0%", marginTop: "5%", width: "100%" }}
      >
        Ok
      </CustomButton>
    </div>
  );
};

export default PopupMenu;
