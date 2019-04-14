const URLReader = require('./bots/botURLReader')
const DownPage = require('./bots/botDownPage')
const ScrapingOG = require('./bots/botScrapingOG')
const Spider = require('./bots/botSpider')
const PageRepository = require('./model/pageRepository')


const main = function () {
    const url = URLReader();
    if (!url) {
        console.log('A url informada não é válida!');
        return;
    }
    console.log('Estamos processando a extração dos dados da página...');
    DownPage(url, Spider, (err, urls) => {
        urls.forEach(url => {
            DownPage(url, ScrapingOG, (err, page) => PageRepository.save(page))
        })

        return true;
    })
}

main()