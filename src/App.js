import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import CreateTextArea from "./components/CreateTextArea";
import ViewTextArea from "./components/ViewTextArea";
import NotFoundPage from "./components/NotFoundPage";
import EditTextArea from "./components/EditTextArea";

function App() {
  useEffect(() => {
    document.title = "Text Editor";
  });

  return (
    <Routes>
      <Route path="/" element={<CreateTextArea />} />

      <Route path="posts/:id" element={<ViewTextArea />} />

      <Route path="posts/:id/edit" element={<EditTextArea />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
