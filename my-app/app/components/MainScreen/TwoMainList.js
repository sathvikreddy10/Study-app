import Filter from "./Filter.svg";
import Image from "next/image";
import NextTask from "./NextTask";

export default function TwoMainList() {

  // The data mapped exactly from your screenshot
  const listData = [
    {
      id: 1,
      title: "Intro to D.S.A",
      score: 2,
      total: 10,
      subItems: [
        "Hello World",
        "Hi everyone!",
        "Devara weds peddi",
        "Tejman is gay",
        "Tejman has no modda"
      ]
    },
    { id: 2, title: "Que and Stack", score: 6, total: 10 },
    { id: 3, title: "Linked list", score: 0, total: 10 },
    { id: 4, title: "Circular list", score: 9, total: 10 },
    { id: 5, title: "Devara list", score: 9, total: 10 },
  ];

  return (
    <>
    <div className="MainScreen flex-1 flex flex-col gap-[0.8rem] h-full">
   
                 <div className="next_task flex items-center justify-center gap-[3rem] bg-[#222020] h-[4.575rem] rounded-[10px] px-[1rem] py-[0.25rem]">
                   <NextTask/>
                 </div>
           
   
                  <div className="Main_lists px-[2rem] pt-[0.5rem] bg-[#222020] flex-1 rounded-[10px] overflow-y-auto">

                    <div className="header text-[1.5rem] font-medium text-[#5c5c5c] mb-4">
                      Devara
                    </div>

                    <div className="chalu_inkachalu px-[1rem] flex flex-col gap-[2.5rem]">

                        {/* Loops through the data above */}
                        {listData.map((item, index) => {
                          const percentage = (item.score / item.total) * 100;

                          return (
                            // Adds a bottom border only if it has subItems (like the first one)
                            <div key={item.id} className={`list_container flex flex-col ${item.subItems ? 'border-b border-[#444444] pb-[1.5rem]' : ''}`}>
                              
                              <div className="topi flex justify-between items-center">
                                  <div className="left">
                                      <div className="heading text-[1.8rem] font-Outfit text-[#e0e0e0]">
                                          {item.id}.  {item.title}
                                      </div> 
                                  </div>

                                  <div className="right flex items-center gap-[1.5rem]">
                                      <div className="progresbar">
                                          <div className="prog w-[9rem] h-[0.9rem] bg-[#666666] rounded-full overflow-hidden">
                                              <div 
                                                className="h-full bg-[#B3BF00] rounded-full" 
                                                style={{ width: `${percentage}%` }}
                                              ></div>
                                          </div> 
                                      </div> 

                                      {/* Fraction styling to make the first number bigger */}
                                      <div className="score text-[#e0e0e0] flex items-baseline">
                                        <span className="text-[1.6rem] leading-none">{item.score}</span>
                                        <span className="text-[1.1rem] leading-none text-[#a0a0a0]">/{item.total}</span>
                                      </div>
                                  </div>
                              </div>

                              {/* Only renders this block if subItems exist */}
                              {item.subItems && (
                                <div className="sub_items flex flex-col gap-[0.4rem] mt-[1rem] pl-[2.2rem]">
                                  {item.subItems.map((sub, i) => (
                                    <div key={i} className="sub_item flex items-center gap-[0.6rem] text-[#e0e0e0] text-[1.1rem]">
                                      {/* The tiny gray triangle */}
                                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L0 8L0 0L6 4Z" fill="#5c5c5c"/>
                                      </svg>
                                      {sub}
                                    </div>
                                  ))}
                                </div>
                              )}

                            </div>
                          )
                        })}

                    </div>

                  </div>
               </div>
    </>
  )
}