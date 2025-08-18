import { Social } from "@/typings";
import { getBaseUrl } from "./getBaseUrl";

export const fetchSocial = async () => {
     const req = await fetch(`${getBaseUrl()}/api/getSocial`,{
          cache : "no-store"
      });
     const data = await req.json();
     const socials : Social[] = data.socials;
     // console.log(socials);
     return socials;
}