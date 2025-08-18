"use client"
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import {motion} from "framer-motion"
import Image from 'next/image'
import React from 'react';


type Props = {
  pageInfo : PageInfo

}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div initial={{opacity: 0}} transition={{duration: 2}} whileInView={{opacity: 1}} className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl  px-10 justify-evenly mx-auto items-center gap-3">
        <motion.h3 initial={{letterSpacing: "80px"}} whileInView={{letterSpacing: "20px"}}  transition={{duration: 2}} className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">About</motion.h3>
        <motion.div initial={{opacity: 0}} transition={{duration: 2.5}} viewport={{once: true}} whileInView={{opacity: 1}} className=" -mb-20 md:mb-0 flex-shrink-0 w-44 h-44 lg:w-100 lg:h-100 md:w-64 md:h-95 xl:h-[400px] xl:w-[300px] relative ">
          <Image src={urlFor(pageInfo.profilePic).url()} alt="Personal_image" fill className="rounded-full md:rounded-lg object-cover object-top" unoptimized />
        </motion.div>

        <div className="space-y-5 px-0 md:px-10 ">
            <h4 className="text-2xl font-semibold" >Here is some information about Me </h4>
            <p className="text-base text-gray-300 leading-7 md:hidden">{pageInfo.backgroundInformation}</p>
            <p className="text-base text-gray-300 leading-7 hidden md:block">{pageInfo.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About
