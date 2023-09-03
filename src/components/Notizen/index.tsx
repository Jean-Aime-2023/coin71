import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import { useState } from "react";

const index = () => {
  const [open3, setOpen3] = useState(false);
  const handleCard3 = () => {
    setOpen3(!open3);
  };
  
  return (
      <div
        className=" flex flex-col card2 rounded-2xl p-10 gap-7"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-between ">
          <h1 className=" text-2xl font-bold max-md:text-[1.2rem]">Notizen</h1>
          <div className="flex flex-row gap-10">
            <img
              src={icon1}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon2}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon3}
              alt=""
              className="w-[100%] h-[80%] cursor-pointer"
            />
            <img
              src={icon4}
              alt=""
              className={
                open3
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard3}
            />
          </div>
        </div>

        <div className={open3 ? "hidden" : "flex flex-col gap-5"}>
          <ul className="flex flex-row gap-7">
            <li>
              <div
                className="cursor-pointer text-red-500 active-tabs"
              >
                Notiz
              </div>
            </li>
            <li>
              <div className="cursor-pointer hover:text-red-500">Neue Notiz</div>
            </li>
          </ul>

          <hr />

          <p>Don't forgot</p>
        </div>
      </div>
  )
}

export default index