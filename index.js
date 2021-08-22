let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if(req.url !== '/favicon.ico') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if(err) {
                throw err;
            }
            res.write(data);
            res.end();
        })
    }
}).listen('c1c1.netlify.app')