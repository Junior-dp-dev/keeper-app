import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/getNotes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const refreshNotes = () => {
    Axios.get("http://localhost:3000/getNotes").then((response) => {
      setNotes(response.data);
    });
  };

  function deleteNote(id) {
    Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
      setNotes((prevNotes) => {
        return prevNotes.filter((note) => {
          return note.idkepper !== id;
        });
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onRefresh={refreshNotes} />
      {notes.length === 0
        ? null
        : notes.map((notas) => {
            return <Note key={notas.idkepper} id={notas.idkepper} title={notas.title} content={notas.content} onDelete={deleteNote} onRefresh={refreshNotes} />;
          })}

      <Footer />
    </div>
  );
}

export default App;
