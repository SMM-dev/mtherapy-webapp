//Business-specific values
const BUSINESS_NAME = "Faith Whaley Massage";

const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

//Home page
app.get('/', function (req, res) {
    res.render('index', {B_N: BUSINESS_NAME});
});

app.listen(process.env.PORT || 5000, function () {
    console.log("listening on port: " + process.env.PORT);
});