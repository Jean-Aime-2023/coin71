import icons1 from '../../assets/image 37.png'
import icons2 from '../../assets/image 38.png'

import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
    return (
      <div className="flex flex-col gap-6 flex-1">
         <div className=" flex flex-col gap-3 bg-white rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Bookmarks</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="grid grid-cols-5">

          <div className="flex flex-col items-center text-center">
            <p>Monday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>10C</p>
          </div>

          <div className="flex flex-col items-center text-center">
          <p>Monday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center">
          <p>Monday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center">
          <p>Monday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center pb-9">
          <p>Monday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>20C</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default index