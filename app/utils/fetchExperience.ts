import { Experience } from "@/typings";
import { getBaseUrl } from "./getBaseUrl";

export const fetchExperience = async () => {
     const req = await fetch(`${getBaseUrl()}/api/getExperience`,{
          cache : "no-store"
      });
     const data = await req.json();
     const experience : Experience[] = data.experience;
     return experience;
}