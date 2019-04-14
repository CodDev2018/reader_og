const axios = require('axios');

const DownPage = function (url, ...callbacks) {
    axios.get(url, {
            responseType: 'text'
        })
        .then((result) => {
            for (let callback of callbacks) {
                result = callback(null, result)
                if (!result) {
                    break;
                }
            }
        })
        .catch((err) => callbacks[0](err, null))
}

module.exports = DownPage