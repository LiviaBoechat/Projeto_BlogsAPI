
const { use } = require('frisby');
const userService = require('../services/userService');
const jwtUtils = require('../utils/jwt');

const create = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;
    const { type, message } = await userService.create( email, password, displayName, image );
   
    if (type) return res.status(type).json({ message }); 
    // cria token com id do novo usuario do banco 
    const token = jwtUtils.newToken(message.id);

    return res.status(201).json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    create,

};