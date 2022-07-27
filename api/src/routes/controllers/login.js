const { User } = require("../../db");
const bcrypt = require("bcrypt");

const login = async ( req, res ) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    const checkPassword = user === null 
    ? false
    : await bcrypt.compare(password, user.password)
    if(!checkPassword){
        res.status(400).json({msg: 'Invalid password or username'})
    }
    res.status(200).json({ username: user.username })
}

module.exports = login;