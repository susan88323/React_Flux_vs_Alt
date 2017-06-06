import React, { Component } from 'react';

import BookStore from '../stores/BookStore';
import BookActions from '../actions/BookActions';

class BookList extends Component {
	state = {
		books: BookStore.getState().books,
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
		console.log("BOOKS: ", this.state.books);
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}

	updateSelectedBook(book) {
		BookActions.selectBook(book);
	}
}

module.exports = BookList;