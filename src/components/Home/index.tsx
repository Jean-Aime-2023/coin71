import logo from "../../assets/logoo 1.png";
import icon from "../../assets/formkit_down.png";
import icon1 from "../../assets/mdi_pan-right.png";
import MyModal from "../MyModal/MyModal";
import { useState } from "react";

const index = () => {
    const [showMyModal, setShowMyModal] = useState(false)

    const handleOnClose =()=> {
        setShowMyModal(false)
    }

  return (
    <>
      <div className="flex flex-col gap-14 justify-center">
        {/* navbar */}
        <div className="w-[96%] shadow-2xl flex flex-row justify-between p-3 rounded-full mx-9 text-center items-center my-6">
          <img src={logo} alt="" />
          <ul className="flex flex-row gap-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Coupons</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">My Favorite</a>
            </li>
          </ul>
          <div className="cursor-pointer">
            <p className="flex flex-row items-center" onClick={()=>setShowMyModal(true)}>
              <span className=" text-gray-400">Shipping Country:</span> Germany{" "}
              <img src={icon} alt="" className="h-[10px]" />
            </p>
          </div>
        </div>

        {/* categories */}

        <div className="mx-[17rem] flex flex-col gap-10">
          <div className="flex flex-row justify-between gap-7 bg-gray-100 items-center p-10 rounded-lg">
            <h1 className=" text-red-500 text-2xl text-center">
              20% <br />
              RABATT
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className=" bg-gray-500 py-3 px-8 rounded-full font-semibold flex flex-row items-center">
              Gutschein Anzeigen{" "}
              <span>
                {" "}
                <img src={icon1} alt="" />{" "}
              </span>
            </button>
          </div>

          <div className="flex flex-row justify-between gap-7 bg-gray-100 items-center p-10 rounded-lg">
            <h1 className=" text-red-500 text-2xl text-center">
              20% <br />
              RABATT
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className=" bg-gray-500 py-3 px-8 rounded-full font-semibold flex flex-row items-center">
              Gutschein Anzeigen{" "}
              <span>
                {" "}
                <img src={icon1} alt="" />{" "}
              </span>
            </button>
          </div>

          <div className="flex flex-row justify-between gap-7 bg-gray-100 items-center p-10 rounded-lg">
            <h1 className=" text-red-500 text-2xl text-center">
              20% <br />
              RABATT
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className=" bg-gray-500 py-3 px-8 rounded-full font-semibold flex flex-row items-center">
              Gutschein Anzeigen{" "}
              <span>
                {" "}
                <img src={icon1} alt="" />{" "}
              </span>
            </button>
          </div>

          <div className="flex flex-row justify-between gap-7 bg-gray-100 items-center p-10 rounded-lg">
            <h1 className=" text-red-500 text-2xl text-center">
              20% <br />
              RABATT
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className=" bg-gray-500 py-3 px-8 rounded-full font-semibold flex flex-row items-center">
              Gutschein Anzeigen{" "}
              <span>
                {" "}
                <img src={icon1} alt="" />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*  modal */}
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </>
  );
};

export default index;
