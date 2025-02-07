import { useNavigate } from "react-router-dom";
import { showErrorAlert, useInput } from "../../utils";
import { useEffect, useState } from "react";
import { addNote } from "../../utils/notes";

function useCreate() {
  const navigate = useNavigate();
  const [title, handleTitleChange] = useInput();
  const [body, setBody] = useState("");

  useEffect(() => {
    document.title = "Memoire Notes App | Create New Note";
  }, []);

  const handleBodyChange = (event) => setBody(() => event.target.innerHTML);

  const handleSave = () => {
    if (title === "" || body === "") {
      showErrorAlert({
        title: "Opps!!",
        message: "Title and body cannot be empty",
      });
      return;
    }
    addNote({ title, body }).then(({ error }) => {
      if (error) {
        showErrorAlert({
          title: "System Error",
          message: "Failed to create new note",
        });
        return;
      }
      navigate("/");
    });
  };

  return { title, handleTitleChange, body, handleBodyChange, handleSave };
}

export { useCreate };