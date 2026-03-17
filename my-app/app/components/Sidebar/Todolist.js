import Image from "next/image";
import checkbox from "./Checkbox.svg"

export default function Todolist({percentage_completion}) {
  
  return (
    
   
        <div className="todolist bg-[#222020] flex-1 rounded-[10px] flex flex-col pt-5 px-[0.85rem]">
        
        
                    <div className="progress_container flex gap-[1.6rem] justify-center mb-[2rem]">
                      <div className="progress_bar_todolist rounded-[1.50rem] bg-[#666666] h-[0.8rem] w-[5.5rem]">
                          <div className="progree_bar_green h-[0.78rem] rounded-[1.50rem] bg-[#B3BF00]" 
                          style={{ width: `${percentage_completion}%` }}></div>
                      </div>
        
                      <div className="percentage_todolist leading-none text-[0.8rem] pt-[0.095rem] ">50%</div>
        
                    </div>
                    
                    <div className="todolist_taks flex flex-col">
                      <div className="tasks_element_container flex justify-between px-2">
                        <div className="todolist_task_name leading-none justify-center h-[1.65rem] items-center">Devara</div>
                                  <div className="icon"> 
                                      <Image 
                                      src={checkbox} 
                                      alt="checkbox"
                                      width={120}
                                      height={50}
                                      className="w-[1rem] h-[1.65rem]"
                                    /> 
                                  </div>
                          </div>
                      </div>
        
        
                    </div>
      
    
  )
}
