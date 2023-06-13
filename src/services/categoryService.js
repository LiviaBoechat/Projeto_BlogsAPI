const { Category } = require('../models');

// const findAll = async () => {
//   const users = await User.findAll({
//     attributes: { exclude: ['password'] },
// });

//   return { type: 200, message: users };
// };

// const findByPk = async (id) => {
//   const user = await User.findByPk(id, {
//     attributes: { exclude: ['password'] },
// });

//   if (!user || user === null) {
//     return { type: 404, message: 'User does not exist' };
//   } 

//   return { type: null, message: user };
// }; 

const create = async (name) => {
   const newCategory = await Category.create({ name });
  return { type: null, message: newCategory };
};

module.exports = {
//   findAll,
//   findByPk,
    create,
};