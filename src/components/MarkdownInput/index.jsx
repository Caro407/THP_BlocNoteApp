import React from 'react';

const MarkdownInput = (props) => {
  const [input, setInput] = React.useState({text: ''});

  const sendNoteForUpdate = (event) => {
    event.preventDefault();
    props.saveNote(input.text);
    props.updateNote(input.text);
  };

  const addText = (text) => {
    let value = document.getElementById('input-note').value;
    setInput({text: value});
  };

  return (
    <div>
      <form onSubmit={sendNoteForUpdate}>
        <label>
          Contenu de la note :
          <textarea id="input-note" name="story" rows="5" cols="33" onChange={addText} className="w-100"></textarea>
        </label>
        <input type="submit" value="Sauvegarder" className="btn btn-danger w-100"/>
      </form>
    </div>
  )
}

export default MarkdownInput;
