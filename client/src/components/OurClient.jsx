import { FaStar } from "react-icons/fa";
import Image from '/Image.png'
export default function OurClient() {
    return (
        <div className="w-[30%] border-2 border-[#CCFF33] p-4 rounded-xl">
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quaerat error hic velit odio fugiat nostrum, quia eius optio beatae praesentium, debitis, sit vero nam tempora? Quo accusamus nulla mollitia.
            </div>
            <div className="mt-2 flex justify-between">
                <div className="mt-6">
                    <h1>Aditya Verma</h1>
                    <div className="flex gap-2">
                    <FaStar className="text-[#CCFF33]"/>
                    <FaStar className="text-[#CCFF33]" />
                    <FaStar className="text-[#CCFF33]"/>
                    <FaStar className="text-[#CCFF33]"/>
                    <FaStar />
                    </div>
                </div>
                <div className="h-20 w-20 border-2 rounded-full border-[#212121]">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}