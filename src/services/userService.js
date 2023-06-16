const { User } = require('../models');

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
});

  return { type: 200, message: users };
};

const findByPk = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
});

  if (!user || user === null) {
    return { type: 404, message: 'User does not exist' };
  } 

  return { type: null, message: user };
}; 

const create = async (email, password, displayName, image) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user === null) {
    const newUser = await User.create({ email, password, displayName, image });
    return { type: null, message: newUser };
  } 

  return { type: 409, message: 'User already registered' };
};

const destroy = async (userId) => {
  const { type } = await findByPk(userId);
  if (type) return { type: 404, message: 'User does not exist' };
  
  await User.destroy({ where: { id: userId } });

  return { type: null };
};

module.exports = {
  findAll,
  findByPk,
    create,
    destroy,
};