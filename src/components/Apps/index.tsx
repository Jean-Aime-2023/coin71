import app1 from '../../assets/image 24-1.png'
import app2 from '../../assets/image 25-1.png'
import app3 from '../../assets/image 26-1.png'
import app4 from '../../assets/image 27-1.png'
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import { useState } from 'react';

const index = () => {
  const [open5,setOpen5] = useState(false)
  const handleCard5=()=>{
    setOpen5(!open5)
  }
  return (
<div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Apps</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open5 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard5}/>
          </div>
        </div>

        <div className={open5 ? "hidden" : "grid grid-cols-4 max-div:grid-cols-3"}>
        <a href="https://www.managemypain.net/" target="_blank" className="flex flex-col items-center text-center">
            <img src={app1} alt="" className="h-[4rem]" />
            <p>Manage My Pain</p>
          </a>

          <a href="https://assistant.google.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={app2} alt="" className="h-[4rem]" />
            <p>Google Assistant</p>
          </a>

          <a href="https://home.google.com/welcome/" target="_blank" className="flex flex-col items-center text-center">
            <img src={app3} alt="" className="h-[4rem]" />
            <p>Google Home</p>
          </a>

          <a href="https://workspace.google.com/" target="_blank" className="flex flex-col items-center text-center pb-10">
            <img src={app4} alt="" className="h-[4rem]" />
            <p>Google Calendar</p>
          </a>
        </div>  
      </div>  )
}

export default index