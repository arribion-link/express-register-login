/* The code snippet you provided is importing necessary modules and variables for user registration and
authentication functionality in a Node.js application. */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userModel } from '../models/authSchema.js'
const JWT_SECRECT = process.env.JWT_SECRECT;

/**
 * The function `register` handles user registration by checking input fields, encrypting the password,
 * generating a JWT token, and saving the user in the database.
 * @param req - `req` is the request object which contains information about the HTTP request that
 * triggered this function, such as request headers, parameters, body, etc. In this case, `req.body` is
 * used to extract the user input data like username, email, role, and password from the request body.
 * @param res - The `res` parameter in the `register` function is the response object that will be used
 * to send a response back to the client making the request. It is typically used to send HTTP
 * responses with status codes, headers, and data back to the client. In this function, `res` is
 * @returns The `register` function returns a response based on the outcome of the registration
 * process. Here are the possible return scenarios:
 */
export const register = async (req, res) => {
    // take user input
    const {username, email, role, password } = req.body;

    try {
        // check user provided all the fields
        if (!email || !password || !username || !role) {
            return res.status(400).json({
                success: false,
                message: 'all fields are required!'
            })
        }
        // check if the user already exist in database so as not to reregister
        const userExist = await userModel.findOne({ email });
        if (userExist) {
          return res.status(409).json({
            success: false,
            message: "User already exists",
          });
        }

        // if user doesnot exist in database register
        // encrypt the password - don't save raw password
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt);
        // create new user object to save in database
        const newUser = {
            username,
            email,
            role,
            // use hashedpassword for obeject to store in database
            password:hashedPassword
        }
        // generate a jwt token and send to the  user
       const payload = {
         userId: User._id,
         email: User.email,
         roles: [User.role],
       };

        const expiryTime = {
            expiresIn: '1h'
        }
        const token = await jwt.sign(payload, JWT_SECRECT, expiryTime);
        const User = new userModel(newUser);
        await User.save();
        res.status(200).json({
            token,
            success: true,
            message: "User registered successfully.."
        });
    } catch {
         res.status(500).json({
           success: false,
           message: "error registering the user",
         });
    }
}


export const login = async (req, res) => {
    // get email and password to login
    const { email, password } = req.body;
    try {
        // check if the user provided the email and password to login
        if (!email || !password) {
            return res.status("400").json({
                message: "All fields are required",
            });
        }
        // check if the user logging in is registered in the database
        const userFound = userModel.findOne({ email });
        if (!userFound) {
            return res.status(40).json({
                success: false,
                message: "user not found please register first"
            })
        }
        // if the user is registered check the password provided if it correct
        const credentials = {
          userFound: password,
        };

        const passwordMatch = await bcrypt.compare(password, credentials);
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message:"You have provided the wrong password"
            })
        }
        // if the password match check login the user 
        res.status(200).json({
            success: true,
            message: 'user logged in successfully'
        });
   } catch (err) {
       res.status(500).json({
         success: false,
         message: "error logging in the user",
       });
   }
};

export default {
    register,
    login
}