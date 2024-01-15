const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "pages/about.html"));
});
app.get('/listings', (req, res) => {
    res.sendFile(path.join(__dirname, "pages/listings.html"));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "pages/contact.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on https://localhost:${port}`)
});