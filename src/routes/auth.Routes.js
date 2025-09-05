import express from 'express';
const authRouter = express.Router();

// controllers import
import {register, login} from '../controllers/auth.Controllers.js';

authRouter.get('/register', (req, res)=>{
    res.send('register.ejs');
})

authRouter.post('/register', register);
authRouter.post("/login", login);


export default authRouter