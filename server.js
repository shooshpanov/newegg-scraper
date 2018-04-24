const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

const parser = require('./parser');

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

const middlewares = [
  // ...
  bodyParser.urlencoded({ extended: false })
];

app.use(middlewares);

// routes
app.get('/', (req, res) => {
  //res.render('index')
  res.send(parser)
  //res.send('GET request to the homepage')
})

app.get('/scraped', (req, res) => {
  res.send('GET to scraped page')
})

app.post('/scraped', (req, res) => {
  // res.render('scraped', {
  //   //url: req.body.url
  // })
  //res.send(title)
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(8081);
console.log('8081 is the magic port')