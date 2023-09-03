import { useState } from "react"
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import page1 from '../../assets/image 28-1.png'
import page2 from '../../assets/image 29-1.png'
import address1 from '../../assets/image 28-3.png'

const index = () => {
  const [open8,setOpen8] = useState(false)
  const handleCard8=()=>{
    setOpen8(!open8)
  }
  return (
<div className="flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold max-md:text-[1.2rem]">Pages</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open8 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard8}/>
          </div>
        </div>

        <div className={open8?"hidden":"flex flex-col gap-3 pb-10"}>
          <a href="https://cookpad.com/" target="_blank" className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Android App</h3>
              <p className=" text-gray-500">github.com/topics/profile-link</p>
            </div>
          </a>
          <hr />
          <a href="https://github.com/" target="_blank" className="flex flex-row gap-3 px-10 text-lg">
            <img src={page1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Archived today</h3>
              <p className=" text-gray-500">chaches clear </p>
            </div>
          </a>
          <hr />
          <a href="https://vbro/" target="_blank" className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={page2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </a>
        </div>
      </div>  )
}

export default index