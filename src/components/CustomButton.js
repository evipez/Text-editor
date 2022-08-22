import "../styles/CustomButton.css";

const CustomButton = (props) => {
  return (
    <button type="submit" onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
};

export default CustomButton;
