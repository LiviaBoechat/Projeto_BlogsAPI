const userService = require('../services/userService');
const jwtUtils = require('../utils/jwt');

const findAll = async (_req, res) => {
    try {
      const { type, message } = await userService.findAll();
       
      return res.status(type).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  };

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await userService.findByPk(id);

    if (type) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;
    const { type, message } = await userService.create(email, password, displayName, image);
   
    if (type) return res.status(type).json({ message }); 

    // cria token com id do novo usuario gerado pelo banco 
    const token = jwtUtils.newToken(message.id);

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json(error);
  }
};

const destroy = async (req, res) => {
  const { userId } = req.user.data;
  
try {
  const { type, message } = await userService.destroy(userId);

  if (type) return res.status(type).json({ message }); 

  return res.status(204).json('');
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
};

module.exports = {
  findAll,
  findByPk,
  create,
  destroy,
};