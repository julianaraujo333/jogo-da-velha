import React from 'react';
import './App.css';
import Input from './objects/Input';

import Hashtag from './components/Hashtag';
import Menu from './components/Header';

const App = () =>(
  <main className='app'>
    <Menu/>
    <Hashtag/>
    <Input id="show" content="Mostrar eventos" value="show"/>
  </main>
);

export default App;
