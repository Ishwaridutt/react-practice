import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet'
import  Welcome  from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
      {/** want to pass dynamic html content, pass it in between component tag */}
      <Greet name = 'Barry' heroName = 'flash'><p>this is a child paragraph</p></Greet>
      <Greet name = 'Clark' heroName = 'super man'>
        <button>Action</button>
      </Greet>
      {/** properties you know for sure will be passed, pass them as an attribue */}
      <Greet name = 'Bruce' heroName = 'batman' />
      <Welcome name = 'Barry' heroName = 'flash' />
      <Welcome name = 'Clark' heroName = 'super man'/>
      <Welcome/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
