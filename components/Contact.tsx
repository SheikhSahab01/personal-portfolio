"use client"
import { PageInfo } from "@/typings"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"
import {motion} from "framer-motion"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  formmessage: string,
}

interface Props {
    pageInfo : PageInfo
}

const Contact = ({pageInfo}: Props) => {
    const { register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:asifsheikhsheikh786@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.formmessage}`
    }
    
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly items-center mx-auto ">
            <motion.h3 initial={{letterSpacing: "80px"}} whileInView={{letterSpacing: "20px"}}  transition={{duration: 1.3}} className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 z-10">contact</motion.h3>
            <div className="p-5 w-full flex flex-col space-y-2 md:space-y-5">
                <h4 className="text-lg md:text-4xl font-semibold text-center md:mb-3">
                    Shoot me a message. Lets Talk
                </h4>
            <div className="flex flex-col md:flex-row gap-5 md:mx-auto ">
                <div className="p-2 space-y-5 md:flex md:flex-col justify-start items-start">
                    <div className="flex space-x-5 justify-start items-center">
                        <PhoneIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse " />
                        <p className="text-lg md:text-xl"><a href={`tel:+91${pageInfo.phoneNumber}`}>+91 {pageInfo.phoneNumber}</a></p>
                    </div>
                    <div className="flex space-x-5 justify-start items-center">
                        <EnvelopeIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse " />
                        <p className="text-lg md:text-xl"><a href={`mailto:${pageInfo.email}`}>{pageInfo.email.slice(0, 19)}</a></p>
                    </div>
                    <div className="flex space-x-5 justify-start items-center">
                        <MapPinIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse " />
                        <p className="text-lg md:text-xl"><a href="https://maps.app.goo.gl/VuXCxCUBQ4fp4eBH6" target="_blank">{pageInfo.address}</a></p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2 w-full md:w-fit">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0" >
                        <input {...register('name')} type="text" placeholder="Name" className="contact-input"/>
                        <input {...register('email')} type="email" placeholder="Email" className="contact-input" />
                    </div>
                    <input {...register('subject')} type="text"  placeholder="Subject" className="contact-input"/>
                    <textarea {...register('formmessage')} placeholder="Message" className="contact-input" />
                    <button type="submit" className="bg-[#F7AB0A] text-center text-black rounded-sm py-3 px-10 font-semibold ">submit</button>
                </form>
            </div>

            </div>

        </div>
    )
}

export default Contact
