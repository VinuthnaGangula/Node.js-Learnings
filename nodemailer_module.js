var nodemailer = require('nodemailer');
var aws = require('@aws-sdk/client-ses');
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

// Need to configure AWS with access key & secret.

let ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "us-east-1",
    defaultProvider,
})

async function mailer() {

    let Transporter = nodemailer.createTransport({
        SES: { ses, aws },
    });
    
    var mailOptions = {
        from: 'gvvlvinuthna2000@gmail.com',
        to: 'gvvlvinuthna2000@gmail.com, vinuthna@kbxdigital.com',
        subject: 'Sending Email via nodemailer',
        text: 'Hi, this is a test mail.',
        // html: '<h1>Welcome</h1><p>That was easy!</p>'
    };
    
    Transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log('Error sending email: ', err);
        } else {
            console.log('Mail Sent : ', info.response);
        }
    })
}

mailer();
