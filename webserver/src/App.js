import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage.organism';
import { Container } from 'react-bootstrap';
import LibraryPage from './LibraryPage';



function App() {


  const student = "student";
  const library = "library";
  const addBook = "add book"; 
  const homepage = "homepage";


  let currentView = homepage;

  const GiantDUmbStorageVariable = {
    students: [],
    books: ["I suck at UI stuff", "So do you"],
  };

  //todo: func that chancges current view based on button chosen
  
  //todo: function to grab the data from backend


    return (

    <div className="App container">
      {currentView === homepage && <HomePage></HomePage>}
      {currentView === library && <LibraryPage options={GiantDUmbStorageVariable.books}> </LibraryPage>}
    </div>
  );
}

export default App;
