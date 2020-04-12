const { LineClient } = require('messaging-api-line');
const { Line } = require('messaging-api-line');

var accessToken = 'kx6/JuvkAj2RZuJn91vyxYZ4IcIaLo3BMntQoQF/leoQG5PBt1sPsBO4T75iZ2hBbfpYb7rVf6+IpIaFuOBy8FDL6PEM7bABfm2I0CdzeHlwb8dRLKk+vBP0ufABXL4HiB640f3fOqnUDU+DPvNuRgdB04t89/1O/w1cDnyilFU='
var channelSecret = '8d4205bbe36e8cc623e5dc755be7d1f9'
var userId = 'Ua16bdb1d9eb0528297399f6bdc492f8b'

const client = LineClient.connect(accessToken, channelSecret);
client.pushText(userId, 'Hello SCG').then(() => {
    setTimeout(function () {
        client.pushText(userId, 'Hi : Guy')
    }, 1000);
}).then(function (value) {
    client.pushText(userId, 'Hi : People')
    
}).catch(function (err) {
    console.log(err)
    client.pushText(userId, 'Hi : Sorry')
});






