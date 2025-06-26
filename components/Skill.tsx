"use client"
import { urlFor } from "@/sanity";
import { Skills } from "@/typings";
import {motion} from "framer-motion"
import React from 'react'

interface Props {
    dirLeft?: boolean;
    oneskill? : Skills
}

const Skill = (props: Props) => {
    return (
        <motion.div className="group relative flex cursor-pointer">
            <motion.div initial={{x : props.dirLeft ? -200 : 200, opacity : 0}} transition={{duration: 1}} whileInView={{x:0, opacity: 1}} 
            className="flex items-center justify-center  rounded-full p-1 border border-[#333333] object-contain w-16 h-16 xl:w-20 xl:h-20
                filter group-hover:grayscale transition duration-300 ease-in-out ">
                <motion.img className="rounded-full w-14 h-14 xl:w-18 xl:h-18 object-cover" src={urlFor(props.oneskill?.projectImage).url()} alt="skill" />
            </motion.div>
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-[#333333] rounded-full absolute opacity-0 group-hover:opacity-80">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-lg font-semibold">{props.oneskill?.progress}%</p>
                    </div>
                </div>
        </motion.div>
    )
}

export default Skill
