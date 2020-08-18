const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to : email,
        from : 'sarthakag.sa@gmail.com',
        subject : 'Welcome',
        text : 'Thanks for joining in, ' +name,
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to : email,
        from : 'sarthakag.sa@gmail.com',
        subject : 'Bye',
        text : 'Sorry we couldnt serve you better, ' +name,
    })
}

module.exports  = {
    sendWelcomeEmail,
    sendCancelationEmail
}

