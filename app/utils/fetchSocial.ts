import { Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

export const fetchSocial = async () => {
  try {
    const query = groq`*[_type == "social"]`;
    const socials: Social[] = await sanityClient.fetch(query);
    return socials;
  } catch (err) {
    return [] as Social[];
  }
}