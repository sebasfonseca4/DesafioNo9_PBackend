import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false,
    },
    last_name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password:{
        type:String,
        required: false
    },
    role: {
        type: String,
        default: "usuario" 
    }
});

export default mongoose.model("Users", UsersSchema);