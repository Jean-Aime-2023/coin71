import icon1 from "../../assets/fluent_arrow-minimize-20-regular.png";
import icon2 from "../../assets/material-symbols_minimize.png";
import icon3 from "../../assets/solar_copy-linear.png";
import icon4 from "../../assets/uiw_down.png";

const index = () => {
  return (
    <div className="flex flex-col gap-3 flex-1 bg-white p-10 rounded-2xl">
      <div className=" flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <h1 className=" text-2xl font-bold">Cashback</h1>
          <div className="flex flex-row gap-10">
            <img src={icon1} alt="" className="w-[100%] h-[80%]" />
            <img src={icon2} alt="" className="w-[100%] h-[80%]" />
            <img src={icon3} alt="" className="w-[100%] h-[80%]" />
            <img src={icon4} alt="" className="w-[100%] h-[80%]" />
          </div>
        </div>
        <div>
          <li className="flex flex-row justify-between text-lg  ">
            <a
              href="#"
              className=" text-red-600 border border-b-red-600 border-b-4 font-bold"
            >
              Shop
            </a>
            <a href="#">Vouchers</a>
            <a href="#">My Order</a>
            <a href="#">My Favorite</a>
          </li>
        </div>
        <div className="flex flex-col gap-1">
          <hr className=" w-[100%]" />
          <div className="flex flex-row justify-between text-lg">
            <p className="text-gray-400">Shipping Country</p>
            <span className="flex flex-row gap-3 items-center">
              <p>Germany</p>
              <img
                src={icon4}
                alt=""
                className="w-[100%] h-[80%] cursor-pointer"
              />
            </span>
          </div>
          <hr />
        </div>

        <div className="grid grid-cols-5 px-5">
            <div>
              
            </div>
        </div>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};

export default index;
