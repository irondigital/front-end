const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");


exports.register = async(req,res)=>{
    const {name,email,password} = req.body;

    const hash = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password: hash,
    })
    res.json(user)
};

exports.login = async (req,res)=>{
    const {email,password} = req.body;
    // console.log(email,password)
    const user = await User.findOne({email});  
    // console.log(user) 
    if(!user){
        return res.status(400).json({message:"user not found"});

    }
    const ismatch = await bcrypt.compare(password,user.password);
    if(!ismatch){
        return res.status(400).json({message:"invalid password"})
        // console.log(ismatch)
    } 
    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn : "10h"}
    );
    res.json({token,user})
};