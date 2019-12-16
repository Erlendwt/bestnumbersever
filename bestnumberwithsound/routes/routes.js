const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://www.nbim.no/no/';

let newsHeadlines = []

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(html => {
    const $ = cheerio.load(html);
    $('#liveNavNumber').each(function() {
      newsHeadlines.push({
        number: $(this).text().replace(/ /g, ''),
      });
    });

    console.log(newsHeadlines);
  })
  .catch(console.error);


var appRouter = function (app) {
  app.get("/number", function(req, res) {
    res.status(200).send(newsHeadlines);
  });
}

module.exports = appRouter;