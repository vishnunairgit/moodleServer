const JOBS = require('../Models/jobModels')

const getallJob = async (req, res) =>{
  try {
   const userId = req.userId;

    const allJob = await JOBS.find({CreatedBy:userId});
      res.status(200).json(allJob);
    
  } catch (error) {
    console.log(error);
    
  }
}

const getAllStudentJob = async (req, res) =>{
  try {
    const studentalljob = await JOBS.find()
    res.status(200).json(studentalljob)

  } catch (error) {
    
  }
}






module.exports = { getallJob, getAllStudentJob };
