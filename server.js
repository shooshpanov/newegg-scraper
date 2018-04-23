const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(8081);
console.log('8081 is the magic port');