const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'practice-db';
const client = new MongoClient(url);

let dbConnect = async()=>{
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('products');
};

module.exports = dbConnect;