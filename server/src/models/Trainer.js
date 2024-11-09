import mongoose from "mongoose";
const trainer = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    })
const trainers = mongoose.model("Trainer", trainer);
export default trainers;