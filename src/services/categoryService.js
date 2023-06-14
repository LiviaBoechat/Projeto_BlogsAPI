const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();

  return { type: 200, message: categories };
};

const findByPk = async (id) => {
  const category = await Category.findByPk(id);

  if (!category || category === null) {
    return { type: 404, message: 'User does not exist' };
  } 

  return { type: null, message: category };
}; 

const create = async (name) => {
   const newCategory = await Category.create({ name });
  return { type: null, message: newCategory };
};

module.exports = {
  findAll,
    findByPk,
    create,
};