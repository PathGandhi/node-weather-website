const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/783cf78af4e7538e4b6321eebecb02bf/' + latitude + ',' + longitude;
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const cTemp = (body.currently.temperature - 32) * 5 / 9;
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + cTemp + ' degrees celsius out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast