// Using Node.js, read the assigned AA text file and store the contents of the file in a variable

var fs = require('fs');
var cheerio = require('cheerio');

// Load the AA text file from week01 into a variable, `dataset`
var dataset = fs.readFileSync('../Week1/data/m04.txt');

// Load `dataset` into a cheerio object
var $ = cheerio.load(dataset);

// Write the project titles to a text file
var thesisTitles = '';

// Select tag and use attribute to narrow down the requested data
$('td').each(function(i, elem) {
    if ($(elem).attr("style") == "border-bottom:1px solid #e3e3e3; width:260px") {
        thesisTitles += ($(elem).text()).trim() + '\n';
    }
    
// Remove all unnecessary content by tag
    $('b, div, span').remove();
});

fs.writeFileSync('../Week2/data/m04.txt', thesisTitles);

