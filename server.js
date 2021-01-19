const cors = require('cors');
const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
// const { google } = require("googleapis");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use('/', router)


const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        api_key: process.env.ADMIN_EMAIL_API_KEY
    }
}));

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    //var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mailOptions = {
        from: `${name} <ditwanp@gmail.com>`, // Person trying to contact me from portfoli.
        to: 'price.ditwan@gmail.com',
        replyTo: email,
        subject: "From Portfolio Contact Form - " + name,
        text: message,
        html: `<b style="font-family: "Arial", sans-serif; 
        font-size: 16px; 
        font-weight: 400;">
            "${message}"
        </b>` 
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
            transporter.close();
        }
    })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))