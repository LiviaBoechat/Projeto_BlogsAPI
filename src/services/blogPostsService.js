const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');
const { insert } = require('./postCategoriesService');
const { categoriesExist } = require('./validations/categoryValidation');

const findAll = async () => {
  const allPosts = await BlogPost.findAll({
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    include: [
        { model: User,
          as: 'user',
            attributes: { exclude: ['password'] },
        },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});
  return { type: 200, message: allPosts };
};

const findByPk = async (id) => {
  const post = await BlogPost.findByPk(id, {
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [
          { model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });

  if (!post) return { type: 404, message: 'Post does not exist' };
   
  return { type: null, message: post };
};

const create = async (userId, title, content, categoryIds) => {
    const categoryIdsArray = await categoriesExist(categoryIds);
 
    if (categoryIdsArray.some((eachObject) => eachObject.type === 404)) {
      return { type: 400, message: 'one or more "categoryIds" not found' };
    }

   const newPost = await BlogPost.create({ userId, title, content, categoryIds });
   // insert é a função do PostCategoryService que INSERE NA TABELA posts_categories os objetos de cada postId, CRIADO no BlogPostService, c/ os categoryId recebidos por REQ
   await insert(newPost.id, categoryIds);
   return { type: null, message: newPost };
};

const update = async (id, userId, title, content) => {
  const [updatedPost] = await BlogPost.update(
    { title, content },
    // id (post) e userId(vem do token) precisam ser iguais p/ certificar que é msm a pessoa
    { where: { userId, id } },
  );
  
  if (!updatedPost) return { type: 401, message: 'Unauthorized user' };
  const { message } = await findByPk(id);
  
  return { type: null, message };
};

module.exports = {
  findAll,
  findByPk,
  create,
  update,
};