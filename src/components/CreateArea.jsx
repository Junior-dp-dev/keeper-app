import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((lastValue) => {
      return { ...lastValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //Existe uma função no App.jsx com esse mesmo nome, que recebe essa entrada note, o que eu colocar aqui vai para la
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function testE() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        <input onClick={testE} onChange={handleChange} name="title" placeholder="Title" value={note.title} />
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
