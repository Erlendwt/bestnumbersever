    const cheerio = require('cheerio');
    const puppeteer = require('puppeteer');

    const url = 'https://www.nbim.no/no/';

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
        const newsHeadlines = [];
        $('#liveNavNumber').each(function() {
          newsHeadlines.push({
            number: $(this).text().replace(/ /g, ''),
          });
        });

        console.log(newsHeadlines);
      })
      .catch(console.error);
