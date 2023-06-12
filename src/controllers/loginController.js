
const { use } = require('frisby');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { type, message } = await loginService.signIn(email, password);
   
    if (type) return res.status(type).json({ message });

    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
    
    const token = jwt.sign({ data: { userId: message.id } }, secret, jwtConfig);  
    
    
    return res.status(200).json({ token });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
    signIn,
};