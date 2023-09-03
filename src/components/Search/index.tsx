import { useState } from "react";
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import search1 from '../../assets/image 30.png'
import search2 from '../../assets/image 31.png'
import search3 from '../../assets/image 32.png'
import search4 from '../../assets/image 33.png'

const index = () => {
  const [open7,setOpen7] = useState(false)
  const handleCard7=()=>{
    setOpen7(!open7)
  }
  return (
<div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-up">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Advanced Seacrh</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open7 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard7}/>
          </div>
        </div>

        <div className={open7?"hidden":"grid grid-cols-4"}>
        <a href="https://onionbrowser.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={search1} alt="" className="h-[4rem]" />
            <p>Onion</p>
          </a>

          <a href="https://imovie.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={search2} alt="" className="h-[4rem]" />
            <p>Video Editing Tool</p>
          </a>

          <a href="Riddler.io" target="_blank" className="flex flex-col items-center text-center">
            <img src={search3} alt="" className="h-[4rem]" />
            <p>Riddler.io</p>
          </a>

          <a href="https://www.seo.com/" target="_blank" className="flex flex-col items-center text-center pb-10">
            <img src={search4} alt="" className="h-[4rem]" />
            <p>SEO Extension</p>
          </a>
        </div>  
      </div>  )
}

export default index