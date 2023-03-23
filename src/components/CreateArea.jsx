import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

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

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
