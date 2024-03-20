const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: String
});

// Export model
module.exports = mongoose.model("Test", TestSchema);
