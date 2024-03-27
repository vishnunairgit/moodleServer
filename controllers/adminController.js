// const jobs = require('../Models/jobModels');
const JOBS = require('../Models/jobModels');

const USER = require('../Models/userModels')


const GetUser = async (req, res) => {
  try {
    const companyId = req.query.userId;
    // console.log(companyId,'----------companyId-----------------');

    const user = await USER.findOne({ _id: companyId });

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
      // Jobdescription,
      status,
    } = req.body;


    console.log(req.body, '----jon basic information----');
    console.log(req.files, '-----filedata');


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
      // Jobdescription,
    }).save();

    res.status(201).json({ message: 'job added successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// const getSingleJobdata = async (req, res) => {
//   try {
//     const jobId = req.query.jobId
//     const job = await JOBS.findOne({ _id: jobId }).populate('CreatedBy', 'name email'); // Adjust 'name email' based on the User model's fields you want to include

//     // const job = await JOBS.findOne({ _id: jobId })
//     if (!job) {
//       return res.status(400).json({ message: "job not found" })
//     }
//     res.status(200).json(job)
//     console.log(job, "----------------job-------------------");

//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ message: 'Internal server error' });

//   }
// }



const getallJob = async (req, res) =>{
  try {
   const userId = req.userId;

    const allJob = await JOBS.find({CreatedBy:userId});
      res.status(200).json(allJob);
    
  } catch (error) {
    console.log(error);
    
  }
}

const getAllJob = async (req, res) =>{
  try {

    const studentalljob = await JOBS.find()
    res.status(200).json(studentalljob)

  } catch (error) {
    onsole.log(error);
    res.status(500).json({ message: "An error occurred while fetching the job data" });
    
  }
}

const getSingleJobdata = async (req, res) => {
  try {
    const jobId = req.query.jobId; // Or req.params.jobId if you're using route parameters

    // Populate the 'CreatedBy' field to get user details
    const job = await JOBS.findOne({ _id: jobId }).populate('CreatedBy', 'name email'); // Adjust 'name email' based on the User model's fields you want to include

    if (!job) {
      return res.status(400).json({ message: "Job not found" });
    }

    res.status(200).json(job);
    console.log(job, "----------------job-------------------");

  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const Editcompany = async (req, res) => {
  const { id } = req.query;
  try {
    const {
      CompanyName,
      registrationNumber,
      email,
      phonenumber,
      Address,
      website,
      LinkedIn,
      Industry,
      Incorporationdate,
      about,
    } = req.body;

    // Initialize the updates object with fields other than file uploads
    let updates = {
      CompanyName,
      registrationNumber,
      email,
      phonenumber,
      Address,
      website,
      LinkedIn,
      Industry,
      Incorporationdate,
      about,
      // Exclude or securely handle password updates
    };

    const { logo, image } = req.files;

    if (logo && logo.length) {
      updates.logoUpload = logo[0].filename;
    }
    if (image && image.length) {
      updates.imageUpload = image[0].filename;
    }

    const updatedCompany = await USER.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found or update failed' });
    }

    res.status(200).json(updatedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};




const editJob = async (req, res) => {

  try {
    const {
      _id,
      JobTitle,
      Experience,
      location,
      qualifications,
      employmentType,
      openings,
      status,
      date,
      Requirements,
    }= req.body;

    const updatedjob = await JOBS.findByIdAndUpdate(_id, {
      JobTitle,
      Experience,
      location,
      qualifications,
      employmentType,
      openings,
      status,
      date,
      Requirements,
    }, {new:true})
     // Check the result and respond accordingly
     if (!updatedjob) {
      return res.status(404).json({ message: 'updatedjob not found or update failed' });
    }

    res.status(200).json(updatedjob);

  } catch (error) {
    console.error(error); // Server-side debugging
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }

}

const Deletejob = async(req, res) =>{

  try {
    const {jobId} = req.query;
    const Deletejob = await JOBS.findByIdAndDelete(jobId)

    if (!Deletejob) {
      return res.status(404).json({ error: 'job not found' });
    }
    res.status(200).json({ message: 'job deleted successfully' });

    
  } catch (error) {
    onsole.error('Error deleting job:', error);
        res.status(500).json({ error: 'Internal server error' });
    
  }

}

module.exports = { GetUser, addJobpost,getallJob, getSingleJobdata, Editcompany, editJob, Deletejob };
