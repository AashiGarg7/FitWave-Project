import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import PropTypes from 'prop-types'; 
export default function TrainerShowCase({image}){
    return (
        <div className='w-[20%]  border-4 border-[#363535] rounded-xl'>
           <div className='relative bg-black w-full h-[40vh] p-6 rounded-xl'>
                <div className='absolute inset-0 left-[10%] rounded-xl'>
                    <img src={image} alt="Background" className='w-full h-full object-cover'/>
                </div>
                <div className='relative z-10 flex items-end h-full justify-center gap-4  mt-3'>
                    <div className="p-2 bg-transparent rounded-md border-2 border-white hover:border-[#CCFF33] cursor-pointer hover:text-[#CCFF33]"><FaFacebookF/></div>
                    <div className="p-2 bg-transparent rounded-md border-2 border-white hover:border-[#CCFF33] cursor-pointer hover:text-[#CCFF33]"><AiFillInstagram/></div>
                    <div className="p-2 bg-transparent rounded-md border-2 border-white hover:border-[#CCFF33] cursor-pointer hover:text-[#CCFF33]"><FaXTwitter/></div>
                </div>
            </div>
        </div>
    )
}
TrainerShowCase.propTypes = {
    image: PropTypes.any.isRequired
};