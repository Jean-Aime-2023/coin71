import icons1 from "../../assets/image 24.png";
import icons2 from "../../assets/image 25.png";
import icons3 from "../../assets/image 26.png";
import icons4 from "../../assets/image 27.png";
import icons5 from "../../assets/image 28.png";
import icons6 from "../../assets/image 29.png";

import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

import app1 from '../../assets/image 24-1.png'
import app2 from '../../assets/image 25-1.png'
import app3 from '../../assets/image 26-1.png'
import app4 from '../../assets/image 27-1.png'

import address1 from '../../assets/image 28-3.png'
import address2 from '../../assets/image 29-3.png'
import address3 from '../../assets/image 30-3.png'

import search1 from '../../assets/image 30.png'
import search2 from '../../assets/image 31.png'
import search3 from '../../assets/image 32.png'
import search4 from '../../assets/image 33.png'

import page1 from '../../assets/image 28-1.png'
import page2 from '../../assets/image 29-1.png'


const index = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div className=" flex flex-col gap-3 card1 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Bookmarks</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <img src={icons6} alt="" className="h-[4rem]" />
            <p>Word doc</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={icons1} alt="" className="h-[4rem]" />
            <p>Mircosoft</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={icons2} alt="" className="h-[4rem]" />
            <p>Gmail</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={icons3} alt="" className="h-[4rem]" />
            <p>Chatgpt</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={icons4} alt="" className="h-[4rem]" />
            <p>Whatsapp</p>
          </div>

          <div className="flex flex-col items-center text-center pb-9">
            <img src={icons5} alt="" className="h-[4rem]" />
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Apps</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="grid grid-cols-4">
        <div className="flex flex-col items-center text-center">
            <img src={app1} alt="" className="h-[4rem]" />
            <p>Manage My Pain</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={app2} alt="" className="h-[4rem]" />
            <p>Google Assistant</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={app3} alt="" className="h-[4rem]" />
            <p>Google Home</p>
          </div>

          <div className="flex flex-col items-center text-center pb-10">
            <img src={app4} alt="" className="h-[4rem]" />
            <p>Google Calendar</p>
          </div>
        </div>  
      </div>

      <div className=" flex flex-col gap-3 card2 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Blog</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-10">
          <div className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cookpad</h3>
              <p className=" text-gray-500">cookpad.com</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row gap-3 px-10 text-lg">
            <img src={address2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Homes</h3>
              <p className=" text-gray-500">Homes.com</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={address3} alt="" className=" w-[10%] h-[50%] mt-3" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Apps</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="grid grid-cols-4">
        <div className="flex flex-col items-center text-center">
            <img src={search1} alt="" className="h-[4rem]" />
            <p>Onion</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={search2} alt="" className="h-[4rem]" />
            <p>Video Editing Tool</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={search3} alt="" className="h-[4rem]" />
            <p>Riddler.io</p>
          </div>

          <div className="flex flex-col items-center text-center pb-10">
            <img src={search4} alt="" className="h-[4rem]" />
            <p>SEO Extension</p>
          </div>
        </div>  
      </div>

      <div className=" flex flex-col gap-3 card1 rounded-2xl">
        <div className="flex flex-row justify-between p-10">
          <h1 className=" text-2xl font-bold">Blog</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-10">
          <div className="flex flex-row gap-3 px-10 text-lg">
            <img src={address1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Android App</h3>
              <p className=" text-gray-500">github.com/topics/profile-link</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row gap-3 px-10 text-lg">
            <img src={page1} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Archived today</h3>
              <p className=" text-gray-500">chaches clear </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row gap-3 px-10 text-lg pb-6">
            <img src={page2} alt="" className=" w-[12%]" />
            <div className="flex flex-col">
              <h3 className="font-bold">Vrbo</h3>
              <p className=" text-gray-500">vrbo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
