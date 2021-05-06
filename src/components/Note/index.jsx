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
      <NoteDisplay noteId={props.currentNoteId}/>
      <MarkdownInput saveNote={props.saveNote} noteId={props.currentNoteId} updateNote={updateDisplay} currentNoteId={props.currentNoteId} updateCurrentNote={props.updateCurrentNote}/>
    </div>
  )
};

export default Note;
