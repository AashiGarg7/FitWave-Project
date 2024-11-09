import Classes from "./ClassCard";
import '../App.css';
import image from '/Image2.png'
import image1 from '/yogaImage.png';
import image2 from '/Image9.png'
import image3 from '/Image6.png'
import image4 from '/Image10.png'
import image5 from '/Image8.png'
export default function ClassesUi() {
    return (
        <div className="p-2 custom-scrollbar min-h-[100%] h-fit cursor-pointer">
            <div className="font-space flex justify-center place-content-center">
                <h1 className="text-white text-3xl font-bold"><span className="text-[#CCFF33]">Our</span> Best Selling Courses</h1>
            </div>
            <div className="mt-10 flex flex-wrap w-[100%] gap-4 justify-center">
                <Classes image={image} type={"Cardio WorkOut"} name={"Sophia Lee"} desc={"Cardio workout courses are designed to help individuals improve their cardiovascular health, increase stamina, and burn calories effectively."} points={"4.7"} count={"25,145"} price={"40.99"} lastprice={"50.99"} />
                <Classes image={image1} type={"Yoga"} name={"Elina Fairytale"} desc={"Yoga courses offer a comprehensive approach to physical and mental well-being through a series of guided practices that include asanas."} points={"4.7"} count={"35,145"} price={"50.99"} lastprice={"60.99"} />
                <Classes image={image2} type={"Strength Training"} name={"Jack Sullivan"} desc={"Strength training courses focus on building muscle strength, endurance, and overall fitness through targeted exercises and weightlifting techniques."} points={"4.7"} count={"20,145"} price={"50.99"} lastprice={"60.99"} />
                <Classes image={image3} type={"Boxing or Kickboxing"} name={"Max Reynolds"} desc={"Boxing and kickboxing courses offer dynamic and engaging workouts that combine cardiovascular training with powerful strikes and defensive techniques."} points={"4.7"} count={"15,145"} price={"20.99"} lastprice={"30.99"} />
                <Classes image={image4} type={"Dance Fitness"} name={"Lily Anderson"} desc={"Dance fitness courses combine the joy of dance with a high-energy workout to create a fun and effective fitness routine."} points={"4.7"} count={"45,145"} price={"70.99"} lastprice={"80.99"} />
                <Classes image={image5} type={"Bootcamp"} name={"Mason Walker"} desc={"Intense, military-style workouts that combine strength and cardio for a full-body burn."} points={"4.7"} count={"40,145"} price={"50.99"} lastprice={"55.99"} />
            </div>
        </div>
    )
}