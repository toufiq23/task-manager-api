//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5e8fb1cf1483e1656696d69d") }, (error, user) =>{
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);   
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e8fb3e1e03e2265f50d41be")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateMany({
    //     age: 28
    // }, {
    //     $set: {
    //         age: 18
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
        
    // })

    db.collection('tasks').deleteOne({
        name: "Toufiq"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})

