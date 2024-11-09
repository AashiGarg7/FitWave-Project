import Gym from '/Gym.png';
import PropTypes from 'prop-types'; 
export default function Trainercard({color,name,desc}) {
    return (
        <div style={{ borderColor: color }} className={`p-3 border-2 rounded-xl  w-full`}>
            <div   style={{ backgroundColor: color }} className={`text-black font-space rounded-xl`}>
                <div className='pl-2 p-1'>
                    <h1 className='font-extrabold'>{name}</h1>
                    <h2 className='text-base'>{desc}</h2>
                </div>
                <img src={Gym}/>
            </div>
        </div>
    )
}
Trainercard.propTypes = {
    color: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};