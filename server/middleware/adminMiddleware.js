const admin = (req,res,next)=>{

console.log("USER DATA:",req.user);

if(!req.user){

return res.status(401).json({

message:"Access Denied"

});

}

if(req.user.role!=="admin"){

return res.status(403).json({

message:"Admin Access Only"

});

}

next();

};

module.exports=admin;