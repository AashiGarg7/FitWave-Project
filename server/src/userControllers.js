import { z } from 'zod';
import User from '../models/userModel.js';
import generateOTP from '../utils/generateOTP.js';
import sendOTP from '../services/sendOTP.js';
import jwt from 'jsonwebtoken';
import JWTSECRET from '../config/envConfig.js';
const forgotvalidation = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email()
})
const loginvalid = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8).max(100)
})
const signupValidate = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(3).max(20),
});
const validateProfile = z.object({
    height: z.number().min(0, "Height must be a positive number."),
    weight: z.number().min(0, "Weight must be a positive number."),
    age: z.number().int().min(0, "Age must be a positive integer."),
    gender: z.enum(["Male", "Female", "Others"]),
    image: z.string(),
    email: z.string().email()
});
const validatepassword = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
    confirm: z.string().min(8).max(100)
})
async function storeotp(req,otp) {
    const {email}=req.body;
   const user=await User.findOne({email:email});
   user.OTP=otp;
   await user.save();
}
export async function ForgotPassword(req, res) {
    const validation = forgotvalidation.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).send({ error: "Send UserName and Password Correctly" })
    }
    const { email, username } = req.body;
    try {
        const user = await User.findOne({ email: email, username: username });
        if (!user) {
            return res.status(400).send({ error: "User does not exist" });
        }
        const otp = generateOTP();
        storeotp(req, otp);
        sendOTP({ email: email, otp: otp });
        res.status(200).json({ message: "email sent successfully" });
    } catch (error) {
        return res.status(400).send({ error: "Internal Server Error" });
    }

}
export async function VerifyOTP(req, res) {
    const { otp } = req.body;
    const {email}=req.body;
    try {
        if (!otp) {
            return res.status(400).json({ error: "OTP is required" });
        }
        const userotp=await User.findOne({email:email});
        if (userotp.OTP == otp) {
            userotp.OTP=null;
            await userotp.save();
            return res.json({ msg: "OTP verified successfully" });
        }
        return res.status(400).json({ error: "error", error })
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error });
    }

}
export async function SignUp(req, res) {
    const signvalid = signupValidate.safeParse(req.body);
    if (!signvalid.success) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const { username, email, password, gender, age, weight, height } = req.body;
    try {
        const user = await User.findOne({ username: username, password: password });
        if (user) {
            return res.status(401).json({ error: "user already exists" });
        }
        const newuser = new User({
            username,
            password,
            email,
        })
        await newuser.save();
        const token = jwt.sign({ id: newuser._id }, JWTSECRET.JWTSECRET, { expiresIn: '1h' });
        res.cookie("JWTTOKEN", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        })
        return res.status(200).json({ message: "SignUp successful", token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export async function Login(req, res) {
    const loginvalidation = loginvalid.safeParse(req.body);
    if (!loginvalidation.success) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const token = jwt.sign({ id: user._id }, JWTSECRET.JWTSECRET, { expiresIn: '1h' });
        // res.cookie("JWTTOKEN", token, {
        //     maxAge: 24 * 60 * 60 * 1000,
        //     httpOnly: false,
        // })
        // res.cookie("username", user.username, {
        //     maxAge: 24 * 60 * 60 * 1000, 
        //     httpOnly: false,
        // });
        // res.cookie("profilePic", user.ProfilePic, {
        //     maxAge: 24 * 60 * 60 * 1000, 
        //     httpOnly: false, 
        // });
        return res.status(200).json({ message: "Login successful", token:token,username:user.username,profilePic:user.ProfilePic });
    } catch (error) { 
        return res.status(500).json({ error: error.message });
    }
}
export async function ChangePassword(req, res) {
    const validate = validatepassword.safeParse(req.body);
    if (!validate) {
        return res.status(400).json({ error: "Invalid input" });
    }
    try {

        const { email, password, confirm } = req.body;
        const user = await User.findOne({ email: email });
        user.password = password
        await user.save();
        return res.status(200).json({ "msg": "Saved successfully" });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
export async function Profile(req, res) {
    const validate = validateProfile.safeParse(req.body);
    if (!validate.success) {
        return res.status(400).json({ error: "Invalid input" });
    }
    try {
        const email = req.body.email;
        const { height, weight, age, gender, image } = req.body;
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(400).send({ error: "User does not exist" });
            }
            user.height = height;
            user.weight = weight;
            user.age = age;
            user.gender = gender;
            user.ProfilePic = image;
            await user.save();
        } catch (error) {
            return res.status(401).send({ error: "Invalid Token" });
        }
        console.log(req.body);
        return res.status(200).send("success");
    } catch (error) {
        return res.status(400).send(error);
    }
}
export async function dayActive(req,res){
    const currentDate = new Date();
  const {username}=req.body;
  const user=await User.findOne({username});
  if(!user){
    return res.status(400).send("user not found");
  }
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); 
    const currentDay = currentDate.getDate();
    const isDateAlreadyLogged = user.daysActive.some(date => {
        return (
            date.getFullYear() === currentYear &&
            date.getMonth() === currentMonth &&
            date.getDate() === currentDay
        );
    });
    if (!isDateAlreadyLogged) {
        user.daysActive.push(currentDate);
        await user.save(); 
    }
    
    const days = user.daysActive;
    return res.status(200).send(days);
}