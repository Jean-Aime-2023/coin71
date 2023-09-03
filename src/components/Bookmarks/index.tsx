import icons1 from "../../assets/image 24.png";
import icons2 from "../../assets/image 25.png";
import icons3 from "../../assets/image 26.png";
import icons4 from "../../assets/image 27.png";
import icons5 from "../../assets/image 28.png";
import icons6 from "../../assets/image 29.png";
import {useState} from 'react'
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
  const [open4,setOpen4] = useState(false)
  const handleCard4=()=>{
    setOpen4(!open4)
  }
  return (
    <div className=" flex flex-col gap-3 card1 rounded-2xl" data-aos="fade-down">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Bookmarks</h1>
          <div className="flex flex-row gap-10">
          <img src={icon1} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon2} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon3} alt="" className="w-[100%] h-[80%] cursor-pointer" />
            <img src={icon4} alt="" className={open4 ? "w-[100%] h-[80%] cursor-pointer" : "w-[100%] h-[80%] cursor-pointer rotate-180"} onClick={handleCard4}/>
          </div>
        </div>

        <div className={open4?"hidden":"grid grid-cols-4"}>
          <a href="https://www.microsoft.com/en-us/microsoft-365/word" target="_blank" className="flex flex-col items-center text-center">
            <img src={icons6} alt="" className="h-[4rem]" />
            <p>Word doc</p>
          </a>

          <a href="https://www.microsoft.com/en-us/?ql=2" target="_blank" className="flex flex-col items-center text-center">
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>Mircosoft</p>
          </a>

          <a href="https://www.gmail.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>Gmail</p>
          </a>

          <a href="https://chat.openai.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={icons3} alt="" className="h-[4rem]" />
            <p>Chatgpt</p>
          </a>

          <a href="https://www.whatsapp.com/" target="_blank" className="flex flex-col items-center text-center">
            <img src={icons4} alt="" className="h-[4rem]" />
            <p>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/" target="_blank" className="flex flex-col items-center text-center pb-9">
            <img src={icons5} alt="" className="h-[4rem]" />
            <p>Instagram</p>
          </a>
        </div>
      </div>
  )
}

export default index