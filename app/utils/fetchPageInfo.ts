import { PageInfo } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

export const fetchPageInfo = async () => {
  try {
    const query = groq`*[_type == "pageInfo"][0]`;
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return pageInfo;
  } catch (err) {
    return {} as PageInfo;
  }
}