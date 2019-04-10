const MongoClient = require('mongodb').MongoClient;

const url = `mongodb://mongo:27017/${process.env.MONGO_COLLECTION}`;

MongoClient.connect(url,  { useNewUrlParser: true })
    .then((db) => {})
    .catch((err) => {
        console.log(err);
    });
