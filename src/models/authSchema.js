import mongoose from "mongoose";


const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        unique: false
    }
});

export const userModel = mongoose.model('userCollection', authSchema);

export default userModel