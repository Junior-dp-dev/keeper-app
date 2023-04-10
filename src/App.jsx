import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Axios from "axios";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [notes, setNotes] = useState([]);

  //Read Notes
  useEffect(() => {
    Axios.get(`${apiUrl}getNotes`).then(({ data }) => {
      console.log(data);
      setNotes(data);
    });
  }, []);

  /*   useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon").then(({ data }) => {
      console.log(`count:${data.count}, next:${data.next}`);
      const obj = [{ title: data.count, content: data.next }];
      console.log(obj);
      setNotes(obj);
    });
  }, []); */

  //Creat Notes
  const createNote = (newNote) => {
    Axios.post(`${apiUrl}register`, {
      title: newNote.title,
      content: newNote.content,
    }).then();
  };

  //Edit Notes
  const editNote = (note) => {
    Axios.put(`${apiUrl}edit`, {
      id: note.id,
      title: note.title,
      content: note.content,
    }).then();
  };

  //Delete Notes
  const deleteNote = (id) => {
    Axios.delete(`${apiUrl}delete/${id}`).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onSubmit={createNote} />
      {notes.length === 0
        ? null
        : notes.map((notas) => {
            return <Note key={notas.id} id={notas.id} title={notas.title} content={notas.content} onDelete={deleteNote} onEdit={editNote} />;
          })}

      <Footer />
    </div>
  );
}

export default App;
