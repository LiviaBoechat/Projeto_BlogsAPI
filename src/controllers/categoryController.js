const categoryService = require('../services/categoryService');

const findAll = async (_req, res) => {
    try {
      const { message } = await categoryService.findAll();
       
      return res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ message: 'Algo deu errado' });
    }
};

// const findByPk = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { type, message } = await categoryService.findByPk(id);

//     if (type) return res.status(404).json({ message: 'User does not exist' });

//     return res.status(200).json(message);
//   } catch (error) {
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// };

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const { type, message } = await categoryService.create(name);
   
    if (type) return res.status(type).json({ message }); 

    return res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAll,
//   findByPk,
  create,

};