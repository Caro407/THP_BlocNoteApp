import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';


const App = () => {
  const [notes, setNotes] = React.useState([]);
  const [currentNote, setCurrentNote] = React.useState('');

  const displayList = () => {
    let count = localStorage.getItem('note_count');
    count = Number.parseInt(count);
    let tab = [];

    for (let i = 0; i < count; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      tab.push(localStorage.getItem(`note_id_${i}`));
    };
    setNotes(tab);
    console.log(notes);
  };

  React.useEffect(() => {displayList()}, []);

  const saveNewNote = (text) => {
    let count = localStorage.getItem('note_count');
    if(!count){
      localStorage.setItem('note_count', "0");
      count = 0;
    };
    localStorage.setItem(`note_id_${count}`, `${text}`);
    localStorage.setItem('note_count', `${Number.parseInt(count)+1}`);
    displayList();
  };

  const displayCurrentNote = (content) => {
    setCurrentNote(content);
  };

  return (
    <div className="container">
      <h1>Bloc Note App</h1>
      <div className="row">
        <NoteList notes={notes} setCurrentNote={displayCurrentNote} />
        <Note saveNote={saveNewNote} currentNote={currentNote} />
      </div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('root'));
