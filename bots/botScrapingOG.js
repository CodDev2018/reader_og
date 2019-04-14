const cheerio = require('cheerio')
const Page = require('../model/page')

const readMetaTag = function ($, meta) {
    return $(`meta[property="og:${meta}"]`).attr('content');
}

const ScrapingOG = function (err, page) {
    if (err || !page) {
        return false;
    }
    const $ = cheerio.load(page.data);
    const pageOG = Object.create(Page);
    pageOG.title = readMetaTag($, 'title');
    pageOG.type = readMetaTag($, 'type');
    pageOG.image = readMetaTag($, 'image');
    pageOG.url = readMetaTag($, 'url');
    if (!pageOG.title && !pageOG.type && !pageOG.image && !pageOG.url) {
        return false;
    }
    return pageOG;
}

module.exports = ScrapingOG