const URLReader = require('./bots/botURLReader')
const DownPage = require('./bots/botDownPage')
const ScrapingOG = require('./bots/botScrapingOG')


const main = function () {
    const url = URLReader();
    if (!url) {
        console.log('A url informada não é válida!');
        return;
    }
    console.log('Estamos processando a extração dos dados da página...');
    DownPage(url, ScrapingOG)
}

main()