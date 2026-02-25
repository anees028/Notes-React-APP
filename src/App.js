import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

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

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
