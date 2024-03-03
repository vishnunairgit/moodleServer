const USERS = require('../Models/userModels');

const GetUser = async (req, res) => {
  try {
    const email = req.query.email;

    const user = await USERS.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { GetUser };
