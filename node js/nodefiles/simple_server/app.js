const http = require("http");
const { types } = require("util");

const app = http.createServer((req,res)=>{
  req.writeHead(200,{"content-type": "text/plain"});
  res.end("hello from my sidde")
});

const port = 3000;

app.listen(()=>{
  console.log(`port start athttp://localhost:${port}`)
})