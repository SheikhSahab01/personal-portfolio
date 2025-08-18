"use client"
import React from 'react';
import {motion} from "framer-motion";

interface Props {
    
}

const BackgroundCircle = (props: Props) => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{
            scale : [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius : ["20%","20%","50%","80%","20%"]
        }}
        transition={{duration: 1.5}}
        className="relative flex justify-center items-center">
            <div className="absolute mt-52 rounded-full border border-[#333333] h-[200px] w-[200px] animate-ping" />
            <div className="absolute mt-52 rounded-full border border-[#333333] h-[300px] w-[300px]"/>
            <div className="absolute mt-52 rounded-full border border-[#333333] h-[500px] w-[500px]"/>
            <div className="absolute mt-52 rounded-full border border-[#F7AB0A] h-[650px] w-[650px] animate-pulse opacity-20"/>
            <div className="absolute mt-52 rounded-full border border-[#333333] h-[800px] w-[800px] animate-pulse"/>
        </motion.div>
    )
}

export default BackgroundCircle
