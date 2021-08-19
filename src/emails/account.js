const sgmail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgmail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) => {
    sgmail.send({
        to: email,
        from: 'k.dadouahadria@esi-sba.dz',
        subject: 'thanx',
        text:'welcome'
    })
}
module.exports = {
    sendWelcomeEmail
}