const { User } = require('../models');
const token = require('../utils/token');

const signIn = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  if(!user || user === null || user.password !== password) {
    return { type: 400,  message: 'Invalid fields' }
  } 

  return { type: null,  message: user };
}

module.exports = {
    signIn,
};