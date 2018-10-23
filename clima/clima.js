const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=1879649df51fc1efba47df174c7b5768`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}