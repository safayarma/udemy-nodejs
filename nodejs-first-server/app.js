const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	//process.exit();
	// CTRL + C in terminal will also quit running node.js server
});

server.listen(3000);