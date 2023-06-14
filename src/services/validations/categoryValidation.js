const categoryService = require('../categoryService');

const categoriesExist = async (categoriesIds) => {
  const saveExistentCategories = await Promise.all(categoriesIds.map((eachCategoryId) => {
    const findCategory = categoryService.findByPk(eachCategoryId);
    return findCategory;
  }));
  return saveExistentCategories;
};

module.exports = { categoriesExist };