import React from 'react';

const NotePreview = (props) => {

  const displayNote = () => {
    props.setCurrentNote(props.id);
  };

  return (
    <div className="card" onClick={displayNote}>
      <h5>{props.content}</h5>
    </div>
  )
};

export default NotePreview;
