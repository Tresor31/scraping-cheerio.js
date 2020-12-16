const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const vgmUrl= 'https://www.lefigaro.fr/';

got(vgmUrl).then(response => {
    const $ = cheerio.load(response.body);
  
    $('a').each((i, link) => {
      const href = link.attribs.href;
      console.log(href);
    });
  }).catch(err => {
    console.log(err);
  }); console 
  
     