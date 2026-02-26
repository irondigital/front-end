const http = require("http");

const app = http.createServer((req,res)=>{

if(req.url === "/" && req.method === "GET"){
 res.writeHead(200,{"content-type":"text/html"})
 res.end("<h1>home page</h1>")
 
}else if(req.url === "/about"){
     res.writeHead(200,{"content-type":"text/html"})
 res.end('<h1>hello this is a about page</h1>')
}else if(req.url==="/services"){
     res.writeHead(200,{"content-type":"text/html"})
 res.end('<h1>hello this is a seervices page</h1>')
}else if(req.url === "/contact"){
     res.writeHead(200,{"content-type":"text/html"})
 res.end('<h1>hello this is a contact page</h1>')
}else{
     res.writeHead(404,{"content-type":"text/html"})
 res.end('<h1>404 page not found</h1>')
}


})

const port = 3000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})