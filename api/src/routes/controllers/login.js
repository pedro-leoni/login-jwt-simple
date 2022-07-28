const { User } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { KEYWORD_JWT } = process.env;

const login = async ( req, res ) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ where: { email }});
        const checkPassword = user === null 
        ? false
        : await bcrypt.compare(password, user.password)
        if(!(user && checkPassword)){
            return res.status(400).json({msg: 'Invalid password or username'})
        }
        const userForToken = {
            id: user.id,
        }
        const token = jwt.sign(userForToken, KEYWORD_JWT)
        return res.status(200).json({ token })
    } catch(err){
        console.log(err)
        return res.status(401).send({msg: 'Error'})
    }
}

module.exports = login;