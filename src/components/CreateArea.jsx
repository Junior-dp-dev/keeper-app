import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    setNote({ title: "", content: "" });
    event.preventDefault();

    Axios.post("http://localhost:3000/register", {
      title: note.title,
      content: note.content,
    }).then(() => {
      props.onRefresh();
    });
  }

  function expandInput() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        <input onClick={expandInput} onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        {expand && <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />}

        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
