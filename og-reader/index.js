const URLReader = require('./botURLReader')
const DownPage = require('./botDownPage')
const ScrapingOG = require('./botScrapingOG')
const Spider = require('./botSpider')

module.exports = {
    download: DownPage,
    scrap: ScrapingOG,
    spider: Spider,
    seeder: URLReader,
    run: async function (url) {
        const pages = []
        try {
            const result = await this.download(url)
            let spiderResult = this.spider(result)
            let count = 0
            for (let urlPage of spiderResult) {
                try {
                    console.log(`Lendo ${spiderResult.indexOf(urlPage) + 1} de ${spiderResult.length} ${urlPage}`)
                    let result = await this.download(urlPage)
                    let page = this.scrap(result)
                    if (page) {
                        pages.push(page)
                    }
                } catch (err) {
                    continue;
                }
                count++
                if (count >= 10) {
                    break;
                }
            }
            return pages
        } catch (err) {
            return null
        }
    }
}