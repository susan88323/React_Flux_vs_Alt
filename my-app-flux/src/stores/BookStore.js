import Dispatcher from '../core/Dispatcher';

import EventEmitter from 'eventemitter3';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

var _books = [
// eslint-disable-next-line
      { title: 'Javascript: The Good Parts', pages: 101 },
      { title: 'Harry Porter', pages: 39 },
      { title: 'Book 3', pages: 85 },
      { title: 'Gone with wind', pages: 1 }
];
// var _books = [];
var _selectedBook = null;

function setSelectedBook(book) {
	_selectedBook = book;
}

function setBooks(books) {
	_books = books;
}

const BookStore = assign({}, EventEmitter.prototype, {
	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	onChange(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	off(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getSelectedBook() {
		return _selectedBook;
	},

	getBooks() {
		return _books;
	}

});

BookStore.dispatcherToken = Dispatcher.register((payload) => {
  const actionType = payload.actionType;

  switch (actionType) {
  	case 'GET_BOOKS':
  	  const books = payload.data;
  	  setBooks(books);
  	  BookStore.emitChange();
  	  break;
    case 'SET_SELECTED_BOOK':
      const selectedBook = payload.data;
      setSelectedBook(selectedBook);
      BookStore.emitChange();
      break;

    default:
      break;
  }
});


export default BookStore;