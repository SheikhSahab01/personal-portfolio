import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Projects } from "@/typings";

const query = groq`*[_type == "projects"]{ ..., technologies[]-> }`;

type Data = {
  projects: Projects[];
};

export async function GET() {
  const projects: Projects[] = await sanityClient.fetch(query);
  return NextResponse.json({ projects });
}

 