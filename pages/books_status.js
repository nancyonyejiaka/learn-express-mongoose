let BookInstance = require("../models/bookinstance");

exports.show_all_books_status = function (res) {
  BookInstance.find({ status: { $eq: "Available" } })
    .populate("book")
    .exec()
    .then((bookInstance_list) => {
      res.send(
        bookInstance_list.map(function (bookInstance) {
          return bookInstance.book.title + " : " + bookInstance.status;
        })
      );
    })
    .catch((err) => res.send('Book status not found'));
};
