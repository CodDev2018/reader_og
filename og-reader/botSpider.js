const cheerio = require('cheerio')

const readLinks = function ($) {
    return Array.from($('a')).map(link => $(link).attr('href'));
}

const Spider = function (page) {
    const $ = cheerio.load(page.data);
    let ret = readLinks($)
    return ret
}

module.exports = Spider