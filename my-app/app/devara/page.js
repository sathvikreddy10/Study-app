import Image from "next/image";
import "../globals.css";
import Rightbar from "../components/RightBar/Rightbar";

import SideBar from "../components/Sidebar/page";
import MainScreen from "../components/MainScreen/TwoMainList"

export default function Home() {
  return (
    <div className="full_body px-3 pt-[1.15rem] pb-[0.75rem] w-full h-screen flex gap-[1.15rem] font-DM">
      

        
        
        
        
        
        
        <div className="SideBar w-[10.55rem] flex flex-col gap-[0.8rem]">
          <SideBar/>
        </div>

        
        
        
        
        
        <MainScreen/>
        
        <div className="RightBar w-[23.5rem] flex flex-col gap-[1.15rem]">
         <Rightbar/>
        </div>

      
    </div>
  );
}
