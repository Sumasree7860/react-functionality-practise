import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrayList from './components/ArrayList';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <center>
        <ArrayList/>
        <hr></hr>
        <Counter/>
        <hr></hr>
        <SearchFilter/>
        <hr></hr>
        <Accordion/>
      </center>
     
    </div>
  );
}

export default App;
