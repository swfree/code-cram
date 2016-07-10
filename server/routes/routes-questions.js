const Question = require('../models/questions.js');
const Q = require('q');
const findQuestions = Q.nbind(Question.find, Question);
const createQuestion = Q.nbind(Question.create, Question);

exports.getAllQuestions = (req, res) => {
  findQuestions()
    .then((questions) => {
      res.status(200).send(questions);
    })
    .fail((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.getCategories = (req, res) => {
  findQuestions()
    .then((questions) => {
      const categories = {};
      const uniqueCategoryNames = questions.reduce((prev, curr) => {
        if (!categories.hasOwnProperty(curr.category)) {
          categories[curr.category] = true;
          prev.push(curr.category);
        }
        return prev;
      }, []);

      res.status(200).send(uniqueCategoryNames);
    })
    .fail((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.getCategoryQuestions = (req, res) => {
  const category = new RegExp(req.params.category);
  findQuestions({ category })
    .then((questions) => {
      res.status(200).send(questions);
    })
    .fail((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.saveQuestion = (req, res) => {
  createQuestion({
      question: req.body.question,
      answer: req.body.answer,
      category: req.body.category
    })
    .then((question) => {
      res.status(201).send(question);
    })
    .fail((err) => {
      console.error(err);
      res.status(500);
    });
};
