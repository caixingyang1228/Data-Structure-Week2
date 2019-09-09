const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('test2m04.csv');

// Write Headers
writeStream.write(`name,address\n`);

request('../Week1/data/m04.txt', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('td').each((i, el) => {
      const name = $(el)
        .find('b')
        .text()
        .replace(/\s\s+/g, '');
      const address = $(el)
        .find('br')
        .text()
        .replace(/\s\s+/g, '');
      // Write Row To CSV
      writeStream.write(`${name}, ${address} \n`);
    });

    console.log('Scraping Done...');
  }
});