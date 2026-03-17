import Image from "next/image"

import Pen_bar from"./Pen_Prog.svg"
import Hamburger from "./Hamburger.svg"
import NewChat from "./NewChat.svg"

export default function AiBot() {
  return (
    
    <div className="ai_bot_right flex flex-col bg-[#222020] h-[19.75rem] rounded-[10px] py-[1.25rem] px-[1.45rem]">

            <div className="bot_top_bar flex justify-between mb-[1.2rem]">
              <div className="icon"> 
                            <Image 
                            src={Hamburger} 
                            alt="Hamburger"
                            width={50}
                            height={50}
                            className="w-[1.2rem] h-auto"
                          /> 
              </div>

              <div className="icon"> 
                            <Image 
                            src={NewChat} 
                            alt="NewChat"
                            width={50}
                            height={50}
                            className="w-[1.2rem] h-auto"
                          /> 
              </div>
            </div>

            <div className="main_txt px-[1rem] w-[80%] flex-[1]">
              U are doing good ! keep going 
              i wont say this is the best but this is how better should come there is no 
            </div>
            <div className="searchbar bg-[#333030] h-[2.5rem] rounded-[0.35rem]"></div>

          </div>
         
  )
}
