"use client"
import { Social } from "@/typings"
import {motion} from "framer-motion"
import Link from "next/link"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import ThemeToggler from "@/components/ThemeToggler";

type Props = {
    socials : Social[]
}

const Header = ({socials}: Props) => {
    return (
        
        <header className='sticky top-0 max-w-7xl mx-auto z-40 flex items-center justify-between p-2 md:px-2 bg-white dark:bg-[rgb(36,36,36)] text-black dark:text-white'>
                <motion.div initial={{x: -500, opacity: 0, scale : 0.5}} animate={{x: 0, opacity: 1, scale : 1}} transition={{duration: 1}} className="flex items-center">
                {socials.map((social: any) => (
                    <SocialIcon key={social._id} fgColor='grey' bgColor='transparent' url={social.url} target="_blank"/>
                ))}
                </motion.div>
                <motion.div initial={{x: 500, opacity: 0, scale : 0.5}} animate={{x: 0, opacity: 1, scale : 1}} transition={{duration: 1}}  className="flex items-center gap-2">
                    <Link href="#contact" legacyBehavior passHref>
                        <motion.a className="flex items-center cursor-pointer ">
                            <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-300 mr-1" />
                            <p className="uppercase hidden md:inline-flex text-gray-600 dark:text-gray-300 ml-2">get in touch</p>
                        </motion.a>
                    </Link>
                    <ThemeToggler />
                </motion.div>
        </header>
    )
}

export default Header
