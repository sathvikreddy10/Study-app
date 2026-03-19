import Image from "next/image"
import Filter from "./Filter.svg"

export default function MainList({percentage_completion,subtopics}) {
  const progbar_width =5.5;
  const current_session="Definite";
  const Hours="222";
  return (
    <>
              
    
     
    
                
                  <div className="card w-[27.8rem] flex h-[12.8rem] rounded-[10px] bg-[#272727] py-[1.2rem] pl-[1.2rem]">
                    <div className="left flex flex-col justify-between h-full">
                      <div className="upper">
                         <div className="Heading text-[1.65rem]">Integrals</div>
                                 <div className="mt-[0.45rem] flex flex-col gap-[0.46rem]">
                                      <div className="subtitles flex flex-col gap-[0.46rem]">
                                          <div className=" text-[0.65rem] leading-none font-medium text-[#9e9e9eff]">current session:</div>
                                          <div className=" text-[1rem] leading-none font-medium">{current_session}</div>
                                      </div>
                                      <div className="subtitles flex flex-col gap-[0.46rem]">
                                          <div className=" text-[0.65rem] leading-none font-medium text-[#9e9e9eff]">Hours:</div>
                                          <div className=" text-[1rem] leading-none font-medium">{Hours}</div>
                                      </div>
                                  </div>
                         </div> 


                      <div className="progbar">
    
                        <div className="progress_container flex gap-[3rem] mb-[0.54rem] items-center self-center">
                          <div className="progress_bar_todolist rounded-[1rem] bg-[#666666] h-[0.85rem]}" style={{ width: `${progbar_width}rem` }}>
                              <div className="progree_bar_green h-[0.85rem] rounded-[1rem] bg-[#B3BF00]" style={{ width: `${percentage_completion}%` }}></div>
                          </div>
    
                          <div className="percentage_todolist leading-0 text-[1.15rem] font-Outfit font-medium self-center">{percentage_completion}%</div>
    
                        </div>
                      </div>
    
                    </div>

                    
                    <div className="middle_line w-[1px] h-[90%] ml-[1.5rem] self-center bg-[#494848ff]"></div>


                    <div className="right flex flex-col flex-[1] pt-[1rem] ml-[0.5rem] gap-[0.75rem] overflow-scroll pr-4">
                      {subtopics.map((topic, index) => (
                        <div key={index} className="task_holder flex justify-between items-center gap-1">
                          
                          {/* Notice the backticks (`) and ${} inside the className. 
                            If completion is 100, it adds "line-through text-[#888888]". Otherwise, it adds nothing ("").
                          */}
                          <div 
                            className={`name text-[1.2rem] leading-tight truncate pr-6 font-Outfit font-medium ${
                              topic.completion === 100 ? "line-through text-[#888888]" : ""
                            }`}
                          >
                            {index + 1}. {topic.name}
                          </div>

                          <div 
                            className={`name text-[1rem] leading-tight ${
                              topic.completion === 100 ? "line-through text-[#888888]" : ""
                            }`}
                          >
                            {topic.completion}%
                          </div>

                        </div>
                      ))}
                    </div>



      
                  </div>
               
    </>
  )
}




