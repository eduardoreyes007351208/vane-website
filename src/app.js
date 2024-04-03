const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const LOCATIONS = require('./lists/locations')
const LISTINGINFO = require('./lists/listinginfo')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// configure mustache
app.set('views', `${__dirname}/pages`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.get('/', (req, res) => {
    res.render('index', {locations: LOCATIONS});
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "pages/about.html"));
});
app.get('/listings', (req, res) => {
    res.render('listings', {listinginfo: LISTINGINFO});
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact/message', (req, res) => {
    
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on https://localhost:${port}`)
});