import React from 'react';
import MarkdownView from 'react-showdown';

const NotePreview = (props) => {
  const [note, setNote] = React.useState(props.content);

  const shortenContent = (text) => {
    if(text.length > 50) {
      text = text.slice(0, 50) + ' [...]';;
    }
    return text
  };

  const displayNote = () => {
    props.setCurrentNote(props.id);
  };

  return (
    <div className="card my-1" onClick={displayNote}>
      <MarkdownView markdown={shortenContent(props.content)} options={{ tables: true, emoji: true }}/>
    </div>
  )
};

export default NotePreview;
