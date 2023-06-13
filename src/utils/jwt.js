const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const newToken = (id) => jwt.sign({ data: { userId: id } }, secret, jwtConfig);

module.exports = { newToken };