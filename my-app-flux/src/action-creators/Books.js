import BaseActionCreator from './BaseActionCreator';
//import Dispatcher from '../core/Dispatcher';
//import BookStore from '../stores/BookStore';
import assign from 'object-assign';

const BooksActionCreator = assign({}, BaseActionCreator, {
  setSelectedBook(book) {
    BaseActionCreator.dispatchToDispatcher('SET_SELECTED_BOOK', book);
  }
});

export default BooksActionCreator;
