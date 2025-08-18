import { Social } from "@/typings";

export const fetchSocial = async () => {
     const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`,{
          cache : "no-store"
      });
     const data = await req.json();
     const socials : Social[] = data.socials;
     // console.log(socials);
     return socials;
}