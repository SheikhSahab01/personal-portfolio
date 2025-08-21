"use client"
import {motion} from "framer-motion"
import React from 'react'
import Skill from "./Skill"
import { Skills } from "@/typings"


interface Props {
    skills : Skills[]
}

const Skillscomp = ({skills}: Props) => {
    return (
        <motion.div initial={{opacity: 0}} transition={{duration: 2}} whileInView={{opacity: 1}}
         className="flex relative flex-col text-clip md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center bg-white dark:bg-[rgb(36,36,36)] text-black dark:text-white">
            <motion.h3 initial={{letterSpacing: "80px"}} whileInView={{letterSpacing: "20px"}}  transition={{duration: 2}} className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 dark:text-gray-300">skills</motion.h3>
            
            <h3 className="absolute top-36 uppercase tracking-[3px] text-sm text-gray-500 dark:text-gray-300 text-center">Hover over Skill for current proefficency</h3>
            <div className="grid grid-cols-4 gap-5 md:grid-cols-8 ">
                {skills.slice(0 , skills.length/2)?.map( skill => (
                    <Skill key={skill._id} oneskill = {skill} />
                ) )} 
                {skills.slice(skills.length/2, skills.length)?.map( skill => (
                    <Skill key={skill._id} oneskill = {skill} dirLeft />
                ) )}   
            </div>
        </motion.div>
    )
}

export default Skillscomp
