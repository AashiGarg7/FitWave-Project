import { useForm } from "react-hook-form";
import { useState, useMemo, useCallback } from "react";
import '../App.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm({ mode: 'onChange' });
    const [imagePreview, setImagePreview] = useState(null);
    const navigate=useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const location=useLocation();
    const {email}=location.state;
    const GenderEnum = useMemo(() => ({
        MALE: "Male",
        FEMALE: "Female",
        OTHER: "Others"
    }), []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
            setValue("image", file); 
        }
    };

    const onSubmit = useCallback(async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (key !== 'image') { 
                formData.append(key, data[key]);
            }
        });

        if (imageFile) {
            try {
                const formData1 = new FormData();
                formData1.append("file", imageFile);
                formData1.append("upload_preset", "ml_default");
                
                const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/dq93uuksm/image/upload", {
                    method: "POST",
                    body: formData1
                });

                const cloudinaryData = await cloudinaryResponse.json();
                if (cloudinaryData.secure_url) {
                    formData.append("image", cloudinaryData.secure_url);
                } else {
                    console.error('Error uploading image:', cloudinaryData);
                    return; 
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                return;
            }
        }

        try {
            const response = await axios.post('http:localhost:4000/user/profile', {
                height: parseFloat(formData.get('height')),
                weight: parseFloat(formData.get('weight')),
                age: parseInt(formData.get('age')),
                gender: formData.get('gender'),
                image: formData.get('image'),
                email:email
            }, {
                withCredentials: true,
            });

            console.log(response);
            navigate("/login")
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }, [imageFile]);

    return (
        <div className='custom-scrollbar min-h-screen h-fit'>
            <div className='bg-black text-white font-space border-[#212121]'>
                <div className='bg-black text-white w-full min-h-screen h-fit p-2 my-auto flex place-items-center justify-center'>
                    <form className='w-2/5 mx-auto h-fit mt-5 p-6 border-[#212121] rounded-lg border-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center place-content-center place-items-center font-bold text-2xl mb-4 text-[#CCFF33]">
                            <h1>Complete Your Profile</h1>
                        </div>
                        <div className="flex justify-center place-items-center">
                            <div className="flex w-[50%] max-w-xl text-center flex-col gap-1">
                                <div className="flex w-full flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-neutral-300 p-4 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Profile Preview" className="w-full h-full object-cover rounded-3xl" />
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-12 h-12 opacity-75">
                                                <path d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" />
                                            </svg>
                                            <div className="group">
                                                <label className="cursor-pointer font-medium text-black group-focus-within:underline dark:text-white">
                                                    <input id="fileInputDragDrop" type="file" className="sr-only" {...register("image", { required: { value: true, message: "This field is required." } })} onChange={handleImageChange} aria-describedby="validFileFormats" />
                                                    Browse Your Image
                                                </label>
                                            </div>
                                            <small id="validFileFormats">PNG, JPG, WebP - Max 50MB</small>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4 mb-4">
                            <div className="w-[50%]">
                                <h1 className='text-sm font-semibold'>Height <span className='text-red-600'>*</span></h1>
                                <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("height", { required: { value: true, message: "This field is required." } })} placeholder="Height in m." />
                                {errors.height && <div className='text-red-600 mb-3 ml-1'>{errors.height.message}</div>}
                            </div>
                            <div className="w-[50%]">
                                <h3 className='text-sm font-semibold'>Weight<span className='text-red-600'>*</span></h3>
                                <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("weight", {
                                    required: { value: true, message: "This field is required." },
                                })}
                                    placeholder="Weight in kg." />

                                {errors.weight && <div className='text-red-600 mb-3 ml-1'>{errors.weight.message}</div>}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 mt-4 mb-4">
                            <div className="w-[50%]">
                                <h3 className='text-sm font-semibold'>Age<span className='text-red-600'>*</span></h3>
                                <input className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("age", {
                                    required: { value: true, message: "This field is required." },
                                })} placeholder="Age." />
                                {errors.age && <div className='text-red-600 mb-3 ml-1'>{errors.age.message}</div>}
                            </div>

                            <div className="w-[50%]">
                                <h3 className='text-sm font-semibold'>Gender<span className='text-red-600'>*</span></h3>
                                <select className='bg-transparent border-2 rounded-md outline-none p-2 mt-1 w-full border-[#121212] cursor-text' {...register("gender", {
                                    required: { value: true, message: "This field is required." },
                                })}>
                                    <option value={GenderEnum.MALE} className="bg-black text-white">Male</option>
                                    <option value={GenderEnum.FEMALE} className="bg-black text-white">Female</option>
                                    <option value={GenderEnum.OTHER} className="bg-black text-white">Other</option>
                                </select>
                                {errors.gender && <div className='text-red-600 mb-3 ml-1'>{errors.gender.message}</div>}
                            </div>
                        </div>
                        <button className={`bg-pink-500 hover:bg-pink-600 rounded-md mt-2 block w-full cursor-pointer text-center font-semibold p-2 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isValid || isSubmitting}>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
