import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "byu9vdij",
    apiVersion : "2024-07-24",
    // useCdn : process.env.NODE_ENV === "production",
    useCdn : process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
}

export const sanityClient = createClient(config); 

export const urlFor = (source : any) => {
    return createImageUrlBuilder(config).image(source);
}
