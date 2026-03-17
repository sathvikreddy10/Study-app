import Image from "next/image";
import Todolist from "./Todolist";
import Navbar from "./Navbar";
import checkbox from "./Checkbox.svg"
import Logo from "./Logo";

export default function SideBar() {
  return (
 
 <>
            <Logo/>

            
            <Navbar/>



            <Todolist percentage_completion={30}/>
 </>
  )}