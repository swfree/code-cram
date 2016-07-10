const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = mongoose.Schema({
  question: String,
  answer: String,
  category: String
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
