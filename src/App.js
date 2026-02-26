import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const initialNotes = [
  {
    id: nanoid(),
    text: "This is my first note!",
    date: "2024-01-01",
  },
  {
    id: nanoid(),
    text: "This is my Second note!",
    date: "2024-01-01",
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "2024-01-01",
  },
  {
    id: nanoid(),
    text: "This is my fourth note!",
    date: "2024-01-01",
  },
];

const App = () => {
  const [notes, setNotes] = useState(initialNotes);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToogleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase()),
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
