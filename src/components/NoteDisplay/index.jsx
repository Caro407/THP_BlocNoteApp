import React from 'react';
import MarkdownView from 'react-showdown';

const NoteDisplay = (props) => {
  let content = localStorage.getItem(`note_id_${props.noteId}`);
  return (
    <div>
      <MarkdownView markdown={content} options={{ tables: true, emoji: true }}/>
    </div>
  )
}

export default NoteDisplay;
