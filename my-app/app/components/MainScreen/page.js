import Image from "next/image"
import Filter from "./Filter.svg";
import NextTask from "./NextTask";
import MainList from "./MainList";
export default function MainScreen() {
  return (
     <div className="MainScreen flex-1 flex flex-col gap-[0.8rem] h-full">

              <div className="next_task flex items-center justify-center gap-[3rem] bg-[#222020] h-[4.575rem] rounded-[10px] px-[1rem] py-[0.25rem] flex" >
                <NextTask/>
              </div>
        

               <div className="Main_lists p-[1rem] bg-[#222020] flex-1 rounded-[10px]">

                   <div className="topbar">
                  <div className="Filter flex gap-3">
                    <div className="filter_heading "> Filter </div>
                    <div className="icon"> 
                              <Image 
                              src={Filter} 
                              alt="filter"
                              width={120}
                              height={50}
                              className="w-[1rem] h-[1.65rem]"
                            /> 
                            </div>
    
                  </div>
                </div>
                    <div className="container_for_cards pt-[0.75rem]">
                        <MainList 
                          percentage_completion={50}
                          subtopics={[
                            { name: "Definite Integrals", completion: 100 },
                            { name: "Indefinite Integrals", completion: 75 },
                            { name: "Integration by Parts", completion: 40 },
                          ]}
                        />
                    </div>
               </div>
            </div>
  )
}
