# Data-Structure-Week2

 1. By using  `cheerio`, a jQuery implementation to load content in the text saved in [Week1/data/m04.txt](https://github.com/caixingyang1228/data-structure/blob/master/m04.txt)
 

    var fs = require('fs');
        var cheerio = require('cheerio');
        var dataset = fs.readFileSync('../Week1/data/m04.txt');
        var $ = cheerio.load(dataset);
        var thesisTitles =  ''

 2. Finding the content we need, inside `td` and `style `
 
 

    $('td').each(function(i, elem) {
    
    if ($(elem).attr("style") == "border-bottom:1px solid #e3e3e3; width:260px") {
    
    thesisTitles += ($(elem).text()).trim() + '\n';
    
    }

 3. Remove the unneeded content after `b`, `div`, `span`

      $('b, div, span').remove();
     
        });
    
  
