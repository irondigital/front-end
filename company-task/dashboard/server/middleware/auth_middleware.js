const jwt = require("jsonwebtoken");


 const auth = (req,res,next)=>{
    const header = req.headers.authorization;

    if(!header){
        return res.status(401).json({message:"no token acess denied"})
    }
    const token = header.split(" ")[1];
    try{
       const decoded =  jwt.verify(
        token,
        process.env.JWT_SECRET
       )
       req.user = decoded;
       next();
    }catch(err){
        return res.status(400).json({message:"invalid token",err})
    }

}

module.exports = auth;