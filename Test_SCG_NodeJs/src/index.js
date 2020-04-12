const express = require('express')
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(require('./calculate1'));
app.use(require('./calculate2'));


app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

