const readline = require('readline-sync');
const URLReader = function () {
    const expression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi;
    const regex = new RegExp(expression);

    const url = readline.question("Qual a URL da pagina a ser processada? ");
    return (url.match(regex)) ? url : null;
}

module.exports = URLReader


