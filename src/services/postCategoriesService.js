const { PostCategory } = require('../models');

const insert = async (postId, categoryIds) => {
    const map = categoryIds.map((eachCategory) => ({ 
        postId,
        categoryId: eachCategory,
    }));
    console.log(map);
   const newCategory = await PostCategory.bulkCreate(map);
  return { type: null, message: newCategory };
};

module.exports = {
    insert,
};