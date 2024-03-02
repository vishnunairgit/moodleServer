const USERS = require('../Models/userModels');

// console.log(USER,'----------------USER---------');


const GetUser = async (req, res) => {
  try {
    console.log(req.body,'---req.body---');  // Log the request body

    const sinleUserResult = await USERS.findOne({ Id: req.body.email });
    console.log(sinleUserResult,'----------sinleUserResult-------------');
    res.status(200).json(sinleUserResult);
      //  console.log(sinlePetResult,'-----------sinlePetResult---------');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { GetUser };
