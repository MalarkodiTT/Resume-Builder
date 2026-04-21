const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// GET Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'register.html')));
app.get('/templates', (req, res) => res.sendFile(path.join(__dirname, 'templates.html')));
app.get('/details', (req, res) => res.sendFile(path.join(__dirname, 'details.html')));
app.get('/preview', (req, res) => res.sendFile(path.join(__dirname, 'preview.html')));

// POST Routes
app.post('/login', (req, res) => {
    res.redirect('/templates'); // Login panna templates-ku pogum
});

app.post('/register', (req, res) => {
    res.redirect('/'); // Signup panna thirumba Login page-ku pogum
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));