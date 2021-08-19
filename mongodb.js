// crud operations
/*
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID
*/
// replace it by 
const {MongoClient,ObjectId} = require('mongodb')

/*
const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)
*/

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }   

    const db = client.db(databaseName)


    /*
    db.collection('users').insertOne({
        name: 'mohammed',
        age: 20
    }, (error,result) => {
        if (error) {
            return console.log('unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'assia',
            age: 26
        },
        {
            name: 'imane',
            age:23 
        }
    ], (error,result) => {
        if (error) {
            console.log('unable to insert documents!')
        }

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'clean the house',
            completed: true
        },
        {
            description: 'renew inspection',
            completed: false
        },
        {
            description: 'pot plants',
            completed: false
        }
    ], (error,result) => {
        if (error) {
            console.log('unable to insert tasks')
        }

        console.log(result.ops)
    })

        
    db.collection('users').find({age: 23}).toArray((error,users) => {
        console.log(users)
    })
    
    db.collection('users').findOne({ name: 'imane'}, (error,user) => {
        if(error) {
            return console.log('unable to fetch')
        }

        console.log(user)
    })
    
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId("60ec42a4fa8bc23b5bea4d77")
    }, {
        $set: {
            name: 'kawthardh'
        }
    })
    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completes: false
    },{
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    }) 
    
   db.collection('users').deleteOne({
       name: 'kawthardh'
   }).then((result) => {
       console.log(result)
   }).catch((error) => {
       console.log(error)
   })
   */
})

