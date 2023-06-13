const { User } = require('../models');

const create = async ( email, password, displayName, image ) => {
    console.log(password);
  const user = await User.findOne({ where: { email } });

  if(!user || user === null) {
    const newUser = await User.create({ email, password, displayName, image });
    return { type: null,  message: newUser }
  } 

  return { type: 409,  message: 'User already registered' };
}

module.exports = {
    create,
};