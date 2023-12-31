const blogPostsService = require('../services/blogPostsService');

const findAll = async (_req, res) => {
  try {
    const { message } = await blogPostsService.findAll();
     
    return res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await blogPostsService.findByPk(id);

    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const findByQuery = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await blogPostsService.findByQuery(q);

  if (type) return res.status(200).json([]);

  res.status(200).json(message);
};

const create = async (req, res) => {
  const { userId } = req.user.data;
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

const update = async (req, res) => {
  const { userId } = req.user.data;
  const { id } = req.params;
try {
  const { title, content } = req.body;
  const { type, message } = await blogPostsService.update(id, userId, title, content);

  if (type) return res.status(type).json({ message }); 

  return res.status(200).json(message);
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
};

const destroy = async (req, res) => {
  const { userId } = req.user.data;
  const { id } = req.params;
  
try {
  const { type, message } = await blogPostsService.destroy(id, userId);

  if (type) return res.status(type).json({ message }); 

  return res.status(204).json('');
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
};

module.exports = {
  findByPk,
  findAll,
  findByQuery,
  create,
  update,
  destroy,
};