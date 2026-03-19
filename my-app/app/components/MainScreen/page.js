"use client";

import Image from "next/image"
import { usePathname } from "next/navigation";
import Filter from "./Filter.svg";
import NextTask from "./NextTask";
import MainList from "./MainList";


export default function MainScreen() {
  const pathname = usePathname();

  // Fixed the broken JS syntax so it's a valid array you can map over
  const chu = [
    {
      id: "Integrals",
      percentage_completion: 50,
      subtopics: [
        { name: "Definite Integrals", completion: 100 },
        { name: "Indefinite Integrals", completion: 75 },
        { name: "Integration by Parts", completion: 40 },
        { name: "Integration by Parts", completion: 40 },
      ]
    },
    {
      id: "bewawda",
      percentage_completion: 50,
      subtopics: [
        { name: "Definite Integrals", completion: 100 },
        { name: "Indefinite Integrals", completion: 75 },
        { name: "Integration by Parts", completion: 40 },
        { name: "Integration by Parts", completion: 40 },
      ]
    }
  ];

  // Completely swaps the scene to TwoMainList if on /devara
  const ActiveScene = pathname === "/devara" ? TwoMainList : MainList;

  return (
     <div className="MainScreen flex-1 flex flex-col gap-[0.8rem] h-full">

              <div className="next_task flex items-center justify-center gap-[3rem] bg-[#222020] h-[4.575rem] rounded-[10px] px-[1rem] py-[0.25rem]" >
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
                    <div className="container_for_cards pt-[0.75rem] grid grid-cols-2 gap-4">
                        
                        {/* Loops through the clean array and renders the active scene */}
                        {chu.map((item, index) => (
                          <ActiveScene 
                            key={index}
                            percentage_completion={item.percentage_completion}
                            subtopics={item.subtopics}
                          />
                        ))}

                    </div>
               </div>
            </div>
  )
}