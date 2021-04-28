import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([]);

  function addNote(newNote) {
    addNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    addNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={addNote} />
      {notes.map((note, index) => {
        //return <Note key={1} title="Note title" content="Note content" />
        return (
          <Note
            id={index}
            onChange={deleteNote}
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
