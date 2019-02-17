import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default hot(module)(App);
