import React from 'react';
import Card from './objects/Card';
import Player from './objects/Player';
import Menu from './components/Header';

function App() {
  return (
    <>
      <Menu/>
      <Card/>
      <Player player="o"/>
    </>
  );
}

export default App;
