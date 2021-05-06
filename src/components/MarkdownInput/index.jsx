import React from 'react';

const MarkdownInput = (props) => {
  const [input, setInput] = React.useState({text: ''});
  let content = localStorage.getItem(`note_id_${props.noteId}`);
  console.warn(content);

  const sendNoteForUpdate = (event) => {
    event.preventDefault();
    props.saveNote(input.text);
    props.updateNote(input.text);
  };

  const addText = (text) => {
    let value = document.getElementById('input-note').value;
    setInput({text: value});
  };

  const updateNote = (event) => {
    event.preventDefault();
    let value = document.getElementById('input-note').value;
    props.updateCurrentNote(value, props.currentNoteId)
  };

  return (
    <div>
      <form onSubmit={sendNoteForUpdate}>
        <label>
          Contenu de la note :
          <textarea id="input-note" name="story" defaultValue={content} rows="5" cols="33" onChange={addText} className="w-100">
          </textarea>
        </label>
          <input type="submit" value="Créer une nouvelle note" className="btn btn-danger w-100 mb-2"/>
          <button className="btn btn-primary w-100" onClick={updateNote}>Modifier la note actuelle</button>
      </form>
    </div>
  )
}

export default MarkdownInput;
