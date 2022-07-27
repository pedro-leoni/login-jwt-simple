const { User } = require("../../db");
const bcrypt = require("bcrypt");

const newUser = async (req, res) => {
  const { username, email, password, name, lastname, phone } = req.body;
  try {
    let hashPassword = bcrypt.hashSync(password, 10)
    const emailFound = await User.findOne({ where: { email }});
    if(emailFound) {
      return res.status(400).json({error: 'ya existe una cuenta con este correo'})
    }

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      name,
      lastname,
      phone,
    });

    res.status(200).json({ msg: `Usuario ${newUser.dataValues.id} creado exitosamente`});
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

module.exports = newUser;
