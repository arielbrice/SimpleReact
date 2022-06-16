import React from 'react'

import logo from './logo.svg';
import './App.css';
import Button from './button';
import Box from './box';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          border='none'
          color="blue"
          height="200px"
          onClick={() => console.log("you have clicked the blue button!")}
          radius="50%"
          width='200px'
          children="I'm a blue button!"
        />

        <Box
          border='none'
          size="450px"
          color="teal"
          onClick={() => console.log("You have clicked the teal Box")}
          children="I'm a teal Box!"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          component: Button
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



