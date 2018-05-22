//Business-specific values
const BUSINESS_NAME = "Faith Whaley Massage";
const PHONE_NUMBER = "123.456.7983"; // Phone# also referenced in content.js
const EMAIL_ADDRESS = "faithwhaleymsg@test.com";
const FACEBOOK = "https://www.facebook.com/faithfischerwhaley/";
const STATIC_MAP = "https://maps.googleapis.com/maps/api/staticmap?center=677+Woodland+Square+Lp+SE+Lacey,+WA+98503&zoom=18&scale=1&size=500x300&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C677+Woodland+Square+Lp+SE+Lacey,+WA+98503";
const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=677%20Woodland%20Square%20Lp%20SE%20Lacey%2C%20WA%2098503";
const DEFAULT_PORT = 5000;

const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

//Home page
app.get('/', function (req, res) {
    res.render('index', {B_N: BUSINESS_NAME, P_N: PHONE_NUMBER, E_A: EMAIL_ADDRESS, FB: FACEBOOK, DIR_L: DIRECTIONS, S_MAP: STATIC_MAP });
});

app.listen(process.env.PORT || DEFAULT_PORT, function () {
        console.log("listening on port: " + DEFAULT_PORT);
});