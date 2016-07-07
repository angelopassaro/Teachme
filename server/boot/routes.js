var dsConfig = require('../datasources.json');

module.exports = function(app) {
  var User = app.models.student;

  app.get('/verified', function(req, res) {
      res.render('verified');
  });

  app.get('/signin', function(req, res) {
      res.redirect('/#/signin');
});

}
