import React from 'react';
import NotePreview from './../NotePreview';

const NoteList = (props) => {

  return (
    <div className="col-6">
      {props.notes.map((note, index) => {
        return (
          <NotePreview key={index} content={note} setCurrentNote={props.setCurrentNote} />
        )
      })}

    </div>
  )
};

export default NoteList;
