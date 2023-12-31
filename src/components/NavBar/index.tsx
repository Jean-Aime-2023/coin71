import profileImg from "../../assets/profile.jpeg";
import addIcon from '../../assets/ic_baseline-plus.png'
import menuIcon from '../../assets/menu-icon.png'

const NavBar = () => {


  return (
    <div className="h-[70px] w-[100%] text-white px-12 max-md:px-7 py-3 justify-between flex flex-row"> 
        <div className="flex flex-row justify-between items-center gap-4">
          <button className="bg-gray-800 py-3 px-8 rounded-full font-semibold hover:scale-x-110 hover:scale-100 hover:bg-slate-700">Share</button> 
          <img src={addIcon} alt="" className="h-8 hover:scale-x-110 hover:scale-100 cursor-pointer"/>
        </div>
        <div className="flex flex-row items-center gap-5 max-md:hidden">
          <p className="text-xl text-black">Dua Lipa</p>
          <img src={profileImg} alt="profile" className="rounded-full h-[100%]"/>
        </div>
        
        <div className="md:hidden flex flex-row items-center">
          <img src={menuIcon} alt="menuIcon" />
        </div>

      </div>
  )
}

export default NavBar