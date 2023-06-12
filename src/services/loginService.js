const { User } = require('../models');

const signIn = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if(!user || user === null || user.password !== password) {
    return { type: 400,  message: 'Invalid fields' }
  } 

  return { type: null,  message: user };
}

module.exports = {
    signIn,
};