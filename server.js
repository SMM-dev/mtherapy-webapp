//Business-specific values
const BUSINESS_NAME = "Faith Whaley Massage";
const PHONE_NUMBER = "123.456.7983";
const EMAIL_ADDRESS = "faithwhaleymsg@test.com";
const FACEBOOK = "http://www.facebook.com/test";
const DEFAULT_PORT = 5000;

const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

//Home page
app.get('/', function (req, res) {
    res.render('index', {B_N: BUSINESS_NAME, P_N: PHONE_NUMBER, E_A: EMAIL_ADDRESS, FB: FACEBOOK });
});

app.listen(process.env.PORT || DEFAULT_PORT, function () {
        console.log("listening on port: " + DEFAULT_PORT);
});