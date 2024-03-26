const JOBS = require('../Models/jobModels')

// const getallJob = async (req, res) =>{
//   try {
//    const userId = req.userId;

//     const allJob = await JOBS.find({CreatedBy:userId});
//       res.status(200).json(allJob);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// const getAllJob = async (req, res) =>{
//   try {

//     const studentalljob = await JOBS.find()
//     res.status(200).json(studentalljob)

//   } catch (error) {
//     onsole.log(error);
//     res.status(500).json({ message: "An error occurred while fetching the job data" });
    
//   }
// }

const getAllJob = async (req, res) => {
  try {
    const jobs = await JOBS.find().populate('CreatedBy', 'CompanyName Address logoUpload ');

    // const jobs = await JOBS.find().populate('CreatedBy', 'CompanyName email phonenumber Address website LinkedIn Industry about logoUpload imageUpload');
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error); // Corrected typo here
    res.status(500).json({ message: "An error occurred while fetching the job data" });
  }
};


const getSingleJob = async (req, res)=>{

  try {
    const { jobId } = req.query;

    const singleJob =await JOBS.findById(jobId).populate('CreatedBy', 'CompanyName Address logoUpload ');

    if (!singleJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(singleJob);


  } catch (error) {
    onsole.log(error);
    res.status(500).json({ message: "An error occurred while fetching the job data" });
  }

  
}






module.exports = {  getAllJob, getSingleJob };
