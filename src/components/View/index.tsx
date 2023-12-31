import { useState } from 'react'
import Chart from '../Chart'
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
  const [open11,setOpen11] = useState(false)
  const handleCard11=()=>{
    setOpen11(!open11)
  }
  return (
    <div className=" flex flex-col gap-3 card1 rounded-3xl">
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold flex flex-row max-text:text-lg max-lg:text-2xl max-text:flex-wrap max-md:texttext-2xl max-md:text-base">Trending view chart</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer max-sm:w-[20px] max-sm:h-[20px]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer max-sm:w-[20px] max-sm:h-[20px]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer max-sm:w-[20px] max-sm:h-[20px]" />
            <img src={icon4} alt="" className={open11 ? "w-[100%] h-[80%] cursor-pointer max-sm:w-[20px] max-sm:h-[20px]" : "w-[100%] h-[80%] cursor-pointer rotate-180 max-md:w-[20px] max-sm:h-[20px]"} onClick={handleCard11}/>
          </div>
        </div>

        <div className={open11?"hidden":"bg-black rounded-xl"}>
          <Chart/>
        </div>
      </div>
  )
}

export default index