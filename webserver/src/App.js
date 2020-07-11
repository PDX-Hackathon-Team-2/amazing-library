import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage.organism';
import { Container } from 'react-bootstrap';



function App() {
    return (

    <div className="App container">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
