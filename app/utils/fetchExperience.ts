import { Experience } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

export const fetchExperience = async () => {
  try {
    const query = groq`*[_type == "experience"]{ ..., technologies[]-> }`;
    const experience: Experience[] = await sanityClient.fetch(query);
    return experience;
  } catch (err) {
    return [] as Experience[];
  }
}