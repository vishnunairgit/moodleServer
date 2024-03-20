const JOBS = require('../Models/jobModels');

const USER = require('../Models/userModels')


const GetUser = async (req, res) => {
  try {
    const companyId = req.query.userId;

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
        // Ensure you're securely handling passwords - hash before storing
        password,
        confirmPassword,
    } = req.query;

    const {
      logoUpload,
      imageUpload,
    } = req.files;

    const logo = logoUpload ? logoUpload[0].filename : '';
    const image = imageUpload ? imageUpload[0].filename : '';
    // Assuming _id is coming from somewhere in your request (e.g., req.params, req.body)
    const _id = req.params.id || req.body.id;

    // Await the asynchronous operation to complete
    const updatedCompany = await USER.findByIdAndUpdate(_id, {
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
      // It's crucial to handle passwords securely
    }, { new: true }); // Returns the updated document

    // Respond with the updated company details
    res.status(200).json(updatedCompany);
  } catch (error) {
    console.error(error); // Log the error for server-side debugging
    res.status(501).json({ message: 'Internal Server Error', error: error.message });
  }
};



module.exports = { GetUser, addJobpost, getSingleJobdata, GetEditcompany };
