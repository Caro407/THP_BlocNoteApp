import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteList from './components/NoteList';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

const App = () => {
  return (
    <div>
      <h1>Bloc Note App</h1>
      <NoteList />
      <NoteDisplay />
      <MarkdownInput />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('root'));
