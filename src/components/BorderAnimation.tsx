import React from 'react'
import {motion} from "framer-motion"

function BorderAnimation() {
  return (
    <motion.span
    className="h-[1.5px] bg-neutral-800"
    initial={{ width: 0 }}
    animate={{
      width: "100%",
    }}
    transition={{ duration: 1 }}
  ></motion.span>
  )
}

export default BorderAnimation
