import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Menu from './components/Header';
import Label from './objects/Label';

const App = () =>(
  <main className='app'>
    <Menu/>
    <Hashtag/>
    <Label content="Mostrar eventos"/>
  </main>
);

export default App;
