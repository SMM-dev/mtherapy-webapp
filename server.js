//Business-specific values
const BUSINESS_NAME = "Faith Whaley Massage";
const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=677%20Woodland%20Square%20Lp%20SE%20Lacey%2C%20WA%2098503";
const DEFAULT_PORT = 5000;

const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

//Home page
app.get('/', function (req, res) {
    res.render('index', {B_N: BUSINESS_NAME, DIR_L: DIRECTIONS });
});

app.listen(process.env.PORT || DEFAULT_PORT, function () {
        console.log("listening on port: " + DEFAULT_PORT);
});