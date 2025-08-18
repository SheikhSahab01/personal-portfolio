import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Skills } from "@/typings";

const query = groq`*[_type == "skill"]`

type Data ={
    skills : Skills[]
}

export async function  GET(){
    const skills : Skills[] = await sanityClient.fetch(query)
    return NextResponse.json({ skills })
}