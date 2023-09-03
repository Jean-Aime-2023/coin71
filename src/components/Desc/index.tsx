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

const index = () => {
  const [togglState, setTogglState] = useState(1);
  const togglTab = (index: any) => {
    setTogglState(index);
  };

  return (
    <div className="bg-gray-400 p-12 grid xl:grid-cols-3 gap-10 lg:grid-cols-2 max-lg:px-[7rem] max-sm:px-3 overflow-x-hidden overflow-y-hidden max-shrink:text-xs">
      <div className="hidden max-lg:flex flex-col gap-3 overflow-x-hidden">
        <ul className="flex overflow-x-scroll gap-9">
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


        <div className={togglState === 1 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <div><Side1 /></div>
            <div><Side2/></div>
            <div><Side3/></div>
          </div>
        </div>
        <div className={togglState === 2 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Cashback />
          </div>
        </div>
        <div className={togglState === 3 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Blog />
          </div>
        </div>
        <div className={togglState === 4 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Notizen />
          </div>
        </div>
        <div className={togglState === 5 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Bookmarks />
          </div>
        </div>
        <div className={togglState === 6 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Apps />
          </div>
        </div>
        <div className={togglState === 7 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Address />
          </div>
        </div>
        <div className={togglState === 8 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Search />
          </div>
        </div>
        <div className={togglState === 9 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Pages />
          </div>
        </div>
        <div className={togglState === 10 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <Weather />
          </div>
        </div>
        <div className={togglState === 11 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <ToDo />
          </div>
        </div>
        <div className={togglState === 12 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
            <View />
          </div>
        </div>
        <div className={togglState === 13 ? "content1 activeAllContent" : "content1"}>
          <div className="flex flex-col gap-5">
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
