/* eslint-disable */
import alt from '../alt';

import BookActions from '../actions/BookActions';


class BookStore {
  constructor() {
	this.books = [
	  { title: 'Javascript: The Good Parts', pages: 101 },
	  { title: 'Harry Porter', pages: 39 },
	  { title: 'Book 3', pages: 85 },
	  { title: 'Gone with wind', pages: 1 }
	];
	this.selectedBook = null;

	this.bindActions(BookActions);
  }

  onUpdateBooks(books) {
	this.books = books;
  }

  onSelectBook(book) {
	this.selectedBook = book;
  }
}

module.exports = alt.createStore(BookStore, 'BookStore');;