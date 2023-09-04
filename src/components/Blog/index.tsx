import { useState } from "react";
import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";
import blogIcon1 from "../../assets/image 28-2.png";
import blogIcon2 from "../../assets/image 29-2.png";
import blogIcon3 from "../../assets/image 30-2.png";

function index() {

  const [open1, setOpen1] = useState(false);

  const handleCard1 = () => {
    setOpen1(!open1);
  };

  return (
    <div
        className=" flex flex-col gap-3 card1 rounded-2xl"
      >
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold max-md:text-[1.2rem]">Blog</h1>
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
                open1
                  ? "w-[100%] h-[80%] cursor-pointer"
                  : "w-[100%] h-[80%] cursor-pointer rotate-180"
              }
              onClick={handleCard1}
            />
          </div>
        </div>

        <div className={open1 ? "hidden" : "flex flex-col gap-3"}>
          <a
            href="https://www.blog-search.com/"
            target="_blank"
            className="flex flex-row gap-3 px-10 text-lg"
          >
            <img src={blogIcon1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Blog Search</h3>
              <p className=" text-gray-500">Blogsearch.com</p>
            </div>
          </a>
          <hr />
          <a
            href="themesile.com/blog"
            target="_blank"
            className="flex flex-row gap-3 px-10 text-lg"
          >
            <img src={blogIcon2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Themesile</h3>
              <p className=" text-gray-500">themesile.com/blog</p>
            </div>
          </a>
          <hr />
          <a
            href="https://blog.hubspot.com/"
            target="_blank"
            className="flex flex-row gap-3 px-10 text-lg pb-6"
          >
            <img src={blogIcon3} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">HubSpot</h3>
              <p className=" text-gray-500">blog.hubspot.com</p>
            </div>
          </a>
        </div>
      </div>
  )
}

export default index