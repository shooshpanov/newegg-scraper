var request = require('request');
var cheerio = require('cheerio');

var url = 'http://www.imdb.com/title/tt1229340/';

var title, release, rating;
var json = { title : "", release : "", rating : ""};


request(url, (error, response, html) => {
    if(!error){
        var $ = cheerio.load(html);

        $('.header').filter(function(){
            var data = $(this);
            title = data.children().first().text();

            release = data.children().last().children().text();

            json.title = title;
        })

        // Since the rating is in a different section of the DOM, we'll have to write a new jQuery filter to extract this information.

        $('.star-box-giga-star').filter(function(){
            var data = $(this);

            // The .star-box-giga-star class was exactly where we wanted it to be.
            // To get the rating, we can simply just get the .text(), no need to traverse the DOM any further

            rating = data.text();

            json.rating = rating;
        })
    }
})

module.exports = json;