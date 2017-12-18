import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
        </div>
      </div>;
  }
}

export default App;
