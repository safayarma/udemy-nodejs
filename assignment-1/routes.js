const fs = require('fs')

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
	    res.write('<html>');
    	res.write('<head><title>Enter Username</title><head>');
    	res.write(
      	'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    	);
    	res.write('</html>');
    	return res.end();
	}
  	if (url === '/message' && method === 'POST') {
    	const body = [];
    	req.on('data', chunk => {
      	console.log(chunk);
      	body.push(chunk);
    	});
    	return req.on('end', () => {
      	const parsedBody = Buffer.concat(body).toString();
      	const message = parsedBody.split('=')[1];
      	console.log(message);
    	});
  	}
	if (url === '/users') {
		res.write('<html>');
		res.write('<head><title>Users</title><head>');
		res.write('<body>User 1</body><br>')
		res.write('<body>User 2</body>')
		res.write('</html>');
	}
}




exports.handler = requestHandler;