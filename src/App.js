import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import Main from './components/main-section/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default hot(module)(App);
