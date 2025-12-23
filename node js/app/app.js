const http = require('http');

const app = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World');
})
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})

// In Node.js, HTTP refers to the built-in http module that lets you create a web server and handle HTTP requests and responses.
// create server
// listen request and response from client
// send responses in json,html,plain text
// build api and routing
 