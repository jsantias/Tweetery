var emotionModel = require('./storeEmotion');

async function getEmotions(Datekey){
    return new Promise((resolve, reject) => {
        // let emotions = [];
        emotionModel.find({date: Datekey}).then(response => {
            if (response.length == 0){
                resolve(false);
            }
            resolve(response);
        }).catch(err => {
            resolve(false);
        })
    })
}

module.exports = { getEmotions };