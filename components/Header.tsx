"use client"
import { Social } from "@/typings"
import {motion} from "framer-motion"
import Link from "next/link"
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
    socials : Social[]
}

const Header = ({socials}: Props) => {
    return (
        
        <header className='sticky top-0 max-w-7xl mx-auto z-40 flex items-center justify-between p-5'>
                <motion.div initial={{x: -500, opacity: 0, scale : 0.5,display: "none"}} animate={{x: 0, opacity: 1, scale : 1,display: "inline-flex"}} transition={{duration: 1}} className="flex items-center">
                {socials.map((social: any) => (
                    <SocialIcon key={social._id} fgColor='grey' bgColor='transparent' url={social.url} target="_blank"/>
                ))}
                </motion.div>
                <Link href="#contact">
                <motion.div initial={{x: 500, opacity: 0, scale : 0.5, display: "none"}} animate={{x: 0, opacity: 1, scale : 1 , display: "inline-flex"}} transition={{duration: 1}} className="flex items-center cursor-pointer ">
                    <SocialIcon fgColor='grey' bgColor='transparent' network='email'/>
                    <p className="uppercase hidden md:inline-flex text-gray-400">get in touch</p>
                </motion.div>
                </Link>
        </header>
    )
}

export default Header
