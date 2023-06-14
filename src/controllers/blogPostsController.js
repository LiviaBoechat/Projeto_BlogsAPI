const blogPostsService = require('../services/blogPostsService');

// const findAll = async (_req, res) => {
//     try {
//       const { message } = await blogPostsService.findAll();
       
//       return res.status(200).json(message);
//     } catch (error) {
//       res.status(500).json({ message: 'Algo deu errado' });
//     }
// };

const create = async (req, res) => {
    const userId = req.user.message.dataValues.id;
  try {
    const { title, content, categoryIds } = req.body;
    const { type, message } = await blogPostsService.create(userId, title, content, categoryIds);
   
    if (type) return res.status(type).json({ message }); 

    return res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
//   findAll,
  create,
};