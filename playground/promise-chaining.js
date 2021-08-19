require('../src/db/mongoose.js')
const User = require('../src/models/user.js')

//60ed7bb17212dc5c22f702d6
/*
User.findByIdAndUpdate('60ed7bb17212dc5c22f702d6', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, { age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60ed7bb17212dc5c22f702d6', 4).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})