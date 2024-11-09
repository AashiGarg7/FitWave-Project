import mongoose from "mongoose";

const Goal = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    targetDate: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})
const Goals = mongoose.model("Goal", Goal);
export default Goals;