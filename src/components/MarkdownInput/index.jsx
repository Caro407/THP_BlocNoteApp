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
          New note :
          <input type="text-area" name="name" id="input-note" onChange={addText} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MarkdownInput;
