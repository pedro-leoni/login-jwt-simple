const { User } = require("../../db");

const getUserInfo = async (req,res) => {
    const { id } = req.params
    try {
        const findUser = await User.findOne({ where: { id }})
        const user = {
            username: findUser.username,
            email: findUser.email,
            name: findUser.name,
            lastname: findUser.lastname,
            phone: findUser.phone,
            createdAt: findUser.createdAt
        }
        res.status(200).json({user})
    } catch(err) {
        res.status(404).json({msg: 'User not found'})
    }
    
}

module.exports = getUserInfo