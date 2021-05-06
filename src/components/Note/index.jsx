import React from 'react';
import NoteDisplay from './../NoteDisplay';
import MarkdownInput from './../MarkdownInput';

const Note = (props) => {
  const [noteInfos, setNoteInfos] = React.useState('');

  const updateDisplay = (text) => {
    setNoteInfos(text);
  };

  return (
    <div>
      <NoteDisplay content={noteInfos}/>
      <MarkdownInput saveNote={props.saveNote} updateNote={updateDisplay}/>
    </div>
  )
};

export default Note;
