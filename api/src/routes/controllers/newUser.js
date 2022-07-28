const { User } = require("../../db");
const bcrypt = require("bcrypt");

const newUser = async (req, res) => {
  const { username, email, password, name, lastname, phone } = req.body;
  try {
    let hashPassword = bcrypt.hashSync(password, 10)
    const emailFound = await User.findOne({ where: { email }});
    if(emailFound) {
      return res.status(400).json({error: 'Email already exist'})
    }

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      name,
      lastname,
      phone,
    });

    res.status(200).json({ msg: `User ${newUser.dataValues.id} created succesfully`});
  } catch (err) {
    res.status(404).json({msg: 'The user is not created, try again'});
  }
};

module.exports = newUser;
