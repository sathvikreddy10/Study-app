import Image from "next/image"

import AiBot from "./AiBot"
import Stats from "./Stats"

export default function Rightbar() {
  return (
    <>
        
       <Stats
        s={[
          { stat: "Attension", delta: +100 },
          

        ]}
      />
                               
        <AiBot/>
    </>
  )
}
