import { useNavigate } from "react-router-dom"
import { FaDumbbell } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShopCard from "./ShopCard";
import Image from "/Dumbbell.png"
import Image2 from "/Barbell.png"
import Image3 from '/Protien.png'
import Image4 from '/Creatine.png'
import Image5 from '/PunchingBag.png'
import toast,{Toaster} from 'react-hot-toast';
import Image6 from '/Treadmill.png'
import '../App.css'
import { useSelector } from "react-redux";
import { authselector } from "../redux/slices/slice";
export default function Shop() {
    const auth=useSelector(authselector);
    const navigate = useNavigate();
    return (
        <div className="bg-black min-h-screen text-white font-space custom-scrollbar">
            <Toaster/>
            <div className='flex justify-between p-6 pr-10'>
                <h1 className='text-3xl'>
                    <div className='flex gap-4'>
                        <FaDumbbell className='text-[#CCFF33] text-4xl cursor-pointer' onClick={()=>{
                            navigate("/")
                        }}/>
                        <span className="text-white font-bold">FitWave</span>
                    </div>
                </h1>
                <div className='flex gap-4 text-2xl cursor-pointer'>
                    <h1 className='hover:text-[#CCFF33]' onClick={() => {
                        navigate("/")
                    }}>HOME</h1>
                    <h1 className='hover:text-[#CCFF33]' onClick={() => {
                        navigate("/classes")
                    }}>CLASSES</h1>
                    <h1 className='hover:text-[#CCFF33]' onClick={() => {
                        auth?navigate("/dashboard"):toast('LogIn First!',
                            {
                              icon: '☠️',
                              style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                              },
                            }
                          );  
                        }}>DASHBOARD</h1>
                </div>
                <div className="flex justify-center gap-4">
                <FaRegHeart className="text-2xl mt-1 text-[#CCFF33] cursor-pointer"/>
                <AiOutlineShoppingCart className="text-3xl text-[#CCFF33] cursor-pointer"/>
                </div>
            </div>
            <div className="flex p-2 flex-wrap gap-4 justify-center">
                <ShopCard  image={Image} name={"Dumbells"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <ShopCard  image={Image2} name={"Barbells"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <ShopCard  image={Image3} name={"Protien"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <ShopCard  image={Image4} name={"Creatine"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <ShopCard  image={Image5} name={"Punching Bag"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <ShopCard  image={Image6} name={"TreadMills"} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
            </div>
        </div>
    )
}