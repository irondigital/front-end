const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        const fsfile = path.join(__dirname,"home.html"
        );
        fs.readFile(fsfile,'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("server error")
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data)
            }
        })
    }

else if(req.url === "/about" && req.method === "GET"){
    const fsfile = path.join(__dirname, "about.html");

    fs.readFile (fsfile,"utf-8",(err,data)=>{
      if(err){
        res.writeHead(500);
        res.end("server error");
      }else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end(data);
      }
    })


}else if(req.url === "/services" && req.method === "GET"){
    const fsfile = path.join(__dirname,"services.html");
    fs.readFile(fsfile,'utf-8',(err,data)=>{
      if(err){
        res.writeHead(500);
        res.end("server error");
      }else{
        res.writeHead(200,{"content-type" : "text/html"});
        res.end(data);
      }
    })
}else if(req.url === "/contact" && req.method === "GET"){
    const fsfile =path.join(__dirname,"contact.html");
    fs.readFile(fsfile,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500);
            res.end("server error")
        }else{
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data);
        }
    })
}else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("data not found")
}




})
const port = 3000;
app.listen(port,()=>{
console.log(`Server running at http://localhost:3000`)
})