import React, { Component } from 'react';
//import { render } from 'react-dom';
import './App.css';

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

export default App;
