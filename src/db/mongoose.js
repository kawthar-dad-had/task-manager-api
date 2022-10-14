const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

//defining  a model

//creating an instance 
/* 
const me = new User({
    name: 'ahmed',
    email:'ahmed@gmail.com',
    password: 'dadouahadria'

})
//save that instance to the database
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('error',error)
})
*/
/*
const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
const task = new Tasks({
    description: 'learn node js',
    completed: true
})
task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})
*/