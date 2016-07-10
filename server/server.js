const app = require('./routes/routes.js');
require('./config/config.js');

app.listen(3000, function () {
  console.log('CodeCram listening on port 3000!');
});
