import Image from "next/image"
import "../../globals.css";
import Search from "./Search.svg"
import L_extender from "./Lt_v2.svg"
import Pen_bar from"./Pen_Prog.svg"

export default function Navbar() {
  return (
    <div className="navbar bg-[#222020] h-[26.5rem] rounded-[10px] flex flex-col py-4 ">
    
                  <div className="navbar_inner_1 pt-[0.45rem] flex flex-col gap-[2.25rem]">
    
                    <div className="nav_elements flex flex-col gap-[0.45rem]">
    
                        <div className="tabs flex items-center gap-[1.15rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Search</div>
    
                        </div>
                        
                        <div className="tabs flex items-center gap-[1.15rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Search</div>
    
                        </div>
                        <div className="tabs flex items-center gap-[1.15rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Search</div>
    
                        </div>
                        <div className="tabs flex items-center gap-[1.15rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Search</div>
    
                        </div>
                        <div className="tabs flex items-center gap-[1.15rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Search</div>
    
                        </div>
                    </div>
                  
                    <div className="catalog_container pt-[0.1rem]">
                        <div className="Catalog_header flex items-center gap-[0.5rem] pl-7 pt-[0.15rem]">
                        
                          <div className="icon"> 
                            <Image 
                            src={Search} 
                            alt="Search icon"
                            width={120}
                            height={50}
                            className="w-[1rem] h-auto"
                          /> 
                          </div>
    
                          <div className="tab_name font-DM">Catalog</div>
    
                        </div>
    
                      <div className="Catalog_elems_container pt-[1rem] overflow-hidden flex flex-col">
                        
                          
                          <div className="Catalog_Element flex items-centre gap-[0.5rem] pl-7">
                        
                            <div className="icon"> 
                              <Image 
                              src={L_extender} 
                              alt="L_extender"
                              width={120}
                              height={50}
                              className="w-[1rem] h-[1.65rem]"
                            /> 
                            </div>
    
                            <div className="tab_name font-DM">Catalog</div>
                             
                            <div className="icon justify-center items-center"> 
                              <Image 
                              src={Pen_bar} 
                              alt="Pen_bar"
                              width={120}
                              height={50}
                              className="w-[1.5rem] h-[1.65rem]"
                            /> 
                            </div>
    
    
                          </div>
                        
                        
                          <div className="Catalog_Element flex items-centre gap-[0.5rem] pl-7">
                        
                            <div className="icon"> 
                              <Image 
                              src={L_extender} 
                              alt="L_extender"
                              width={120}
                              height={50}
                              className="w-[1rem] h-[1.65rem]"
                            /> 
                            </div>
    
                            <div className="tab_name font-DM">Catalog</div>
                             
                            <div className="icon justify-center items-center"> 
                              <Image 
                              src={Pen_bar} 
                              alt="Pen_bar"
                              width={120}
                              height={50}
                              className="w-[1.5rem] h-[1.65rem]"
                            /> 
                            </div>
    
    
                          </div>
    
    
    
                      </div>
                    </div>
                  
    
                 </div> 
    
    
                </div>
  )
}
