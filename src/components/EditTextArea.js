import "../styles/TextArea.css";
import TextArea from "./TextArea";
import { useParams } from "react-router-dom";
import * as DatabaseManager from "../services/DatabaseManager";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";
import CustomButton from "./CustomButton";

const EditTextArea = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  const onSave = () => {
    DatabaseManager.updateDataBase(text, id);

    const win = window.open("http://localhost:3001/posts/" + id, "_self");

    if (win != null) {
      win.focus();
    }
  };

  const onBack = () => {
    const win = window.open("http://localhost:3001/posts/" + id, "_self");

    if (win != null) {
      win.focus();
    }
  };

  const getResponseText = async () => {
    setText(await DatabaseManager.getTextById(id));
    return;
  };

  if (text === "") {
    getResponseText();
  }

  if (text == null) {
    return <NotFoundPage />;
  } else {
    return (
      <div>
        <h1>Text-ID: {id}</h1>
        <div style={{ marginTop: "5%" }}>
          <TextArea text={text} setText={setText} />
          <CustomButton onClick={onSave}>Save</CustomButton>
          <CustomButton onClick={onBack} style={{ marginLeft: "0.5%" }}>
            Back
          </CustomButton>
        </div>
      </div>
    );
  }
};

export default EditTextArea;
