import { useState } from "react";
import icons1 from "../../assets/image 37.png";
import icons2 from "../../assets/image 38.png";
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
  const [open9,setOpen9] = useState(false)
  const handleCard9=()=>{
    setOpen9(!open9)
  }
  return (
<div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-down">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Weather</h1>
          <div className="flex flex-row gap-5">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open9 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard9}/>
          </div>
        </div>

        <div className={open9?"hidden":"grid grid-cols-5"}>
          <a href="https://weather.com/" target="_blank" className="flex flex-col items-center text-center">
            <p>Sunday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>10C</p>
          </a>

          <a href="https://weather.com/" target="_blank" className="flex flex-col items-center text-center">
            <p>Monday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a href="https://weather.com/" target="_blank" className="flex flex-col items-center text-center">
            <p>Tuesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a href="https://weather.com/" target="_blank" className="flex flex-col items-center text-center">
            <p>Wednesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </a>

          <a href="https://weather.com/" target="_blank" className="flex flex-col items-center text-center pb-9">
            <p>Thursday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>20C</p>
          </a>
        </div>
      </div>  )
}

export default index