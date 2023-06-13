const jwt = require('jsonwebtoken');

// const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    
    const user = await userService.findByPk(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }
   
    req.user = user;
   
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};