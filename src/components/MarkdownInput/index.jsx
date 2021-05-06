import React from 'react';

const MarkdownInput = (props) => {
  const [input, setInput] = React.useState({text: ''});

  const sendNoteForUpdate = (event) => {
    console.warn('SUBMIT');
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
          <textarea id="input-note" name="story" rows="5" cols="33" onChange={addText} className="w-100"></textarea>
        </label>
        <input type="submit" value="Créer une nouvelle note" className="btn btn-danger w-100"/>
        <button className="btn btn-info w-100" onClick={updateNote}>Modifier la note actuelle</button>
      </form>
    </div>
  )
}

export default MarkdownInput;
