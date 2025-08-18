import { Projects } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

export const fetchProject = async () => {
  try {
    const query = groq`*[_type == "projects"]{ ..., technologies[]-> }`;
    const projects: Projects[] = await sanityClient.fetch(query);
    return projects;
  } catch (err) {
    return [] as Projects[];
  }
}