import icons1 from "../../assets/image 37.png";
import icons2 from "../../assets/image 38.png";

import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import chart from "../../assets/image 39.png";

import people from '../../assets/image 40.png'
import people1 from '../../assets/image 41.png'
import peopl2 from '../../assets/image 42.png'

const index = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div className=" flex flex-col gap-3 card1 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Weather</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="grid grid-cols-5">
          <div className="flex flex-col items-center text-center">
            <p>Sunday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>10C</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p>Monday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p>Tuesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p>Wednesday</p>
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>35C</p>
          </div>

          <div className="flex flex-col items-center text-center pb-9">
            <p>Thursday</p>
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>20C</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 card3 rounded-2xl">
        <div className="flex flex-row justify-between px-10 py-5">
          <h1 className=" text-2xl font-bold">ToDo List</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="flex flex-col gap-5 px-10">
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

      <div className=" flex flex-col gap-3 card1 rounded-3xl">
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold">Trending view chart</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div>
          <img src={chart} alt="" className="w-[100%]" />
        </div>
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-3xl">
        <div className="flex flex-row justify-between px-10 py-7">
          <h1 className=" text-2xl font-bold">News</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-10">
          <div className="flex flex-row gap-3">
            <img src={people} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">Joe Alwyn 'a new man' after Taylor Swift split</h3>
              <p className="text-lg">
                Joe Alwyn reportedly focused his post-Taylor Swift-breakup
                energy into developing himself
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <img src={people1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">Tory Lanez 'refuses to be eliminated</h3>
              <p className="text-lg">
              fter 10-year sentence over Megan Thee Stallion shooting
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 pb-10">
            <img src={peopl2} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">Shania Twain feels for Céline Dion</h3>
              <p className="text-lg">
              after Stiff person diagnosis: ‘Gotta be so difficult’
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
