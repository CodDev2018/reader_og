const OGReader = require('./og-reader')
const PageRepository = require('./model/pageRepository')

const main = async () => {
    const url = OGReader.seeder();
    if (!url) {
        console.log('A url informada não é válida!');
        return;
    }
    console.log('Estamos processando a extração dos dados da página...');
    try {
        const pages = await OGReader.run(url)
        PageRepository.saveAll(pages)
        console.log(PageRepository.pageList)
    } catch (err) {
        //
    }
}

main()