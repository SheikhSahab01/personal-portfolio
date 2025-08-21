"use client"
import {motion} from "framer-motion"
import React from 'react'
import ExperienceCard from "./ExperienceCard"
import { Experience } from "@/typings"

type Props = {
  experience: Experience[];
}

const WorkExperience = ({experience}: Props) => {
  return (
    <motion.div initial={{opacity: 0}} transition={{duration: 2}} whileInView={{opacity: 1}} className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-4 md:px-10 justify-evenly md:justify-end mx-auto items-center bg-white dark:bg-[rgb(36,36,36)] text-black dark:text-white">
        <motion.h3 initial={{letterSpacing: "80px"}} whileInView={{letterSpacing: "20px"}}  transition={{duration: 2}} className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 dark:text-gray-300">Experience</motion.h3>
        <div className="w-full flex space-x-5 overflow-x-scroll px-10 py-5 md:py-2 snap-x snap-mandatory">
            {experience?.map(oneexperience => (
              <ExperienceCard key={oneexperience._id} oneexperience={oneexperience} />
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience