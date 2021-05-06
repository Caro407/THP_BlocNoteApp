import React from 'react';
import NoteDisplay from './../NoteDisplay';
import MarkdownInput from './../MarkdownInput';

const Note = (props) => {
  const [noteInfos, setNoteInfos] = React.useState(props.currentNote);

  const updateDisplay = (text) => {
    setNoteInfos(text);
  };

  return (
    <div className="col-6">
      <NoteDisplay content={props.currentNote}/>
      <MarkdownInput saveNote={props.saveNote} updateNote={updateDisplay}/>
    </div>
  )
};

export default Note;
