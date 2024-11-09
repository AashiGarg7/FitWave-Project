import image from '/404.jpg';
import '../App.css'
import { useNavigate } from 'react-router-dom';
export default function NotFound(){
    const navigate=useNavigate();
    return (
        <div className='relative bg-black w-full min-h-screen h-fit p-6 custom-scrollbar font-space'>
                <div className='absolute inset-0 '>
                    <img src={image} alt="Background" className='w-full h-full object-cover'/>
                </div>
                <div className='relative z-10 flex items-baseline h-full justify-end'>
                    <div className='h-full w-full flex justify-center place-content-center place-items-center gap-6'>
                    <h1 className='text-white  text-[24rem] font-bold'>404</h1>
                    <div >
                    <h2 className='text-white h-[100%] font-extrabold w-[100%] text-7xl'>You deadlifted way too heavy.</h2>
                   <div className='flex  justify-center'>
                   <button className='bg-[#b8e62e] p-4 pl-6 pr-6 font-bold text-white hover:bg-[#95b634] text-3xl rounded mt-4' onClick={()=>{
                    navigate("/")
                   }}>Take me Home</button>
                   </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}