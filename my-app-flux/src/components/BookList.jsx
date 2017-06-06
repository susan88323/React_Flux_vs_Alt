import React, { Component } from 'react';

import BookStore from '../stores/BookStore';
import BooksActionCreator from '../action-creators/Books';

class BookList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: BookStore.getBooks(),
		};
	}

	componentWillMount() {
		// console.log("WILL MOUNT");
	}

	componentDidMount() {
  	BookStore.onChange(this._onChange);
	}

	componentWillUnmount() {
		console.log("WILLUNMOUNT");
  	BookStore.off(this._onChange);
	}

	_onChange = () => {
		console.log("onChange");
  	this.setState({
    		books: BookStore.getBooks(),
  	});
	}

	updateSelectedBook(book) {
		BooksActionCreator.setSelectedBook(book);
	}

	renderList() {
		return this.state.books.map((book) => {
			return (
				<li
          key={book.title}
          onClick={() => this.updateSelectedBook(book)}
          className="list-group-item">
          {book.title}
        </li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

export default BookList;