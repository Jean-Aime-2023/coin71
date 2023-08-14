import profileImg from "../../assets/profile.jpeg";
// import {GrAdd} from "react-icons/gr"


const NavBar = () => {
  return (
    <div className="h-[70px] w-[100%] text-white px-12 py-3 justify-between flex flex-row"> 
        <div>
          <button className=" bg-gray-800 py-3 px-8 rounded-full font-semibold ">Share</button> 
          {/* <GrAdd/> */}
        </div>
        <div className="flex flex-row items-center gap-5">
          <p className="text-xl text-black">Dua Lipa</p>
          <img src={profileImg} alt="profile" className="rounded-full h-[100%]"/>
        </div>
      </div>
  )
}

export default NavBar