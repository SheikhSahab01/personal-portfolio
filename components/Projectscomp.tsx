"use client"
import {motion} from "framer-motion"
import React from 'react'
import { Projects } from "@/typings"
import { urlFor } from "@/sanity"

interface Props {
    mProjects : Projects[]
}

const Projectscomp = ({mProjects}: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-l md:flex-row max-w-full justify-evenly mx-auto 
        items-center z-0">
            <motion.h3 initial={{letterSpacing: "80px"}} whileInView={{letterSpacing: "20px"}}  transition={{duration: 1.3}} className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 z-10">projects</motion.h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-sm text-gray-500 text-center z-10">Scroll Horizontally For more</h3>
            <div className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20   ">
                {mProjects?.map( (oneproject, i) => (
                    <div key={oneproject._id} className="w-screen flex-shrink-0  snap-center flex flex-col space-y-5
                    items-center justify-center px-10 md:px-20 proj-height">
                    <motion.img className="h-[100px] w-[100px] md:h-[130px] md:w-[200px] rounded-lg " src={urlFor(oneproject.projectImage).url()} alt="proj_img" />
                    <div className="flex flex-col items-center justify-start max-w-6xl">
                        <h4 className="text-3xl">Case Study {i + 1} of {mProjects.length}: {oneproject?.projectTitle}</h4>
                        <div className="flex items-start gap-1 mt-4">
                            {oneproject?.technologies.map( tech => (
                                <motion.img key={tech._id} className="h-7 w-7 rounded-full object-cover object-center" src={urlFor(tech.projectImage).url()} />
                            ))}
                        </div>
                        <ul className="list-disc space-y-2 ml-5 text-sm mt-1">
                            {oneproject?.summary.map(point => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                ) )}
            </div>

            <motion.div initial={{height: "100%"}} transition={{duration: 3}} whileInView={{height: '55%'}}  className="w-full absolute top-[50%] translate-y-[-50%] bg-[#333333] left-0 -skew-y-12  z-0" />
        </div>
    )
}

export default Projectscomp
