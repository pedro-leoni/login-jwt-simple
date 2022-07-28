const { User } = require('../db');
require('dotenv').config();
const jwt = require("jsonwebtoken")
const { KEYWORD_JWT } = process.env;

const verifyToken = async ( req, res, next ) => {
    try{
        const headerToken = req.header('Authorization');
        if(!headerToken) {
            return res.status(401).json({ msg: "Token not found"})
        }
        const validateHeader = headerToken.split(" ");
        if( validateHeader[0] === "Bearer"){
            const token = validateHeader[1]
            try{
                const decoded = jwt.verify(token, KEYWORD_JWT);
                if(decoded){
                    const user = await User.findOne({ where: { id: decoded.id}})
                    req.id = user.dataValues.id;
                    next()
                } else {
                    return res.status(401).json({ msg: "Token not found"})
                }
            } catch(err){
                console.log(err)
                return res.sendStatus(404)
            }
        } else {
            res.status(401).json({msg: "Invalid Header"})
        }
    } catch(err){
        console.log(err)
        res.status(404).json({msg: 'Server error'})
    }
}

module.exports = verifyToken;