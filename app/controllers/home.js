var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  // var articles = [new Article(), new Article()];
  //   res.render('main', {
  //     // title: 'Generator-Express MVC',
  //     // articles: articles
  //   });
    res.sendfile('public/html/main.html');
});
