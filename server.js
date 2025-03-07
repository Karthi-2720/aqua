
// Importing express module
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',
	(req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'index1.html'));
	});

app.get('/login',
	(req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'login.html'));
	});
app.get('/Registration',
	(req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'Registration.html'));
	});
app.get('/index',
	(req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'index.html'));
	});
app.post('/', (req, res) => {
	res.redirect("/index1")
});
app.post('/login', (req, res) => {
	res.redirect("/login")
});
app.post('/register', (req, res) => {
	res.redirect("/Registration")
});
app.post('/index', (req, res) => {
	res.redirect("/index")
});

app.listen(3000,
	() => {
		console.log(
			'Our express server is up on port 3000'
		);
	});
