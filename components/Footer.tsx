"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import { ChevronUpIcon } from '@heroicons/react/16/solid'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

interface Props {
    pageInfo: PageInfo
}

const Footer = ({pageInfo}: Props) => {
    const myimg = "https://ik.imagekit.io/dfkiqup81/Personal/personal_image.JPEG"

    return (
        <Link href="#hero" >
            <footer className="sticky bottom-5 w-fit mx-auto  ">
                <div className="group flex items-center justify-center flex-col">
                    <ChevronUpIcon className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-all ease-linear"   />
                    <motion.div className="w-9 h-9 rounded-full relative overflow-hidden filter grayscale group-hover:grayscale-0 animate-bounce">
                        <Image src={urlFor(pageInfo.heroImage).url()} alt="personal_image" fill className="object-cover object-top" unoptimized />
                    </motion.div>
                </div>
            </footer>
        </Link>
    )
}

export default Footer
