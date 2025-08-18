import { Experience } from "@/typings";

export const fetchExperience = async () => {
     const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,{
          cache : "no-store"
      });
     const data = await req.json();
     const experience : Experience[] = data.experience;
     return experience;
}