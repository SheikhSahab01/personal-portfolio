"use client"
import React from 'react';
import { Cursor,  useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

interface Props {
    pageInfo : PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, This is ${pageInfo?.name.slice(0, 4)}.tsx`, "Creating New design Using !DocType", ".js .tsx .ts .scss and Many more"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="flex flex-col space-y-8 justify-center items-center h-screen text-center overflow-hidden">
            <BackgroundCircle />
            <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt='Personal_image'
                width={160}
                height={160}
                className='relative rounded-full h-40 w-40 object-cover object-top mx-auto'
                priority
                unoptimized
            />
            <div className="z-20">
                <h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">{pageInfo?.role}</h2>
                <h1 className="text-2xl lg:text-4xl font-semibold px-10"><span>{text}</span><Cursor cursorColor="#F7AB0A" /></h1>
                <div className="pt-5">
                    <Link href="#about"><button className="heroBtn">About</button></Link>
                    <Link href="#experience"><button className="heroBtn">Experience</button></Link>
                    <Link href="#skills"><button className="heroBtn">skills</button></Link>
                    <Link href="#projects"><button className="heroBtn">Projects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
