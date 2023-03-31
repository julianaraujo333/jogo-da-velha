import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Menu from './components/Header';

const App = () =>(
  <main className='app'>
    <Menu/>
    <Hashtag/>
  </main>
);

export default App;
