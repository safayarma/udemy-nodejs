const express = require('express');

const app = express();

// app.use((req, res, next) => {
// 	console.log('Server Start');
// 	next();
// });

// app.use((req, res, next) => {
// 	res.send('<h1>Assignment 2 Page</h1>');
// });

app.use('/users', (req, res, next) => {
	res.send('<h2>User 1</h2>');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Home Page</h1>');
});

app.listen(3000);