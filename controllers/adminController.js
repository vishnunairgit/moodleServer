const JOBS = require('../Models/jobModels');

const USER = require('../Models/userModels')


const GetUser = async (req, res) => {
    try {
      const userId = req.query.userId;
      
      const user = await USER.findOne({_id:userId});

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };



const addJobpost = async (req, res) => {
    try {
        const {
          CreatedBy,
            JobTitle,
            Experience,
            location,
            qualifications,
            employmentType,
            openings,
            date,
            Requirements,
            Jobdescription,
            status,
        } = req.body;


        console.log(req.body, '----jon basic information----');
        // console.log(req.files, '-----filedata');


        await JOBS({
          CreatedBy,
            status,
            JobTitle,
            Experience,
            location,
            qualifications,
            employmentType,
            openings,
            date,
            Requirements,
            Jobdescription,
        }).save();

        res.status(201).json({ message: 'job added successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};






module.exports = {GetUser, addJobpost };
