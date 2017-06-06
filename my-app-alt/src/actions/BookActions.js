import alt from '../alt';

import BookSources from '../sources/BookSources';


class BookActions {
  updateBooks(books) {
	return books;
  }

  selectBook(book) {
	return book;
  }

  fetchBooks() {
	BookSources.fetchBooks()
	  .then((response) => {
        this.actions.updateBooks(response.data);
      }).catch((reason) => {
        		//TODO
      });
  }
}

module.exports = alt.createActions(BookActions);