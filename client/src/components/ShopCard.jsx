
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types'; 
export default function ShopCard({ image, name, points, count, price, lastprice }) {
    return (
        <div className='w-[25%]  border-4 border-[#363535] rounded-xl text-white font-space'>
            <div className='relative bg-[#121212] w-[100%] h-[28vh] p-6 rounded-t-xl'>
                <div className='absolute inset-0 left-[10%] rounded-xl'>
                    <img src={image} alt="Background" className='w-[90%] h-full object-cover' />
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-lg font-medium text-[#CCFF33]'>{name}</h2>
                <div className='flex gap-2 mt-2'>
                    <h2>{points}</h2>
                    <div className="flex gap-2 mt-1">
                        <FaStar className="text-[#CCFF33]" />
                        <FaStar className="text-[#CCFF33]" />
                        <FaStar className="text-[#CCFF33]" />
                        <FaStar className="text-[#CCFF33]" />
                        <FaStar />
                    </div>
                    <div>
                        ({count})
                    </div>
                </div>
                <div className='flex gap-2 mt-1'>
                    <h1>${price}</h1>
                    <h2 className='line-through text-slate-500'>${lastprice}</h2>
                </div>
                <div className="flex gap-4 justify-center">
                <button className='bg-[#CCFF33] hover:bg-transparent border-2 border-[#CCFF33] hover:text-white w-[50%] text-black font-bold rounded p-1 mt-2'>
                    <h1>Add to Cart</h1>
                </button>
                <button className='bg-transparent border-2 border-[#CCFF33] w-[50%] hover:bg-[#CCFF33] hover:text-black font-bold rounded p-1 mt-2'>
                    <h1>Favourites</h1>
                </button>
                </div>
            </div>
        </div>
    )
}
ShopCard.propTypes = {
    image: PropTypes.any,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    points:PropTypes.string.isRequired,
    count:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    lastprice:PropTypes.string.isRequired
};