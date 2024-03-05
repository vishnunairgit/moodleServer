const JOBS = require('../Models/jobModels')


// const GetUser = async (req, res) => {
//   try {
//     const userId = req.query._id;

//     console.log();

//     const user = await USERS.findOne({ userId });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// module.exports = { GetUser };




const getallJob = async (req, res) =>{
  try {
   const userId = req.userId;

    const allJob = await JOBS.find({cretedBy:userId});
      res.status(200).json(allJob);
    
  } catch (error) {
    console.log(error);
    
  }
}

module.exports = { getallJob };
