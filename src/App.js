import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>      
      <p>hi</p>
      <MainPage />
      </div>

    );
  }
}

export default App;
