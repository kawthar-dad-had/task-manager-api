const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId= new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "kaw",
    email: "kaw@gmail.com",
    password: "kaw2000",
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

beforeEach( async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user' , async () => {
    const response = await request(app).post('/users').send({
        name: 'Kawthar',
        email: 'k.dadouahadria@esi-sba.dz',
        password: 'dadouahadria'
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull() 

    expect(response.body.user.name).toBe("Kawthar")
    expect(response.body).toMatchObject({
         user: {
            name: "Kawthar",
            email: "k.dadouahadria@esi-sba.dz"
         }
    })

    expect(user.password).not.toBe("kawtharhad")

})

test('should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'kaw2000'
    }).expect(200)
})

test('Should get profile for user', async () => {
    await request(app)
            .get('/users/me')
            .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
            .send()
            .expect(200)
})

test('Should not get profile for unauthenticated user' , async () => {
    await request(app)
            .get('/users/me')
            .send()
            .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
            .delete('/users/me')
            .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
            .send()
            .expect(200)
})

test('Should not  delete account for user', async () => {
    await request(app)
            .delete('/users/me')
            .send()
            .expect(401)
})

test("Should upload avatar image", async () =>  {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
        const user = await User.findById(userOneId)
        expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    await request(app)
            .patch('/users/me')
            .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
            .send({
                name: "Imene"
            })
            .expect(200)
            const user = await User.findById(userOneId)
            expect(user.name).toEqual("Imene")
})

test('Should update invalid user fields', async () => {
    await request(app)
            .patch('/users/me')
            .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
            .send({
                localisation: "algeria"
            })
            .expect(400)
})
    
    