import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';


const App = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const displayList = () => {
      let tab = []
      for (let i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        tab.push(localStorage.getItem(localStorage.key(i)));
        setNotes(tab);
      }
    };
  displayList();
}, [notes]);

  const saveNewNote = (text) => {
    let count = localStorage.getItem('note_count');
    let newNote = JSON.stringify(text);
    if(count === undefined){
      localStorage.setItem('note_count', `${0}`);
    };
    localStorage.setItem(`note_id_${count}`, `${newNote}`);
    localStorage.setItem('note_count', `${Number.parseInt(count)+1}`);
    addNoteToList(localStorage.key(`${count}`))
  };

  const addNoteToList = (note) => {
    let tab = notes
    tab.push(note);
    setNotes(tab);
  };

  return (
    <div>
      <h1>Bloc Note App</h1>
      <NoteList notes={notes}/>
      <Note saveNote={saveNewNote}/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('root'));
