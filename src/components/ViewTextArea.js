import "../styles/TextArea.css";
import TextArea from "./TextArea";
import { useParams } from "react-router-dom";
import * as DatabaseManager from "../services/DatabaseManager";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";
import CustomButton from "./CustomButton";

const ViewTextArea = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  const onEdit = () => {
    const win = window.open(
      "http://localhost:3001/posts/" + id + "/edit",
      "_self"
    );

    if (win != null) {
      win.focus();
    }
  };

  const onRemove = async () => {
    DatabaseManager.removeFromDatabase(id);

    const win = window.open("http://localhost:3001", "_self");

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
          <TextArea readOnly text={text} />
          <CustomButton onClick={onEdit}>Edit</CustomButton>
          <CustomButton onClick={onRemove} style={{ marginLeft: "0.5%" }}>
            Remove
          </CustomButton>
        </div>
      </div>
    );
  }
};

export default ViewTextArea;
