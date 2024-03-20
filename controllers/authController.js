// const { response } = require('../app')
const { token } = require("morgan");
const USERS = require("../Models/userModels");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');


const doSignUp = async (req, res) => {
  try {
    const users = await USERS.findOne({ email: req.body.email });

    if (users) {
      res.status(200).json({message:"email is already registered" });
      return;
    }

    console.log("Signup request body:", req.body);

    const hash = await bcrypt.hash(req.body.password, saltRounds);
    const response = await USERS.create({
      // userID: uuidv4(), // generate a unique ID
      CompanyName: req.body.CompanyName,
      registrationNumber: req.body.registrationNumber,
      email: req.body.email,

      Address: req.body.Address,
      website: req.body.website,
      LinkedIn: req.body.LinkedIn,
      Industry: req.body.Industry,
      Incorporationdate: req.body.Incorporationdate,
      about: req.body.about,
      

      
      phonenumber: req.body.phonenumber,
      password: hash,

    });

    res.status(200).json({ message: "signUp successful" });
  } catch (error) {
    console.error("Error during signUp:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



const doLogin = async (req, res) => {
  try {
    const user = await USERS.findOne({ email: req.body.email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            userId: user._id,
            email: user.email,
            phonenumber: user.phonenumber,
            CompanyName: user.CompanyName,
            registrationNumber: user.registrationNumber,
            role: user?.role,
          },
          process.env.JWT_PASSWORD,
          { expiresIn: '1d' }
        );

        // Remove password from the user object before sending it in the response
        user.password = undefined;

        res.status(200).json({ message: "Login successful", token, user });
      } else {
        res.status(200).json({ message: "Invalid user credentials", token: null });
      }
    } else {
      res.status(200).json({ message: "Invalid user credentials", token: null });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error', token: null });
  }
};

// const GetEditcompany = async (req, res) => {
//   try {
//     const {
//         CompanyName,
//         registrationNumber,
//         email,
//         phonenumber,
//         Address,
//         website,
//         LinkedIn,
//         Industry,
//         Incorporationdate,
//         about,
//         // Ensure you're securely handling passwords - hash before storing
//         password,
//         confirmPassword,
//     } = req.query;

//     const {
//       logoUpload,
//       imageUpload,
//     } = req.files;

//     const logo = logoUpload ? logoUpload[0].filename : '';
//     const image = imageUpload ? imageUpload[0].filename : '';
//     // Assuming _id is coming from somewhere in your request (e.g., req.params, req.body)
//     const _id = req.params.id || req.body.id;

//     // Await the asynchronous operation to complete
//     const updatedCompany = await USERS.findByIdAndUpdate(_id, {
//       CompanyName,
//       registrationNumber,
//       email,
//       phonenumber,
//       Address,
//       website,
//       LinkedIn,
//       Industry,
//       Incorporationdate,
//       about,
//       logo,
//       image
//       // It's crucial to handle passwords securely
//     }, { new: true }); // Returns the updated document

//     // Respond with the updated company details
//     res.status(200).json(updatedCompany);
//   } catch (error) {
//     console.error(error); // Log the error for server-side debugging
//     res.status(501).json({ message: 'Internal Server Error', error: error.message });
//   }
// };

module.exports = { doSignUp, doLogin  }
