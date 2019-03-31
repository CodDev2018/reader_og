const readline = require('readline-sync');
const axios = require('axios');

const expression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi;
const regex = new RegExp(expression);

const url = readline.question("Qual a URL da página a ser processada?");

if (url.match(regex)) {
    console.log('Estamos processando a extração dos dados da página...');
    axios.get(url, {responseType: 'text'})
        .then(function (result) {
            console.log(result)
        })
} else {
    console.log('A url informada não é válida!')
}