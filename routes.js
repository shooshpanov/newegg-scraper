const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/scraped', (req, res) => {
  res.render('scraped', {
    url: req.body.url
  })
});

module.exports = router;