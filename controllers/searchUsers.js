const Sequelize = require('sequelize');
const { User } = require('../models');

const searchUser = async (req, res) => {
  try {
    const { email, name } = req.query;

    if (!email && !name) {
      return res
        .status(400)
        .json({ error: 'Email or name parameter required' });
    }

    const users = await User.findAll({
      where: {
        [Sequelize.Op.or]: [
          { email: email || null },
          { name: first_name || last_name || null },
        ],
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ error: 'No matching users found' });
    }

    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { searchUser };
