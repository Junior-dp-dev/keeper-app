import React, { useState } from "react";
import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([{ title: "Title", content: "Content" }]);

  function addNote(note) {
    // A função addNote recebe uma nova nota a ser adicionada como parâmetro.
    setNotes((lastValue) => {
      // A função setNotes é chamada com uma função de callback que recebe o último valor de notes como parâmetro.
      return [...lastValue, note];
      // O novo array de notas é criado com o operador spread e a nova nota é adicionada ao final.
    });
  }

  function deleteNote(id) {
    // A função deleteNote recebe o ID da nota a ser excluída como parâmetro.
    setNotes((lastValue) => {
      // A função setNotes é chamada com uma função de callback que recebe o último valor de notes como parâmetro.
      return lastValue.filter((item, index) => {
        // O método filter é chamado em lastValue para criar um novo array contendo apenas as notas que não devem ser excluídas.
        // A função de callback do filter recebe dois parâmetros: o item atual e o índice atual.
        return index !== id;
        // A condição do filter é que o índice atual seja diferente do ID da nota a ser excluída. Isso garante que apenas as notas que não devem ser excluídas sejam mantidas no novo array.
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notas, index) => {
        return <Note key={index} id={index} title={notas.title} content={notas.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
