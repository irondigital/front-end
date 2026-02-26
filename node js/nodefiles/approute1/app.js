const http = require("http");
const fs = require("fs");
const path = require("path");


const app = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        const fspath = path.join(__dirname,"home.html");

        fs.readFile(fspath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("server error")
            }else{
                res.writeHead(200,{"content-type": "text/html"});
                res.end(data)
            }
        })
    }else if(req.url === "/contact" && req.method === "GET"){
        const fspath = path.join(__dirname,"contact.html");
        fs.readFile(fspath,"utf-8",(err,data)=>{
              if(err){
                res.writeHead(500);
                res.end("server error")
            }else{
                res.writeHead(200,{"content-type": "text/html"});
                res.end(data)
            }
        })
    }
});

const port = 3000;

app.listen(port,()=>{
console.log(`port start at ${port}`)
})