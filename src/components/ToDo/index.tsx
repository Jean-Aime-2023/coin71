import { useState } from "react";
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
  const [open10,setOpen10] = useState(false)
  const handleCard10=()=>{
    setOpen10(!open10)
  }
  return (
    <div className=" flex flex-col gap-3 card3 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between px-10 py-5">
          <h1 className=" text-2xl font-bold">ToDo List</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open10 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard10}/>
          </div>
        </div>

        <div className={open10?"hidden":"flex flex-col gap-5 px-10"}>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl">0</p>
            <hr className=" border-4 rounded-2xl border-gray-300 w-[100%]" />
          </div>
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-3">
              <span className="flex flex-row gap-3 text-xl">
                <input type="checkbox" name="" id="" className="w-[4%]" /> UXUI
                Design
              </span>
              <span className="flex flex-row gap-3 text-xl">
                <input type="checkbox" name="" id="" className="w-[4%]"/> Development website
              </span>
              <span className="flex flex-row gap-3 text-xl pb-10">
                <input type="checkbox" name="" id="" className="w-[4%]" /> Video coin7
              </span>
            </form>
          </div>
        </div>
      </div>
  )
}

export default index