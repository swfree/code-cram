const express = require('express');
const app = express();
const routesQuestions = require('./routes-questions.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.get('/questions', routesQuestions.getAllQuestions);
app.get('/questions/:category', routesQuestions.getCategoryQuestions);
app.get('/categories', routesQuestions.getCategories);
app.post('/questions', routesQuestions.saveQuestion);

module.exports = app;
