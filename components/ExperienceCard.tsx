"use client"
import { urlFor } from "@/sanity"
import { Experience } from "@/typings"
import {motion} from "framer-motion"
import Image from 'next/image'
import React from 'react'

type Props = {
  oneexperience: Experience;
}

const ExperienceCard = ({oneexperience}: Props) => {
  return (
    <article className=" bg-[#333333] p-10 snap-center flex flex-col items-center justify-start rounded-lg space-y-3 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] ">
        <motion.div className="h-24 w-28 rounded-md xl:w-[150px] xl:h-[100px] relative overflow-hidden">
          <Image src={urlFor(oneexperience.companyImage).url()} alt="company_logo" fill className="object-contain" unoptimized />
        </motion.div>
        <div className="px-0">
            <h4 className="text-3xl font-light">{oneexperience.jobTitle}</h4>
            <p className="font-bold text-xl mt-1">{oneexperience.company}</p>
            <div className="flex space-x-2 my-3">
              {oneexperience.technologies.map(tech => (
                <motion.div key={tech._id} className="h-7 w-7 rounded-full relative overflow-hidden">
                  <Image src={urlFor(tech.projectImage).url()} alt="" fill className="object-cover rounded-full" unoptimized />
                </motion.div>
              ))}
            </div>
            <p className="text-sm uppercase text-gray-400 pb-2 ">{oneexperience.dateStarted}
               - {oneexperience.isCurrentlyWorking ? 'Present': `${oneexperience.dateEnded}`}</p>
            
            <ul className="list-disc space-y-2 ml-5 text-sm mt-1">
              {oneexperience.points.map(point => (
                <li className="hidden md:list-item"  key={point}>{point}</li>
              ))}

              {oneexperience.points.map(point => (
                <li className="md:hidden"  key={point}>{point.slice(0, 25)}...more</li>
              ))}
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard