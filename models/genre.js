var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, require: true },
  url: { type: String, require: true },
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
