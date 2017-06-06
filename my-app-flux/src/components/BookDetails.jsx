import React, { Component } from 'react';

import BookStore from '../stores/BookStore';

class BookDetails extends Component {
	constructor(props) {
    super(props);

    this.state = {
      selectedBook: BookStore.getSelectedBook(),
    };
  }

  	componentWillMount() {
      //BookStore.getSelectedBook();
    }

    componentDidMount() {
      BookStore.onChange(this._onChange);
    }

    componentWillUnmount() {
      BookStore.off(this._onChange);
    }

    _onChange = () => {
      this.setState({
          selectedBook: BookStore.getSelectedBook(),
      });
    }

	render() {
    console.log("selectedBook: ", this.state.selectedBook);
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

export default BookDetails;