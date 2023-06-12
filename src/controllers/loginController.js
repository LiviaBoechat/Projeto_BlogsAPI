
const { use } = require('frisby');
const loginService = require('../services/loginService');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { type, message } = await loginService.signIn(email, password);
   
    if (type)
      return res.status(type).json({ message });

    return res.status(200).json(message);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    signIn,
};