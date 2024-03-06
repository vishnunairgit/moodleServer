const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        //    console.log(token);
        jwt.verify(token, process.env.JWT_PASSWORD, (err, decodedToken) => {
            console.log(decodedToken, '-----decodedToken-------user');
            if (decodedToken) {
                req.userId = decodedToken.userId
                next()
            } else {
                res.status(401).json({ message: 'unauthorized user ' })
            }
        })

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'unauthorized user ' })

    }
}

const adminAuth=(req,res,next)=>{
    try {
       const token =req.headers["authorization"].split(' ')[1]
        jwt.verify(token,process.env.JWT_PASSWORD,(err, decodedToken) => {
            console.log(decodedToken, '-----decodedToken-------admin');
            if (decodedToken && decodedToken.role === 1  ) {
                req.userId=decodedToken.userId
                next();
            }else{
                res.status(401).json({message:'unauthorized user '})
            }
        })

    } catch (error) {
        console.log(error);
        res.status(401).json({message:'unauthorized user '})

    }
}



module.exports = { userAuth , adminAuth }