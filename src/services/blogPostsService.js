const { BlogPost } = require('../models');
const { categoriesExist } = require('./validations/categoryValidation');

// const findAll = async () => {
//   const posts = await BlogPost.findAll();

//   return { type: 200, message: posts };
// };

// const findByPk = async (id) => {
//   const post = await BlogPost.findByPk(id);

//   if (!post || post === null) {
//     return { type: 404, message: 'Post does not exist' };
//   } 

//   return { type: null, message: user };
// }; 

const create = async (userId, title, content, categoryIds) => {
    console.log(userId);
    const categoryIdsArray = await categoriesExist(categoryIds);
 
    if (categoryIdsArray.some((eachObject) => eachObject.type === 404)) {
      return { type: 400, message: 'one or more "categoryIds" not found' };
    }

   const newPost = await BlogPost.create({ userId, title, content, categoryIds });
   return { type: null, message: newPost };
};

module.exports = {
//   findAll,
//   findByPk,
    create,
};