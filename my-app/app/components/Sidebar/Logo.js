import Image from "next/image";
import Tejman from "./TejMan.svg";
import "../../globals.css";

export default function Logo() {
    return(
        <div className="Logo h-[4.575rem]  flex items-center justify-center p-2">
        
                      {/* check with the placement of logo */}
        
                        <Image 
                          src={Tejman} 
                          alt="TejMan Logo"
                          width={120}
                          height={50}
                          className="w-[80%] h-auto"
                        />
                    </div>
        
    )
}