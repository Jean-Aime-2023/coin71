import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import people from '../../assets/image 40.png'
import people1 from '../../assets/image 41.png'
import peopl2 from '../../assets/image 42.png'
import { useState } from "react";

const index = () => {
  const [open12,setOpen12] = useState(false)
  const handleCard12=()=>{
    setOpen12(!open12)
  }
  return (
<div className=" flex flex-col gap-3 card1 rounded-3xl" data-aos="fade-up">
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold max-md:text-[1.2rem]">News</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open12 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard12}/>
          </div>
        </div>

        <div className={open12?"hidden":"flex flex-col gap-4 px-10 max-sm:px-3"}>
          <a href="https://news.microsoft.com/" target="_blank" className="flex flex-row gap-3">
            <img src={people} alt=""/>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Joe Alwyn 'a new man' after Taylor Swift split</h3>
              <p className="text-sm">
                Joe Alwyn reportedly focused his post-Taylor Swift-breakup
                energy into developing himself
              </p>
            </div>
          </a>

          <a href="https://news.microsoft.com/" target="_blank" className="flex flex-row gap-3">
            <img src={people1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Tory Lanez 'refuses to be eliminated</h3>
              <p className="text-sm">
              fter 10-year sentence over Megan Thee Stallion shooting
              </p>
            </div>
          </a>

          <a href="https://news.microsoft.com/" target="_blank" className="flex flex-row gap-3 pb-10">
            <img src={peopl2} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Shania Twain feels for Céline Dion</h3>
              <p className="text-sm">
              after Stiff person diagnosis: ‘Gotta be so difficult’
              </p>
            </div>
          </a>
        </div>
      </div>  )
}

export default index