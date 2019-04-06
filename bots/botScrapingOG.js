const cheerio = require('cheerio')

const readMetaTag = function ($, meta) {
    return $(`meta[property="og:${meta}"]`).attr('content');
}

const ScrapingOG = function (err, page) {
    if (err) {
        console.error(err);
    }
    const $ = cheerio.load(page.data);
    var title = readMetaTag($, 'title');
    var type = readMetaTag($, 'type');
    var image = readMetaTag($, 'image');
    var url = readMetaTag($, 'url');
    console.log(title, type, image, url);
}

module.exports = ScrapingOG