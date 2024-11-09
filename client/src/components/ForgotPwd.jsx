import { useState } from 'react';
import axios from 'axios';
import { FaUserLock } from "react-icons/fa";
import '../App.css'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async() => {
        try {
            await axios.post('http://localhost:5173/user/forgotpwd',{
                email:email,
                username:username
            },{
                withCredentials:true
            });
            console.log(email,username);
            navigate('/verification',{state:{email}});
            setEmail("");
            setUsername("");
        } catch (error) {
            console.log("error",error)
        }
    }

    return (
        <>
            <div className='bg-black text-white font-space border-[#212121] h-fit min-h-screen '>
                <div className='bg-black text-white w-full h-screen p-5 my-auto'>
                    <div className='w-2/5 mx-auto h-[440px] mt-5 p-4 border-[#212121] rounded-lg border-2'>
                        <div className='w-full text-center'>
                            <FaUserLock className="w-full text-[#CCFF33] text-5xl cursor-pointer mb-1 " />
                            <h2 className='text-xl font-semibold mt-[-1px] mb-1 '>Trouble logging in?</h2>
                            <h4 className='text-xs mt-[-1px] mx-16 text-slate-300'>Enter your email or username and we`ll send you a link to get back into your account.</h4>
                        </div>

                        <h1 className='text-sm font-semibold'>Username</h1>
                        <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full mb-2 border-[#121212]' onChange={(event) => {
                            setUsername(event.target.value)
                        }} placeholder="Username" />

                        <h3 className='text-sm font-semibold'>Email</h3>
                        <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full mb-2 border-[#121212]' onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                            placeholder="Email" />

                        <button className='bg-pink-500 hover:bg-pink-600 rounded-md mt-2 block w-full cursor-pointer text-center font-semibold p-2' onClick={handleSubmit}>Send Login Link</button>

                        <div className='w-full text-sm mt-2 flex justify-center '>
                            <h3 className='cursor-pointer hover:font-semibold'>Can`t reset your password?</h3>
                        </div>

                        <div className='flex justify-center'>
                            <hr className='border-[#212121] border-[0.2px] w-[45%] mt-5 mr-2 ' />
                            <h3 className='text-center mt-2 font-medium'>OR</h3>
                            <hr className='border-[#212121] border-[0.2px] w-[45%] ml-2 mt-5 ' />
                        </div>
                        <p className='text-base text-white text-center mt-2 hover:font-bold cursor-pointer' onClick={() => {
                            navigate("/signup")

                        }}>Create new account</p>
                    </div>
                </div>
            </div>
        </>
    )
}
