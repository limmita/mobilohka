import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container/Container';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container />
      </div>
    );
  }
}

export default App;
