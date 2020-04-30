const express = require('express');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

// Init express
const app = express();

const PORT = process.env.PORT  || 8080;

/* ------- MIDDLEWARE ------ */
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// CORS issue
app.use(function (req, res, next) {

    // Website you wish to allow to connect - website runs on live server 
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/* ------- EMAIL HANDLER ------ */

// Auth to mailgun - get these in mailgun on your own acc
const auth = {
    auth: {
        api_key: '', // private api key
        domain: ''
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'youremailhere@gmail.com', // always the same: clients email
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            cb(err, null)
        }else{
            cb(null, data)
        }
    })

}


/* ------- ROUTES ------ */

app.post('/email', (req, res) => {
    //check user is sending the right format;
    const {name, email, message} = req.body;

    sendMail(email, name, message, function(err, data){
        if(err){
            res.status(500).json({message: 'Internal Error'});
        }else{
            res.json({message: 'Message Sent !'});
        }
    })
})

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

module.exports.handler = serverless(app);