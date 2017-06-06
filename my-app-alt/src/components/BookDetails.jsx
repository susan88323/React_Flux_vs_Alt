import React, { Component } from 'react';

import BookStore from '../stores/BookStore';

class BookDetails extends Component {
    state = {
    	selectedBook: BookStore.getState().selectedBook,
  	};

  	componentDidMount() {
    	BookStore.listen(this.onChange.bind(this));
  	}

  	componentWillUnmount() {
    	BookStore.unlisten(this.onChange.bind(this));
  	}

  	onChange(state) {
    	this.setState(state);
  	}

	render() {
    if (!this.state.selectedBook) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.state.selectedBook.title}</div>
        <div>Pages: {this.state.selectedBook.pages}</div>
      </div>
    );
  }
}

module.exports = BookDetails;