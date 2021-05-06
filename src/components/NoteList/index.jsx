import React from 'react';
import NotePreview from './../NotePreview';

const NoteList = (props) => {

  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <NotePreview key={index} content={note}/>
        )
      })}

    </div>
  )
};

export default NoteList;
