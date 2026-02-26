import AddNote from "./AddNotes";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const handleSave = (noteText) => {
    handleAddNote(noteText);
  };

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleSave} />
    </div>
  );
};

export default NotesList;
