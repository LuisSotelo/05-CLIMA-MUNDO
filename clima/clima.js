const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp= await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dd00a35517a722f473c289e8b55011da&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}