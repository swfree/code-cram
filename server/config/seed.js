const request = require('request');
const questions = require('./data.js');

questions.forEach((question) => {
  request.post({
    url: 'http://localhost:3000/questions',
    form: {
      question: question.question,
      answer: question.answer,
      category: question.category
    }
  }, (err, res, body) => {
    if (err) console.error(err);
  });
});
