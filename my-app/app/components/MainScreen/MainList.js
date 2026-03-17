import Image from "next/image"
import Filter from "./Filter.svg"

export default function MainList({percentage_completion,subtopics}) {
  return (
    <>
              
    
                
                  <div className="card w-[27.8rem] flex h-[12.8rem] rounded-[10px] bg-[#272727] justify-between p-[1rem]">
    
                    <div className="left flex flex-col justify-between h-full">
                      <div className="upper">
                        <div className="Heading text-[1.65rem]">Integrals</div>
                        <div className="Heading text-[0.65rem] mt-3">current session:</div>
                        <div className="Heading text-[1rem]">Definitive</div>
                        <div className="Heading text-[0.65rem] mt-1">current session:</div>
                        <div className="Heading text-[1rem]">Definitive</div>
                      </div> 
                      <div className="progbar">
    
                        <div className="progress_container flex gap-[1.6rem] mb-[2rem]">
                          <div className="progress_bar_todolist rounded-[1.50rem] bg-[#666666] h-[0.8rem] w-[5.5rem]">
                              <div className="progree_bar_green h-[0.78rem] rounded-[1.50rem] bg-[#B3BF00]" style={{ width: `${percentage_completion}%` }}></div>
                          </div>
    
                          <div className="percentage_todolist leading-none text-[0.8rem] pt-[0.095rem] ">${percentage_completion}</div>
    
                        </div>
                      </div>
    
                    </div>
    
                  <div className="right flex flex-col w-[45%] pt-[2rem] overflow-scroll">
                      {subtopics.map((topic, index) => (
                        <div key={index} className="task_holder flex justify-between items-center py-[1rem]">
                          <div className="name text-[1.25rem] leading-none">{topic.name}</div>
                          <div className="name text-[1rem] leading-none">{topic.completion}%</div>
                        </div>
                      ))}
                  </div>
    
                  </div>
               
    </>
  )
}




