import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectDB from './src/config/db.js';
const app  = express();

const port = process.env.PORT;

// routes
import authRoutes from './src/routes/auth.Routes.js';
import userRouter from './src/routes/user.Route.js';

// application level middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('hello there! ')
})

// routes
app.use('/api', authRoutes);
app.use('/api', userRouter);

const initApp = async () => {
    await connectDB()
    app.listen(port, ()=>{
        console.log(`http://localhost:${port}/`);
    })
}
initApp()