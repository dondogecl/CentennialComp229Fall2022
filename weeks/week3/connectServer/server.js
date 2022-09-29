const connect = require('connect');
const app = connect();

// middleware functions
function helloWorld(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function goodByeWorld(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('GoodBye World');
}

// use middleware functions
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodByeWorld);
app.listen(3000);
console.log("Server running at http://localhost:3000/");