const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: "kaw",
    email: "kaw@gmail.com",
    password: "kaw2000"
}

beforeEach( async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user' , async () => {
    await request(app).post('/users').send({
        name: 'Kawthar',
        email: 'k.dadouahadria@esi-sba.dz',
        password: 'dadouahadria'
    }).expect(201)
})

test('should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'kaw2000'
    }).expect(200)
})