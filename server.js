const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/Registration', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/Registration.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.post('/', (req, res) => {
	res.redirect("/");
});

app.post('/Registration', (req, res) => {
	res.redirect("/Registration");
});

app.post('/login', (req, res) => {
	res.redirect("/login");
});

app.post('/home', (req, res) => {
	res.redirect("/home");
});

app.listen(3000, () => {
	console.log('Our express server is up on port 3000');
});
