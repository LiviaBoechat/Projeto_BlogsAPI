const { BlogPost } = require('../models');
const { insert } = require('./postCategoriesService');
const { categoriesExist } = require('./validations/categoryValidation');

const create = async (userId, title, content, categoryIds) => {
    console.log(userId);
    const categoryIdsArray = await categoriesExist(categoryIds);
 
    if (categoryIdsArray.some((eachObject) => eachObject.type === 404)) {
      return { type: 400, message: 'one or more "categoryIds" not found' };
    }

   const newPost = await BlogPost.create({ userId, title, content, categoryIds });
   await insert(newPost.id, categoryIds);
   return { type: null, message: newPost };
};

module.exports = {
    create,
};