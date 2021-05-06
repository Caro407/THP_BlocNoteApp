import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';


const App = () => {
  const saveNewNote = (text) => {
    let count = localStorage.getItem('note_count');
    let newNote = JSON.stringify(text);
    if(count === undefined){
      localStorage.setItem('note_count', `${0}`);
    };
    localStorage.setItem(`note_id_${count}`, `${newNote}`);
    localStorage.setItem('note_count', `${Number.parseInt(count)+1}`);
  };

  return (
    <div>
      <h1>Bloc Note App</h1>
      <NoteList />
      <Note saveNote={saveNewNote}/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('root'));
