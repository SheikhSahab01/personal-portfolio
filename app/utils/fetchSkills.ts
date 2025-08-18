import {Skills} from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

export const fetchSkill = async () => {
  try {
    const query = groq`*[_type == "skill"]`;
    const skills: Skills[] = await sanityClient.fetch(query);
    return skills;
  } catch (err) {
    return [] as Skills[];
  }
}