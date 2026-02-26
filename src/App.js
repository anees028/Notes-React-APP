import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("react-notes-app-data"));
      return saved.reverse() || [];
    } catch (err) {
      return [];
    }
  });

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // Persist notes to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    } catch (err) {
      alert("Failed to save notes. Please try again.");
    }
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
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
        <div className="content">
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
