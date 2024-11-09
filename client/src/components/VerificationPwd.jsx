import { useState } from 'react';
// import { MdOutlineFitnessCenter } from "react-icons/md";
import {MdVerifiedUser} from 'react-icons/md';
import '../App.css';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';
export default function VerificationPwd() {
    const location=useLocation();
    const {email}=location.state;
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const navigate = useNavigate();
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const handleSubmit = async () => {
        const stringdata = otp.join('');
        if (stringdata.length < 6) {
            return false;
        }
        else {
            setOtp(new Array(6).fill(""));
            const data = parseInt(stringdata);
            try {
                const response = await axios.post('http://localhost:3000/user/verifyotp', {
                    otp: data,
                    email:email
                }, {
                    withCredentials: true
                });
                if (response.status != 200) {
                    throw new Error("OTP is Incorrect", response.status);
                }
                else navigate("/passwordChange",{state:{email}});
            } catch (error) {
                console.log("error", error)
            }
            console.log(data);
        }
    }
    const handleKeyDown = (element, index) => {
        if (element.key === "Backspace" && !otp[index]) {
            if (element.target.previousSibling) {
                element.target.previousSibling.focus();
            }
        }
    };
    return (
        <>
            <div className='bg-black text-white font-space border-[#212121] min-h-screen h-fit'>
                <div className='bg-black text-white w-full h-[612px] p-5 my-auto'>
                    <div className='w-2/5 mx-auto h-[440px] mt-5 p-4 border-[#212121] rounded-lg border-2'>
                        <div className='w-full text-center'>
                            <MdVerifiedUser className="w-full text-[#CCFF33] text-6xl mb-2 " />

                            <h2 className='text-xl font-semibold mt-[-1px] mb-1 '>Enter Verification Code</h2>
                            <h4 className='text-xs mt-[-1px] mx-16 text-slate-300'>For your security, we have sent the code to your phone number.</h4>

                            <div className='flex justify-center mx-[12%] mt-3 text-white'>
                                {otp.map((value, index) => (

                                   <input
                                        key={index}
                                        type="text"
                                        className="bg-black cursor-text mb-4 w-12 h-12 mx-2 text-center text-2xl border-2 rounded-lg border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        maxLength="1"
                                        value={value}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        aria-label={`OTP digit ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="text-center mb-4">
                                <a href="/" className="text-sm text-slate-300">
                                    Didn`t get the code? <span className="text-green-500 hover:underline">Click to resend.</span>
                                </a>
                            </div>
                            <button className='bg-pink-500 hover:bg-pink-600 rounded-md mt-2 block w-full cursor-pointer text-center font-semibold p-2' onClick={handleSubmit}>Submit code</button>
                            <div className='w-full text-sm mt-5'>
                                <h3 className='cursor-pointer hover:font-semibold'>Need help?</h3>
                                <h2 className='text-xs mt-2'>If you cannot receive the code or if you changed your email or phone number, <span className='text-green-300 hover:font-semibold cursor-pointer'>try a different way.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
