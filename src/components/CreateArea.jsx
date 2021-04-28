import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const val = event.target.value;
    const name = event.target.name;
    setNewNote((prev) => {
      return {
        ...prev,
        [name]: val
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={newNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onChange(newNote);
            event.preventDefault();
            setNewNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
