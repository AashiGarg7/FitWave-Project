import { useForm } from "react-hook-form";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
const clientID = "456140993308-lj743g6h1ssb2si49pb8rgvlrkc28u20.apps.googleusercontent.com";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { addcookie } from '../redux/slices/slice.js'
import { useDispatch } from "react-redux";

export default function Login(){
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();

    const delay = (d) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }

    const onSubmit = async (data) => {
        await toast.promise(
            delay(2).then(async () => {
               const response=await axios.post("http://localhost:3000/user/login", {
                    username: data.username,
                    password: data.password,
                    email: data.email
                }, {   
                    withCredentials: true,
                });
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("username",response.data.username);
                localStorage.setItem("profilePic",response.data.profilePic);
                dispatch(addcookie(true));
                navigate("/");
            }),
            {
                loading: 'Logging in...',
                success: 'Login successful!',
                error: 'Login failed. Please try again.',

            }
        ).catch(error => {
            console.error('Fetch error:', error);
        });
    }
    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj);
    };

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    };

    return (
        <div className='custom-scrollbar min-h-screen h-fit'>
            <Toaster />
            <div className='bg-black text-white font-space border-[#212121] '>
                <div className='bg-black text-white w-full h-screen p-5 my-auto'>
                    <form className='w-2/5 mx-auto h-[550px] mt-5 p-4 border-[#212121] rounded-lg border-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full text-center'>
                            <MdOutlineFitnessCenter className="w-full text-[#CCFF33] text-6xl transform -rotate-45 cursor-pointer" />
                            <h2 className='text-xl font-semibold mt-[-4px]'>Welcome to FitWave</h2>
                            <h4 className='text-sm mt-[-1px] mb-2'>Login to your account to access our services</h4>
                        </div>

                        <h1 className='text-sm font-semibold'>Username <span className='text-red-600'>   *</span></h1>
                        <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full  border-[#121212] cursor-text' {...register("username", { required: { "value": true, "message": "This field is required." }, minLength: { value: 3, message: "Username must be at least 3 characters long" } })} placeholder="Username" />

                        {errors.username && <div className='text-red-600 mb-3 ml-1'>{errors.username.message}</div>}

                        <h3 className='text-sm font-semibold'>Email<span className='text-red-600'>   *</span></h3>
                        <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("email", {
                            required: { "value": true, "message": "This field is required." },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address",
                            }
                        })}
                            placeholder="Email" />

                        {errors.email && <div className='text-red-600 mb-3 ml-1'>{errors.email.message}</div>}

                        <h3 className='text-sm font-semibold'>Password<span className='text-red-600'>   *</span></h3>
                        <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("password", {
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
                        <input className={`bg-pink-500 hover:bg-pink-600 rounded-md mt-2 block w-full cursor-pointer text-center font-semibold p-2 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} value="Continue" type="submit" disabled={!isValid || isSubmitting} />

                        <div className='w-full text-sm mt-2 flex justify-center '>
                            <h3 className=''>Don`t have an account?</h3>
                            <p className='pl-3 text-emerald-400 cursor-pointer hover:font-semibold' onClick={() => {
                                navigate("/signup")
                            }}>Sign up</p>
                        </div>

                        <div className='flex justify-center'>
                            <hr className='border-[#212121] border-[0.2px] w-[45%] mt-5 mr-2 ' />
                            <h3 className='text-center mt-2 font-medium'>OR</h3>
                            <hr className='border-[#212121] border-[0.2px] w-[45%] ml-2 mt-5 ' />
                        </div>

                        <div className='flex justify-center mt-4 '>

                            <GoogleLogin
                                clientId={clientID}
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <div className='flex w-[90%] bg-white justify-center rounded-lg cursor-pointer' onClick={renderProps.onClick}>
                                        <FcGoogle className='text-3xl mt-1' />
                                        <button disabled={renderProps.disabled} className='text-black font-extrabold rounded-md px-4 py-2 cursor-pointer'>
                                            Login with Google
                                        </button>
                                    </div>

                                )}
                            />
                        </div>
                        <p className='text-sm text-white text-center mt-2 hover:font-semibold 
                        hover:text-purple-300 cursor-pointer' onClick={() => {
                                navigate("/forgotpwd")
                            }}>Forgot password?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
