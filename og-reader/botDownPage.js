const axios = require('axios');

const DownPage = function (url) {
    return axios.get(url, {
        responseType: 'text'
    })
}

module.exports = DownPage