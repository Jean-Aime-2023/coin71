import Side1 from "../Side1";
import Side2 from "../Side2";
import Side3 from "../Side3";
import { useState } from "react";
import "./Desc.css";
import Cashback from "../Cashback";
import Blog from '../Blog'
import Notizen from '../Notizen'
import Apps from '../Apps'
import Search from '../Search'
import Address from '../Address'
import Weather from '../Weather'
import Pages from '../Pages'
import ToDo from '../ToDo'
import View from '../View'
import News from '../News'
import Bookmarks from '../Bookmarks'
import '../../App.css'
// import RightArrow from '../../assets/rightArrow.png'
// import LeftArrow from '../../assets/leftArrow.png'
const index = () => {


  const [togglState, setTogglState] = useState(1);
  const togglTab = (index: any) => {
    setTogglState(index);
  };

  const scrollLeft = () => {
    const listElement = document.getElementById("list") as HTMLElement | null;
    if (listElement) {
      listElement.scrollLeft -= 400;
    }
  };
  
  const scrollRight = () => {
    const listElement = document.getElementById("list") as HTMLElement | null;
    if (listElement) {
      listElement.scrollLeft += 400;
    }
  };
  


  return (
    <div className="bg-gray-400 p-12 max-lg:px-[7rem] max-md:px-3 grid xl:grid-cols-3 gap-10 lg:grid-cols-3 overflow-x-hidden overflow-y-hidden max-shrink:text-xs">
      <div className="hidden max-lg:flex flex-col gap-3 overflow-x-hidden max-lg:mb-[9rem]">
          
        <div className="flex flex-row justify-between self-end w-[5rem]">
          <div onClick={scrollLeft} className="bg-gray-700 p-2 rounded-full text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" stroke-width="2"/>
            </svg>
          </div> 
          <div onClick={scrollRight} className="bg-gray-700 p-2 rounded-full text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>  

        <div className="relative">
          <ul id="list" className="flex overflow-scroll scroll-smooth gap-9 scrollbar-hide max-lg:text-2xl max-md:text-2xl max-sm:text-2xl">
            <li className={togglState === 1 ? "activeAllTab" : ""} onClick={() => togglTab(1)} >
              All
            </li>
            <li className={togglState === 2 ? "activeAllTab" : ""} onClick={() => togglTab(2)}>
              Cashback
            </li>
            <li className={togglState === 3 ? "activeAllTab" : ""} onClick={() => togglTab(3)} >
              Blog
            </li>
            <li className={togglState === 4 ? "activeAllTab" : ""}onClick={() => togglTab(4)}>
              Notizen
            </li>
            <li className={togglState === 5 ? "activeAllTab" : ""}onClick={() => togglTab(5)}>
              Bookmarks
            </li>
            <li className={togglState === 6 ? "activeAllTab" : ""}onClick={() => togglTab(6)}>
              Apps
            </li>
            <li className={togglState === 7 ? "activeAllTab" : ""}onClick={() => togglTab(7)}>
              Pages
            </li>
            <li className={togglState === 8 ? "activeAllTab" : ""}onClick={() => togglTab(8)}>
              Search
            </li>
            <li className={togglState === 9 ? "activeAllTab" : ""}onClick={() => togglTab(9)}>
              Address
            </li>
            <li className={togglState === 10 ? "activeAllTab" : ""}onClick={() => togglTab(10)}>
              Weather
            </li>
            <li className={togglState === 11 ? "activeAllTab" : ""}onClick={() => togglTab(11)}>
              ToDo
            </li>
            <li className={togglState === 12 ? "activeAllTab" : ""}onClick={() => togglTab(12)} >
              View
            </li>
            <li className={togglState === 13 ? "activeAllTab" : ""}onClick={() => togglTab(13)} >
              News
            </li>
          </ul>
        </div>




        <div className={togglState === 1 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 gap-5">
            <div><Side1 /></div>
            <div><Side2/></div>
            <div><Side3/></div>
          </div>
        </div>
        <div className={togglState === 2 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Cashback />
          </div>
        </div>
        <div className={togglState === 3 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Blog />
          </div>
        </div>
        <div className={togglState === 4 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Notizen />
          </div>
        </div>
        <div className={togglState === 5 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Bookmarks />
          </div>
        </div>
        <div className={togglState === 6 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Apps />
          </div>
        </div>
        <div className={togglState === 7 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Pages />
          </div>
        </div>
        <div className={togglState === 8 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Search />
          </div>
        </div>
        <div className={togglState === 9 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Address />
          </div>
        </div>
        <div className={togglState === 10 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <Weather />
          </div>
        </div>
        <div className={togglState === 11 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <ToDo />
          </div>
        </div>
        <div className={togglState === 12 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <View />
          </div>
        </div>
        <div className={togglState === 13 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col mt-5 max-lg:flex-1 max-lg:overflow-hidden">
            <News />
          </div>
        </div>

      </div>



      <div className="max-lg:hidden">
        <Side1 />
      </div>

      <div className="max-lg:hidden">
        <Side2 />
      </div>

      <div className="max-lg:hidden">
        <Side3 />
      </div>

      
    </div>
  );
};

export default index;
