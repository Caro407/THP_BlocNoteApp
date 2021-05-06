import React from 'react';

const NoteDisplay = (props) => {
  return (
    <div>
      Note Display Container
      <p>{props.content}</p>
    </div>
  )
}

export default NoteDisplay;
