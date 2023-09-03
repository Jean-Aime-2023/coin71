import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import address1 from '../../assets/image 28-3.png'
import address2 from '../../assets/image 29-3.png'
import address3 from '../../assets/image 30-3.png'
import { useState } from "react";

const index = () => {
  const [open6,setOpen6] = useState(false)
  const handleCard6=()=>{
    setOpen6(!open6)
  }
  return (
<div className=" flex flex-col gap-3 card2 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Address and Contact <br /> Information Saerch</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open6 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard6}/>
          </div>
        </div>

        <div className={open6?"hidden":"flex flex-col gap-3 pb-10"}>
          <a href="cookpad.com" target="_blank" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cookpad</h3>
              <p className=" text-gray-500">cookpad.com</p>
            </div>
          </a>
          <hr />
          <a href="Homes.com" target="_blank" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Homes</h3>
              <p className=" text-gray-500">Homes.com</p>
            </div>
          </a>
          <hr />
          <a href="vrbo.com" target="_blank" className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={address3} alt="" className=" w-[10%] h-[50%] mt-3" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </a>
        </div>
      </div>  )
}

export default index