import React from 'react';

const NoteDisplay = (props) => {
  let content = localStorage.getItem(`note_id_${props.noteId}`);
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

export default NoteDisplay;
