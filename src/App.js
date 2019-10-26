import React from 'react';
import logo from './logo.svg';
import './App.css';
import RemoteControl from './components/RemoteControl';
import Ec2ainun from './components/ec2ainun';

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <RemoteControl />
      <Ec2ainun/>
    </div>
  );
}

export default App;
