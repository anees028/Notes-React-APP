import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const [remainingChars, setRemainingChars] = useState(characterLimit);

  const handleOnchange = (event) => {
    const inputText = event.target.value;
    setRemainingChars(characterLimit - inputText.length);
    if (characterLimit - inputText.length >= 0) {
      setNoteText(inputText);
    } else {
      setRemainingChars(0);
    }
  };

  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
    event.preventDefault();
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
        <button
          className="save"
          onClick={handleSaveClick}
          disabled={remainingChars < 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
