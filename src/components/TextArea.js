import "../styles/TextArea.css";

const TextArea = (props) => {
  const setTextHandler = (event) => {
    props.setText(event.target.value);
  };

  if (props.noInputOnSubmit) {
    return (
      <div>
        <textarea
          value={props.text}
          onChange={setTextHandler}
          readOnly={props.readOnly}
          style={{
            borderLeft: "solid",
            borderColor: "firebrick",
          }}
        ></textarea>
      </div>
    );
  } else {
    return (
      <textarea
        value={props.text}
        onChange={setTextHandler}
        readOnly={props.readOnly}
      ></textarea>
    );
  }
};

export default TextArea;
