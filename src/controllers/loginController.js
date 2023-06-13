const loginService = require('../services/loginService');
const jwtUtils = require('../utils/jwt');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { type, message } = await loginService.signIn(email, password);
   
    if (type) return res.status(type).json({ message });

    // cria novo token com id do user cadastrado no banco
    const token = jwtUtils.newToken(message.id); 

    return res.status(200).json({ token });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    signIn,
};