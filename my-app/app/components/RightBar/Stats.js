import Image from "next/image"
import Green from"./greenarr.svg"
import Red from"./redarr.svg"

export default function Stats({s}) {
  return (
    <div className="Stats bg-[#222020] flex flex-col flex-1 rounded-[10px] pt-[1.25rem] pl-[1.75rem] pr-[2rem]">            
            <div className="heading justify-between flex mb-4">
              <div className="stat_heading text-sm leading-none pt-0.5">Devara/Notes</div>
              <div className="stat_share text-sm leading-none pt-0.5">Share</div>
            </div>

            <div className="stat_type text-[0.8rem] leading-none mb-6">
              Last Hour
            </div>

            <div className="stat_data_container flex flex-col pl-[0.8rem] pr-[0.25rem] flex-[1]">

              {/* Loop starts here */}
              {s.map((item, index) => (
                <div key={index} className="stat_elem flex justify-between">
                  
                  <div className="stat_item text-[1.2rem]">
                    <div className="stat_item_name">{item.stat}</div>
                  </div>

                  <div className="change_indicator flex gap-1">
                    <div className="change_number_indicator leading-none text-[0.75rem]">
                      {/* Adds a '+' if positive, otherwise just shows the number */}
                      {item.delta > 0 ? `+${item.delta}` : item.delta}
                    </div>
                    <div className="icon justify-center items-center"> 
                              <Image 
                              src={item.delta >= 0 ? Green : Red} 
                              alt="indicator"
                              width={120}
                              height={50}
                              className="w-[1.5rem] h-[1.65rem]"
                            /> 
                    </div>
                    <div className="stat_item_name">56</div>
                  </div>
                </div> 
              ))}

            </div>

            <div className="Get_back mb-[1rem]">
              Get Back to Work 
            </div>

          </div>
  )
}