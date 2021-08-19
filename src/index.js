const express = require('express')
require('./db/mongoose')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const useRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT

app.use((req,res,next) => {
    console.log(req.method ,req.path)
    next()
})
/*
const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {

        //if (!file.originalname.endsWith('.pdf')) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a word document'))
        }
        cb (undefined, true)

    
         
        
        //cb(undefined,false)
    }
})
*/
/*
app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})
*/


app.use(express.json())
app.use(useRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port '+port)
})


/*
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse',{ expiresIn: '1 seconds'})
    console.log(token)
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}
myFunction()
*/
/*

const main = async () => {
    //const task = await Task.findById('6104365e9ae4d64701ed6b63')
    //await task.populate('owner').execPopulate()
    //console.log(task.owner)

    const user = await User.findById('6104359df05b9b4612cfbfdb')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks) 
}
main()
*/

