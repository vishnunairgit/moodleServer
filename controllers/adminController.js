const jobs = require('../Models/jobModels');
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


const getSingleJobdata = async (req, res) => {
  try {
    const jobId = req.query.jobId

    const job = await JOBS.findOne({ _id: jobId })
    if (!job) {
      return res.status(400).json({ message: "job not found" })
    }
    res.status(200).json(job)
    console.log(job, "----------------job-------------------");

  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });

  }
}

const GetEditcompany = async (req, res) => {

  try {
    const { id } = req.params;

    // Extracting request data
    const {
      _id,
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
      password, // Ensure hashing if updated
      confirmPassword, // Ensure client-side match before submission
    } = req.body;


    const { logoUpload, imageUpload } = req.files;
    const logo = logoUpload ? logoUpload[0].filename : '';
    const image = imageUpload ? imageUpload[0].filename : '';
    
    



    const updatedCompany = await USER.findByIdAndUpdate( _id, {
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
      logo,
      image
      // Exclude or securely handle password updates
    }, { new: true });

    // Check the result and respond accordingly
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found or update failed' });
    }

    res.status(200).json(updatedCompany);

  } catch (error) {
    console.error(error); // Server-side debugging
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

    JOBS.findByIdAndUpdate(_id, {
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
    .then((updatedjob)=>{
      res.status(200).json({ updatedjob });
    })

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
    
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

module.exports = { GetUser, addJobpost, getSingleJobdata, GetEditcompany, editJob, Deletejob };
