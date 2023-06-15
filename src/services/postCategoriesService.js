const { PostCategory } = require('../models');

const insert = async (postId, categoryIds) => {
    // objectsArray será um array de objetos que associa o postId, CRIADO no BlogPostService, a cada categoryId recebido por REQ
    const objectsArray = categoryIds.map((eachCategory) => ({ 
        postId,
        categoryId: eachCategory,
    }));

   const newCategory = await PostCategory.bulkCreate(objectsArray);
   return { type: null, message: newCategory };
};

module.exports = {
    insert,
};
