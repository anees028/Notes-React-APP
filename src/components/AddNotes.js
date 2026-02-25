import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [remainingChars, setRemainingChars] = useState(200);
  const characterLimit = 200;

  const handleOnchange = (event) => {
    const inputText = event.target.value;
    setNoteText(inputText);
    setRemainingChars(characterLimit - inputText.length);
  };

  const handleSaveClick = (event) => {
    handleAddNote(noteText);
    event.preventDefault();
    setNoteText("");
    setRemainingChars(characterLimit);
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleOnchange}
      ></textarea>
      <div className="note-footer">
        <small>{remainingChars} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
