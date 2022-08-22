import { useRef, useState } from "react";

import CustomButton from "./CustomButton";
import TextArea from "./TextArea.js";
import * as DatabaseManager from "../services/DatabaseManager";
import PopupMenu from "./PopupMenu";
import "../styles/CreateTextArea.css";

const CreateTextArea = () => {
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const [empty, setEmpty] = useState(false);
  const id = useRef(); //returns an object { current: undefined};

  const submitHandler = async (event) => {
    event.preventDefault();

    if (text === "") {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }

    id.current = await DatabaseManager.addToDatabase(text);

    setText("");
    setPopup(true);
  };

  if (empty) {
    return (
      <div>
        <h1>Enter your Text</h1>
        <form onSubmit={submitHandler}>
          <h3 style={{ color: "firebrick" }}>You need to input a text.</h3>

          <TextArea text={text} setText={setText} noInputOnSubmit={true} />
          <CustomButton>Go</CustomButton>
        </form>
      </div>
    );
  } else if (popup) {
    return (
      <div>
        <h1>Enter your Text</h1>
        <form onSubmit={submitHandler}>
          <h3 style={{ color: "dimgrey" }}>You need to input a text.</h3>

          <PopupMenu
            onClick={() => {
              setPopup(false);
            }}
            title="Text Page created!"
          >
            {"http://localhost:3001/posts/" + id.current}
          </PopupMenu>

          <TextArea text={text} setText={setText} />
          <CustomButton>Go</CustomButton>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Enter your Text</h1>
        <div style={{ marginTop: "5%" }}>
          <form onSubmit={submitHandler}>
            <h3 style={{ color: "dimgrey" }}>You need to input a text.</h3>

            <TextArea text={text} setText={setText} />
            <CustomButton>Go</CustomButton>
          </form>
        </div>
      </div>
    );
  }
};

export default CreateTextArea;
