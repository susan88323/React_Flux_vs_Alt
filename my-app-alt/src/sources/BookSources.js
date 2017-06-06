/* eslint-disable */
var books = [
  { title: 'Javascript: The Good Parts', pages: 101 },
  { title: 'Harry Porter', pages: 39 },
  { title: 'Book 3', pages: 85 },
  { title: 'Gone with wind', pages: 1 }
];

const BookSources = {
  fetchBooks: function () {
  	return new Promise(function (resolve, reject) {
  	  setTimeout(function() {
  		resolve(books);
  	  }, 250);
  	});
  },
};

module.exports = BookSources;