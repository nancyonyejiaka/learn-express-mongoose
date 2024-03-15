var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", require: true },
  summary: { type: String, require: true },
  isbn: { type: String, require: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

//Export model
module.exports = mongoose.model("Book", BookSchema);