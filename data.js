const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const vgmUrl= 'https://www.lefigaro.fr/';

got(vgmUrl).then(response => {
  const $ = cheerio.load(response.body);
  console.log($('title')[0]);
}).catch(err => {
  console.log(err);
});
