import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';


const App = () => {
  const [notes, setNotes] = React.useState([]);

  const displayList = () => {
    let count = localStorage.getItem('note_count');
    count = Number.parseInt(count);
    let tab = [];

    for (let i = 0; i < count; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      tab.push(localStorage.getItem(`note_id_${i}`));
    };
    setNotes(tab);
  };

  React.useEffect(() => {displayList()}, []);

  const saveNewNote = (text) => {
    let count = localStorage.getItem('note_count');
    let newNote = JSON.stringify(text);
    if(count === undefined){
      localStorage.setItem('note_count', "0");
    };
    localStorage.setItem(`note_id_${count}`, `${newNote}`);
    localStorage.setItem('note_count', `${Number.parseInt(count)+1}`);
    displayList();
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
