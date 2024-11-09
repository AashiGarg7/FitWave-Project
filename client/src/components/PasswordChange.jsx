import { useForm } from "react-hook-form";
import { MdOutlineLockReset } from "react-icons/md";
import '../App.css'
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from "axios";
export default function PassWordChange() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();
    const location = useLocation();
    const {email}=location.state;
    const onSubmit = async (data) => {
        if(data.Confirmpassword!==data.password){
            console.error("Password Does not match");
            return;
        }
        else{
            try {
                await axios.post("http://localhost:3000/user/changepassword",{
                    email:email,
                    password:data.password,
                    confirm:data.Confirmpassword
                })
                navigate('/login');
            } catch (error) {
                console.error("Error in changing password", error);
            }
        }
    }

    return (
        <div className='custom-scrollbar min-h-screen h-fit'>
            <div className='bg-black text-white font-space border-[#212121] '>
                <div className='bg-black text-white w-full h-screen p-5 my-auto flex justify-center items-center'>
                    <form className='w-2/5 mx-auto h-fit mt-5 p-4 border-[#212121] rounded-lg border-2 ' onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full text-center'>
                            <MdOutlineLockReset className="w-full text-[#CCFF33] text-7xl" />
                            <h2 className='text-xl font-semibold mt-[-4px]'>Reset Password</h2>
                            <h4 className='text-sm mt-[-1px]'>Create new Password for your account</h4>
                        </div>
                        <h3 className='text-sm font-semibold'>Password<span className='text-red-600'>   *</span></h3>
                        <input type="password" className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("password", {
                            required: { "value": true, "message": "This field is required." },
                            minLength: {
                                value: 7,
                                message: "Password must be at least 7 characters long"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{7,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one symbol"
                            }
                        })} placeholder="Password" />

                        {errors.password && <div className='text-red-600 mb-3 ml-1'>{errors.password.message}</div>}
                        <h3 className='text-sm font-semibold mt-4'>Confirm Password<span className='text-red-600'>   *</span></h3>
                        <input type="password" className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("Confirmpassword", {
                            required: { "value": true, "message": "This field is required." },
                            minLength: {
                                value: 7,
                                message: "Password must be at least 7 characters long"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{7,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one symbol"
                            }
                        })} placeholder="Confirm Password" />

                        {errors.Confirmpassword && <div className='text-red-600 mb-3 ml-1'>{errors.Confirmpassword.message}</div>}
                        <button className={`bg-pink-500 hover:bg-pink-600 rounded-md mt-4 block w-full cursor-pointer text-center font-semibold p-2 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} value="Continue" type="submit" disabled={!isValid || isSubmitting} >Continue</button>

                        <div className='w-full text-sm mt-2 flex justify-center '>
                            <h3 className=''>Remember your password?</h3>
                            <p className='pl-3 text-emerald-400 cursor-pointer hover:font-semibold' onClick={() => {
                                navigate("/login")
                            }}>LogIn</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}